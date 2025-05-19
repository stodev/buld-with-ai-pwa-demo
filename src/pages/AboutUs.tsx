
import React from "react";
import InnerPageLayout from "../components/layout/InnerPageLayout";
import { Card, CardContent } from "@/components/ui/card";

const AboutUs: React.FC = () => {
  return (
    <InnerPageLayout 
      title="About Us" 
      description="Learn more about our hackathon organization and our mission to foster innovation and creativity."
    >
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="mb-4">
            Founded in 2020, our hackathon has grown from a small community event to a global platform for innovators, developers, and creative minds to showcase their talents and push the boundaries of technology.
          </p>
          <p className="mb-4">
            We believe in the power of collaboration, creativity, and technological innovation to solve real-world problems and create positive impact in our communities and beyond.
          </p>
          <p>
            Each year, we select challenging themes that address current issues and encourage participants to think outside the box while developing practical, scalable solutions.
          </p>
        </div>
        <div className="relative h-[300px] md:h-auto overflow-hidden rounded-lg">
          <img 
            src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
            alt="Team collaborating" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-medium mb-2">Innovation</h3>
              <p>
                We encourage bold ideas and creative approaches to problem-solving, pushing the boundaries of what's possible with technology.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-medium mb-2">Collaboration</h3>
              <p>
                We believe the best solutions emerge when diverse minds work together, sharing knowledge and building on each other's strengths.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-medium mb-2">Impact</h3>
              <p>
                We focus on creating solutions that address real needs and can make a meaningful difference in people's lives and communities.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-6">Our Team</h2>
        <p className="mb-8 max-w-2xl">
          Our diverse team brings together expertise from technology, business, design, and education to create an enriching hackathon experience for all participants.
        </p>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { name: "Alex Chen", role: "Founder & Director", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&auto=format&fit=crop" },
            { name: "Jordan Taylor", role: "Technical Lead", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&h=150&auto=format&fit=crop" },
            { name: "Sam Rodriguez", role: "Community Manager", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop" },
            { name: "Morgan Lee", role: "Operations Director", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&h=150&auto=format&fit=crop" }
          ].map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover" 
                />
              </div>
              <h3 className="font-medium">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </InnerPageLayout>
  );
};

export default AboutUs;
