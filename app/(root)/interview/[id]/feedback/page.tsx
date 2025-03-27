// app/(root)/interview/[id]/feedback/page.tsx
import dayjs from "dayjs";
import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";
import { ScoreRadialChart } from "@/components/ScoreRadialChart";
import { CategoryBarChart } from "@/components/CategoryBarChart";
import {
  getFeedbackByInterviewId,
  getInterviewById,
} from "@/lib/actions/general.action";
import { Button } from "@/components/ui/button";
import { getCurrentUser } from "@/lib/actions/auth.action";

const Page = async ({params}: RouteParams) => {
  // First await the user before using params
  const user = await getCurrentUser();
  
  // Then safely destructure params
  const { id } = await params;

  const interview = await getInterviewById(id);
  if (!interview) redirect('/');

  const feedback = await getFeedbackByInterviewId({
    interviewId: id,
    userId: user?.id!,
  });

  if (!feedback) {
    return (
      <div className="min-h-screen bg-white p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Feedback Not Available</h1>
          <p className="text-gray-600 mb-6">The feedback for this interview is not yet available.</p>
          <Button asChild>
            <Link href="/">Back to Dashboard</Link>
          </Button>
        </div>
      </div>
    );
  }

  // Prepare data for charts
  const categoryData = feedback.categoryScores?.map(category => ({
    name: category.name,
    score: category.score,
  })) || [];

  return (
    <div className="min-h-screen bg-gray-800 p-6 mx-15 rounded-4xl">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-200 mb-2">
            Interview Feedback - <span className="capitalize text-gray-200">{interview.role}</span>
          </h1>
          <div className="flex items-center justify-center gap-4 text-gray-200">
            <div className="flex items-center">
              <Image src="/calendar.svg" width={18} height={18} alt="calendar" className="mr-1" />
              <span>
                {feedback.createdAt ? dayjs(feedback.createdAt).format("MMM D, YYYY h:mm A") : "N/A"}
              </span>
            </div>
          </div>
        </div>

        {/* Score Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Overall Score Card */}
          <div className="bg-gray-50 rounded-lg p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Overall Performance</h2>
            <div className="flex flex-col items-center">
              <ScoreRadialChart score={feedback.totalScore} />
              <div className="mt-2 text-center">
                <span className={`text-2xl font-bold ${
                  feedback.totalScore >= 80 ? 'text-green-600' :
                  feedback.totalScore >= 60 ? 'text-blue-600' :
                  'text-red-600'
                }`}>
                  {feedback.totalScore}/100
                </span>
                <p className="text-gray-500 mt-1">
                  {feedback.totalScore >= 80 ? 'Excellent!' : 
                   feedback.totalScore >= 60 ? 'Good job!' : 
                   'Keep practicing!'}
                </p>
              </div>
            </div>
          </div>

          {/* Category Breakdown Chart */}
          <div className="bg-gray-50 rounded-lg p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Category Breakdown</h2>
            <div className="h-64">
              <CategoryBarChart data={categoryData} />
            </div>
          </div>
        </div>

        {/* Feedback Sections */}
        <div className="space-y-8">
          {/* Final Assessment */}
          <div className="bg-gray-50 rounded-lg p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-700 mb-3">Final Assessment</h2>
            <p className="text-gray-700 whitespace-pre-line">{feedback.finalAssessment}</p>
          </div>

          {/* Strengths & Areas for Improvement */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-lg p-6 shadow-sm border border-green-100">
              <h2 className="text-xl font-semibold text-green-800 mb-3">Strengths</h2>
              <ul className="space-y-2">
                {feedback.strengths?.map((strength, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">{strength}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-red-50 rounded-lg p-6 shadow-sm border border-red-100">
              <h2 className="text-xl font-semibold text-red-800 mb-3">Areas for Improvement</h2>
              <ul className="space-y-2">
                {feedback.areasForImprovement?.map((area, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span className="text-gray-700">{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Detailed Category Feedback */}
          <div className="bg-gray-50 rounded-lg p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Detailed Feedback by Category</h2>
            <div className="space-y-6">
              {feedback.categoryScores?.map((category, index) => (
                <div key={index} className="pb-4 border-b border-gray-200 last:border-0">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-medium text-gray-800">
                      {index + 1}. {category.name}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      category.score >= 80 ? 'bg-green-100 text-green-800' :
                      category.score >= 60 ? 'bg-blue-100 text-blue-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {category.score}/100
                    </span>
                  </div>
                  <p className="text-gray-700 whitespace-pre-line">{category.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <Button  className="flex-1 py-6" asChild>
            <Link href="/">
              <span className="text-sm font-semibold">Back to Dashboard</span>
            </Link>
          </Button>
          <Button className="flex-1 py-6" asChild>
            <Link href={`/interview/${id}`}>
              <span className="text-sm font-semibold">Retake Interview</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;