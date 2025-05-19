
import React from "react";
import InnerPageLayout from "../components/layout/InnerPageLayout";
import { Card, CardContent } from "@/components/ui/card";

const Submissions: React.FC = () => {
  return (
    <InnerPageLayout 
      title="Submissions" 
      description="Learn about the submission process, requirements, and view past winning projects."
    >
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Submission Guidelines</h2>
          <p className="mb-4">
            All hackathon submissions must adhere to our guidelines to be considered for judging. Please review the requirements carefully to ensure your project qualifies.
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>Projects must be submitted through the official submission portal by the deadline</li>
            <li>All code must be original or properly attributed if using open source resources</li>
            <li>Teams must include a brief description, list of technologies used, and installation instructions</li>
            <li>A demo video (maximum 3 minutes) showcasing your project's functionality</li>
            <li>Projects must align with this year's hackathon theme</li>
          </ul>
          <p>
            For detailed information about the submission process, please refer to our comprehensive <span className="text-[#52A8AA] underline cursor-pointer">Submission Guide</span>.
          </p>
        </div>
        <div className="relative h-[300px] md:h-auto overflow-hidden rounded-lg">
          <img 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
            alt="Person coding" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-6">Submission Timeline</h2>
        <div className="relative border-l-2 border-[#52A8AA] pl-8 ml-4 space-y-12">
          <div className="relative">
            <div className="absolute -left-[41px] bg-[#52A8AA] rounded-full w-6 h-6"></div>
            <h3 className="text-xl font-medium mb-2">Registration Opens</h3>
            <p className="text-gray-600 mb-1">June 1, 2025</p>
            <p>
              Team registration opens for all participants. Early registration is encouraged as space is limited.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -left-[41px] bg-[#52A8AA] rounded-full w-6 h-6"></div>
            <h3 className="text-xl font-medium mb-2">Hackathon Kickoff</h3>
            <p className="text-gray-600 mb-1">July 15, 2025</p>
            <p>
              Official start of the hackathon. Theme announcement and detailed guidelines will be provided.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -left-[41px] bg-[#52A8AA] rounded-full w-6 h-6"></div>
            <h3 className="text-xl font-medium mb-2">Submission Deadline</h3>
            <p className="text-gray-600 mb-1">July 25, 2025 - 11:59 PM EST</p>
            <p>
              All projects must be submitted by this time. Late submissions will not be accepted.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -left-[41px] bg-[#52A8AA] rounded-full w-6 h-6"></div>
            <h3 className="text-xl font-medium mb-2">Judging Period</h3>
            <p className="text-gray-600 mb-1">July 26-30, 2025</p>
            <p>
              Our panel of judges will review all qualifying submissions based on the evaluation criteria.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -left-[41px] bg-[#52A8AA] rounded-full w-6 h-6"></div>
            <h3 className="text-xl font-medium mb-2">Winners Announcement</h3>
            <p className="text-gray-600 mb-1">August 5, 2025</p>
            <p>
              Winners will be announced during the virtual award ceremony. All participants are invited to attend.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-6">Previous Winning Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-medium mb-2">EcoTrack</h3>
              <p className="text-sm text-gray-500 mb-3">2024 Winner - Sustainability Category</p>
              <p className="mb-3">
                A mobile app that helps users track and reduce their carbon footprint through personalized recommendations and community challenges.
              </p>
              <span className="text-[#52A8AA] cursor-pointer">View Project</span>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-medium mb-2">MediConnect</h3>
              <p className="text-sm text-gray-500 mb-3">2024 Winner - Healthcare Category</p>
              <p className="mb-3">
                A platform connecting remote communities with healthcare professionals through secure video consultations and AI-powered symptom assessment.
              </p>
              <span className="text-[#52A8AA] cursor-pointer">View Project</span>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-medium mb-2">LearnQuest</h3>
              <p className="text-sm text-gray-500 mb-3">2024 Winner - Education Category</p>
              <p className="mb-3">
                An interactive learning platform that adapts to students' learning styles using AI to create personalized educational content.
              </p>
              <span className="text-[#52A8AA] cursor-pointer">View Project</span>
            </CardContent>
          </Card>
        </div>
      </div>
    </InnerPageLayout>
  );
};

export default Submissions;
