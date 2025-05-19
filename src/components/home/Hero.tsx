
import React from "react";
import { useLearnMoreModal } from "@/contexts/LearnMoreContext";
import { useSignupPanel } from "@/contexts/SignupPanelContext";

const Hero: React.FC = () => {
  const { openModal } = useLearnMoreModal();
  const { setIsOpen } = useSignupPanel();
  
  return (
    <div className="flex flex-col relative min-h-[960px] w-full items-center overflow-hidden px-16 max-md:max-w-full max-md:px-5">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0 bg-black/30">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
          poster="https://cdn.builder.io/api/v1/image/assets/6684d7353aa94725ab1f51960a0c7d00/6202d8ef0d56d9ed0bd2af63ee46b5897ce2d3fd"
        >
          <source src="/hero-bgr-video.mp4" type="video/mp4" />
          {/* Fallback image if video fails to load */}
          <img
            src="https://cdn.builder.io/api/v1/image/assets/6684d7353aa94725ab1f51960a0c7d00/6202d8ef0d56d9ed0bd2af63ee46b5897ce2d3fd"
            alt="Hero Background"
            className="absolute h-full w-full object-cover inset-0"
          />
        </video>
      </div>
      
      <div className="relative self-stretch flex min-w-60 w-[560px] flex-col items-stretch my-auto z-10">
        <div className="w-full text-lg text-white font-normal leading-[27px] max-md:max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/6684d7353aa94725ab1f51960a0c7d00/6d72a78c408ba3c2da820ab7790a467668c13dbc"
            alt="Hackathon Logo"
            className="aspect-[0.75] object-contain w-[274px] max-w-full animate-fade-in"
          />
          <div className="mt-[50px] max-md:max-w-full max-md:mt-10 animate-fade-in" style={{ animationDelay: "200ms" }}>
            Join us for a week of innovation, creativity, and AI-powered
            problem solving. Submit your most exciting idea and compete for
            top prizes!
          </div>
        </div>
        <div className="flex gap-4 text-base font-medium mt-[50px] max-md:mt-10 animate-fade-in" style={{ animationDelay: "400ms" }}>
          <button 
            className="self-stretch border border-[color:var(--Color-White,#FFF)] bg-white min-h-10 gap-2 text-[#040809] w-[118px] px-3 py-2 border-solid hover:bg-gray-100 transition-colors transform hover:scale-105"
            onClick={() => openModal()}
          >
            Learn More
          </button>
          <button 
            className="self-stretch border-[color:var(--Color-White,#FFF)] min-h-10 gap-2 text-white w-[91px] px-3 py-2 border-2 border-solid hover:bg-white hover:bg-opacity-10 transition-colors transform hover:scale-105"
            onClick={() => setIsOpen(true)}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
