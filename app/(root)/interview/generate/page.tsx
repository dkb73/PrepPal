import React from 'react'
import Agent from "@/components/Agent";
import { getCurrentUser } from '@/lib/actions/auth.action';

const GeneratePage = async () => {
  const user = await getCurrentUser();
  
  if (!user?.id) {
    return <div>Please log in to create an interview</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Create New Interview</h1>
      <Agent userName={user.name || ""} userId={user.id} type="generate"/>
    </div>
  );
}

export default GeneratePage;