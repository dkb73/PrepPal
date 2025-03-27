import React from 'react'
import Link from 'next/link'
import { 
  Rocket, 
  Clock, 
  Globe, 
  Star, 
  Briefcase, 
  Target, 
  TrendingUp, 
  Award 
} from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-gray-800">
      {/* Header Section */}
      <header className="container mx-auto px-6 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
          <div className="text-center lg:text-left max-w-2xl">
            <h1 className="text-5xl font-extrabold mb-4 text-white leading-tight">
              Ace Your Next Interview
            </h1>
            <p className="text-xl text-gray-400 mb-6">
              AI-powered interview preparation to transform your career trajectory
            </p>
            
          </div>
          <div className="w-full max-w-md">
            <div className="bg-gray-900 rounded-xl shadow-2xl border-4 border-gray-800 transform hover:scale-105 transition-transform duration-300 aspect-video flex items-center justify-center">
              <p className="text-gray-500">Dashboard Preview</p>
            </div>
          </div>
        </div>
      </header>

      {/* Dashboard Cards Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Create Interview Card */}
          <Card className="group bg-gray-900 border-gray-800 hover:border-gray-700 transition-all duration-300">
            <CardHeader className="space-y-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl font-bold text-white group-hover:text-gray-200 transition-colors">
                  Create Interview
                </CardTitle>
                <Rocket className="w-8 h-8 text-gray-600 group-hover:text-gray-400 transition-colors" />
              </div>
              <CardDescription className="text-base text-gray-500">
                Generate personalized AI interview scenarios
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/interview/generate" className="w-full block">
                <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white">
                  Start New Interview
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* History Interviews Card */}
          <Card className="group bg-gray-900 border-gray-800 hover:border-gray-700 transition-all duration-300">
            <CardHeader className="space-y-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl font-bold text-white group-hover:text-gray-200 transition-colors">
                  Interview History
                </CardTitle>
                <Clock className="w-8 h-8 text-gray-600 group-hover:text-gray-400 transition-colors" />
              </div>
              <CardDescription className="text-base text-gray-500">
                Track and analyze your past interview performances
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/interview/history" className="w-full block">
                <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white">
                  View History
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Global Interviews Card */}
          <Card className="group bg-gray-900 border-gray-800 hover:border-gray-700 transition-all duration-300">
            <CardHeader className="space-y-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl font-bold text-white group-hover:text-gray-200 transition-colors">
                  Global Interviews
                </CardTitle>
                <Globe className="w-8 h-8 text-gray-600 group-hover:text-gray-400 transition-colors" />
              </div>
              <CardDescription className="text-base text-gray-500">
                Learn from global interview experiences
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/interview/global" className="w-full block">
                <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white">
                  Browse Global
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-16 bg-gray-950">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Platform Features
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Comprehensive tools designed to elevate your interview preparation and professional growth
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature Cards */}
          <div className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800 transition-all group">
            <Briefcase className="w-12 h-12 text-gray-600 mb-4 group-hover:text-gray-400 transition-transform" />
            <h3 className="text-xl font-bold mb-2 text-white">Role-Specific Prep</h3>
            <p className="text-gray-500">Tailored interview scenarios for different industries</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800 transition-all group">
            <Target className="w-12 h-12 text-gray-600 mb-4 group-hover:text-gray-400 transition-transform" />
            <h3 className="text-xl font-bold mb-2 text-white">AI Feedback</h3>
            <p className="text-gray-500">Instant, actionable performance insights</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800 transition-all group">
            <TrendingUp className="w-12 h-12 text-gray-600 mb-4 group-hover:text-gray-400 transition-transform" />
            <h3 className="text-xl font-bold mb-2 text-white">Progress Tracking</h3>
            <p className="text-gray-500">Visualize your skill development over time</p>
          </div>
        </div>
      </section>
    </div>
  )
}