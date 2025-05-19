
import React from "react";
import InnerPageLayout from "../components/layout/InnerPageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";

const Prizes: React.FC = () => {
  return (
    <InnerPageLayout 
      title="Prizes" 
      description="Discover the exciting rewards awaiting our hackathon winners and category champions."
    >
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Prize Pool</h2>
          <p className="mb-4">
            Our hackathon features an impressive prize pool of over $40,000 CAD, distributed across multiple categories and special awards to recognize excellence in various aspects of innovation.
          </p>
          <p className="mb-4">
            Beyond the monetary rewards, winners will gain industry recognition, mentorship opportunities with leading experts, and potential investment interest for promising projects.
          </p>
          <p>
            All participants will receive a certificate of participation, exclusive hackathon merchandise, and access to our network of industry partners for potential collaboration opportunities.
          </p>
        </div>
        <div className="relative h-[300px] md:h-auto overflow-hidden rounded-lg">
          <img 
            src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" 
            alt="Digital abstract" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">Main Prize Categories</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-2 border-[#F3D849] relative overflow-hidden">
            <div className="absolute -right-6 -top-6 w-24 h-24 bg-[#F3D849] rounded-full flex items-center justify-center transform rotate-12"></div>
            <CardContent className="pt-6 pb-8 relative z-10">
              <div className="flex items-center justify-center mb-4">
                <Award className="h-16 w-16 text-[#F3D849]" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-center">1st Place</h3>
              <p className="text-3xl font-bold text-center mb-4">$15,000 CAD</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#F3D849] rounded-full mr-2"></span>
                  <span>Grand Prize Trophy</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#F3D849] rounded-full mr-2"></span>
                  <span>Feature on Partner Platforms</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#F3D849] rounded-full mr-2"></span>
                  <span>1-Year Premium Cloud Credits</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#F3D849] rounded-full mr-2"></span>
                  <span>Mentorship Package</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-[#C0C0C0] relative overflow-hidden">
            <div className="absolute -right-6 -top-6 w-24 h-24 bg-[#C0C0C0] rounded-full flex items-center justify-center transform rotate-12"></div>
            <CardContent className="pt-6 pb-8 relative z-10">
              <div className="flex items-center justify-center mb-4">
                <Award className="h-16 w-16 text-[#C0C0C0]" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-center">2nd Place</h3>
              <p className="text-3xl font-bold text-center mb-4">$10,000 CAD</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#C0C0C0] rounded-full mr-2"></span>
                  <span>Runner-up Trophy</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#C0C0C0] rounded-full mr-2"></span>
                  <span>Feature on Partner Platforms</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#C0C0C0] rounded-full mr-2"></span>
                  <span>6-Month Premium Cloud Credits</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#C0C0C0] rounded-full mr-2"></span>
                  <span>Mentorship Package</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-[#CD7F32] relative overflow-hidden">
            <div className="absolute -right-6 -top-6 w-24 h-24 bg-[#CD7F32] rounded-full flex items-center justify-center transform rotate-12"></div>
            <CardContent className="pt-6 pb-8 relative z-10">
              <div className="flex items-center justify-center mb-4">
                <Award className="h-16 w-16 text-[#CD7F32]" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-center">3rd-5th Place</h3>
              <p className="text-3xl font-bold text-center mb-4">$5,000 CAD</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#CD7F32] rounded-full mr-2"></span>
                  <span>Recognition Award</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#CD7F32] rounded-full mr-2"></span>
                  <span>Social Media Recognition</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#CD7F32] rounded-full mr-2"></span>
                  <span>3-Month Premium Cloud Credits</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#CD7F32] rounded-full mr-2"></span>
                  <span>Networking Opportunities</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-8">Category Awards</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              title: "Best UI/UX Design", 
              prize: "$2,500 CAD",
              description: "Awarded to the project with the most intuitive, accessible, and visually appealing user interface."
            },
            { 
              title: "Most Innovative Use of AI", 
              prize: "$2,500 CAD",
              description: "Recognizing creative applications of artificial intelligence to solve complex problems."
            },
            { 
              title: "Best Social Impact", 
              prize: "$2,500 CAD",
              description: "For projects addressing important social issues with practical technological solutions."
            },
            { 
              title: "Best Use of Blockchain", 
              prize: "$2,500 CAD",
              description: "Celebrating innovative applications of blockchain technology beyond traditional use cases."
            }
          ].map((category, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-xl font-bold text-[#52A8AA] mb-3">{category.prize}</p>
                <p className="text-sm">{category.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl font-semibold mb-6">Special Recognition Awards</h2>
        <p className="mb-8">
          In addition to our main prizes, we recognize exceptional projects and teams in several special categories:
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-medium mb-3">Community Choice Award</h3>
            <p className="mb-6">
              Voted by hackathon participants and the wider community, this award recognizes the project that resonates most with users. Winners receive $1,500 CAD and community spotlight features.
            </p>
            
            <h3 className="text-xl font-medium mb-3">Best Rookie Team</h3>
            <p>
              For outstanding first-time hackathon participants who demonstrate exceptional potential. The winning team receives $1,500 CAD, mentorship opportunities, and guaranteed spots in our next event.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-3">Sustainability Champion</h3>
            <p className="mb-6">
              Awarded to the project that best addresses environmental sustainability challenges. Winners receive $1,500 CAD and partnership opportunities with sustainability-focused organizations.
            </p>
            
            <h3 className="text-xl font-medium mb-3">Technical Excellence</h3>
            <p>
              Celebrating exceptional code quality, technical implementation, and engineering solutions. Winners receive $1,500 CAD and specialized technical mentorship from industry experts.
            </p>
          </div>
        </div>
      </div>
    </InnerPageLayout>
  );
};

export default Prizes;
