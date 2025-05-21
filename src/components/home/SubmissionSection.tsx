import React from "react";
import CheckIcon from "../ui/CheckIcon";
import { ChevronRight } from "lucide-react";
import { useLearnMoreModal } from "@/contexts/LearnMoreContext";
import { useSignupPanel } from "@/contexts/SignupPanelContext";

const SubmissionSection: React.FC = () => {
  const { openModal } = useLearnMoreModal();
  const { setIsOpen } = useSignupPanel();

  return (
    <section className="homepage-section bg-white">
      <div className="section-columns">
        <div className="text-column-wrap text-[#040809]">
          <div className="section-label">Submission</div>
          <div className="section-title">What Your Submission Should Include</div>
          <p className="section-desc">
            To successfully participate, ensure your submission includes a ZIP file containing your project repository along with a detailed document. This document should outline the problem your project addresses, its functionality, and the AI tools utilized.
          </p>
          <div className="section-list">
            <div className="section-list-item"><CheckIcon />ZIP file with your project repository (code, README, assets)</div>
            <div className="section-list-item"><CheckIcon />1–2 page document explaining your project</div>
            <div className="section-list-item"><CheckIcon />Short screen-recorded demo video</div>
            <div className="section-list-item"><CheckIcon />Live deployment URL</div>
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
            src="/01-content-submission.jpg"
            alt="Submission Illustration"
            className="section-image"
          />
        </div>
      </div>
    </section>
  );
};

export default SubmissionSection;
