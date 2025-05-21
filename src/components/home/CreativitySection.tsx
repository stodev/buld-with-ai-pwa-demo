import React from "react";
import { ChevronRight } from "lucide-react";
import { useLearnMoreModal } from "@/contexts/LearnMoreContext";
import { useSignupPanel } from "@/contexts/SignupPanelContext";

const CreativitySection: React.FC = () => {
  const { openModal } = useLearnMoreModal();
  const { setIsOpen } = useSignupPanel();

  return (
    <section className="homepage-section bg-[#52A8AA]">
      <div className="section-columns">
        <div className="text-column-wrap text-white">
          <div className="section-label">Welcome</div>
          <div className="section-title">Unleash Your Creativity with AI</div>
          <p className="section-desc">
            We're eager to witness your innovative projects and how you utilize AI tools. Reach out for any support you may need!
          </p>
          <div className="section-sub-columns">
            <div className="section-sub-col">
              <h3 className="section-sub-title">Need Help?</h3>
              <p className="section-sub-desc">Contact your technical leaders for guidance and assistance.</p>
            </div>
            <div className="section-sub-col">
              <h3 className="section-sub-title">Good Luck</h3>
              <p className="section-sub-desc">We wish you the best in your AI journey.</p>
            </div>
          </div>
          <div className="section-actions">
            <button className="section-btn inverted-btn inverted-btn--white" onClick={() => setIsOpen(true)}>Submit</button>
            <button className="section-btn inverted-btn" onClick={openModal}>
              <span>Learn More</span>
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="image-column-wrap">
          <img
            src="/06-content-creativity.jpg"
            alt="Creativity Illustration"
            className="section-image"
          />
        </div>
      </div>
    </section>
  );
};

export default CreativitySection;
