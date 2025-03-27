import React from 'react'
import { getCurrentUser } from '@/lib/actions/auth.action';
import { getInterviewsByUserId } from '@/lib/actions/general.action';
import InterviewCard from "@/components/InterviewCard";

const HistoryPage = async () => {
  const user = await getCurrentUser();
  
  if (!user?.id) {
    return <div>Please log in to view your interview history</div>;
  }

  const userInterviews = await getInterviewsByUserId(user.id) || [];
  const hasPastInterviews = userInterviews.length > 0;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Interview History</h1>
      
      <div className="interviews-section">
        {hasPastInterviews ? (
          userInterviews.map((interview) => (
            <InterviewCard
              key={interview.id}
              {...interview}
            />
          ))
        ) : (
          <p className="text-center text-gray-500">No past interviews found</p>
        )}
      </div>
    </div>
  );
}

export default HistoryPage;