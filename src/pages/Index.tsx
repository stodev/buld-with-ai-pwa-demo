
import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/home/Navbar";
import Hero from "../components/home/Hero";
import SubmissionSection from "../components/home/SubmissionSection";
import SubmitProjectSection from "../components/home/SubmitProjectSection";
import PrizesSection from "../components/home/PrizesSection";
import ReminderSection from "../components/home/ReminderSection";
import EvaluationSection from "../components/home/EvaluationSection";
import ConfidentialitySection from "../components/home/ConfidentialitySection";
import CreativitySection from "../components/home/CreativitySection";
import Footer from "../components/home/Footer";
import { useLearnMoreModal } from "@/contexts/LearnMoreContext";
import ScrollReveal from "@/components/animations/ScrollReveal";

const Index: React.FC = () => {
  const [menuHeight, setMenuHeight] = useState(72); // Default menu height
  const { openModal } = useLearnMoreModal();
  const navbarHeightRef = useRef<number>(72); // Default navbar height

  // Measure navbar height on mount and resize
  useEffect(() => {
    const navbar = document.querySelector('div[class*="sticky top-0"]');
    const updateMenuHeight = () => {
      if (navbar) {
        const height = navbar.clientHeight;
        navbarHeightRef.current = height;
        setMenuHeight(height);
      }
    };
    
    updateMenuHeight();
    window.addEventListener('resize', updateMenuHeight);
    
    return () => {
      window.removeEventListener('resize', updateMenuHeight);
    };
  }, []);

  return (
    <main className="w-full">
      <Navbar />
      {/* Hero Section */}
      <div>
        <Hero />
      </div>

      {/* Submission Section */}
      <div style={{ marginTop: '0' }}>
        <ScrollReveal>
          <SubmissionSection />
        </ScrollReveal>
      </div>

      {/* Submit Project Section */}
      <div style={{ marginTop: '0' }}>
        <ScrollReveal delay={0.1}>
          <SubmitProjectSection />
        </ScrollReveal>
      </div>

      {/* Prizes Section */}
      <div style={{ marginTop: '0' }}>
        <ScrollReveal delay={0.1}>
          <PrizesSection />
        </ScrollReveal>
      </div>

      {/* Reminder Section */}
      <div style={{ marginTop: '0' }}>
        <ScrollReveal delay={0.1}>
          <ReminderSection />
        </ScrollReveal>
      </div>

      {/* Evaluation Section */}
      <div style={{ marginTop: '0' }}>
        <ScrollReveal delay={0.1}>
          <EvaluationSection />
        </ScrollReveal>
      </div>

      {/* Confidentiality Section */}
      <div style={{ marginTop: '0' }}>
        <ScrollReveal delay={0.1}>
          <ConfidentialitySection />
        </ScrollReveal>
      </div>

      {/* Creativity Section */}
      <div style={{ marginTop: '0' }}>
        <ScrollReveal delay={0.1}>
          <CreativitySection />
        </ScrollReveal>
      </div>

      <Footer />
    </main>
  );
};

export default Index;
