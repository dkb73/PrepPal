import React from 'react'
import { getCurrentUser } from '@/lib/actions/auth.action';
import { getLatestInterviews } from '@/lib/actions/general.action';
import InterviewCard from "@/components/InterviewCard";

const GlobalPage = async () => {
  const user = await getCurrentUser();
  
  if (!user?.id) {
    return <div>Please log in to view global interviews</div>;
  }

  const latestInterviews = await getLatestInterviews({ userId: user.id }) || [];
  const hasUpcomingInterviews = latestInterviews.length > 0;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Global Interviews</h1>
      
      <div className="interviews-section">
        {hasUpcomingInterviews ? (
          latestInterviews.map((interview) => (
            <InterviewCard
              key={interview.id}
              {...interview}
            />
          ))
        ) : (
          <p className="text-center text-gray-500">There are no new interviews available</p>
        )}
      </div>
    </div>
  );
}

export default GlobalPage;