import React from "react";
import { ChevronRight } from "lucide-react";
import { useLearnMoreModal } from "@/contexts/LearnMoreContext";
import { useSignupPanel } from "@/contexts/SignupPanelContext";

const ConfidentialitySection: React.FC = () => {
  const { openModal } = useLearnMoreModal();
  const { setIsOpen } = useSignupPanel();

  return (
    <section className="homepage-section bg-[#DCEDEE]" id="confidentiality">
      <div className="section-columns">
        <div className="text-column-wrap text-[#040809]">
          <div className="section-label">Important</div>
          <div className="section-title">Important Note on IP and Confidentiality</div>
          <div className="section-desc">
            All creations during this initiative belong to Valsoft Corporation, Inc. Please refrain from disclosing or publishing any work outside the company without written consent.
          </div>
          <div className="section-actions">
            <button className="section-btn section-btn--white" onClick={openModal}>Learn More</button>
            <button className="section-btn" onClick={() => setIsOpen(true)}>
              <span>Sign Up</span>
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="image-column-wrap">
          <img
            src="/05-content-noteip.jpg"
            alt="Confidentiality Illustration"
            className="section-image"
          />
        </div>
      </div>
    </section>
  );
};

export default ConfidentialitySection;
