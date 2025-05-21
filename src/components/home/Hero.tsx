import React from "react";
import { useLearnMoreModal } from "@/contexts/LearnMoreContext";
import { useSignupPanel } from "@/contexts/SignupPanelContext";
import HeroIntroAnimation from "./HeroIntroAnimation";

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
          poster="/hero-bgr-poster.jpg"
        >
          <source src="/hero-bgr-video.mp4" type="video/mp4" />
          {/* Fallback image if video fails to load */}
          <img
            src="/hero-bgr-fallback.jpg"
            alt="Hero Background"
            className="absolute h-full w-full object-cover inset-0"
          />
        </video>
         {/* Stronger overlay for readability */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
      </div>
      
      <div className="relative self-stretch flex min-w-60 w-[560px] flex-col items-stretch my-auto z-10 md:ml-[8vw]">
        <div className="w-full text-lg text-white font-normal leading-[27px] max-md:max-w-full">
          {/* Animated Sign Intro logo */}
          <HeroIntroAnimation />          
          <div className="mt-[50px] max-md:max-w-full max-md:mt-10 animate-fade-in" style={{ animationDelay: "200ms" }}>
            Join us for a week of innovation, creativity, and AI-powered
            problem solving. Submit your most exciting idea and compete for
            top prizes!
          </div>
        </div>
        <div className="flex gap-4 text-base font-medium mt-[50px] max-md:mt-10 animate-fade-in" style={{ animationDelay: "400ms" }}>
          <button
            className="section-btn inverted-btn inverted-btn--white-filled"
            onClick={() => setIsOpen(true)}
          >
            Sign Up
          </button>
          <button
            className="section-btn inverted-btn section-btn--accent"
            onClick={() => openModal()}
          >
            Learn More
          </button>          
        </div>
      </div>
    </div>
  );
};

export default Hero;
