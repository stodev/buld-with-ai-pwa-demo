import React from "react";
import { ChevronRight } from "lucide-react";

const SubmitProjectSection: React.FC = () => {
  return (
    <section className="homepage-section bg-[#EDF6F6]" id="submit">
      <div className="section-columns">
        <div className="text-column-wrap text-[#040809]">
          <div className="section-title">How to Submit Your Project</div>
          <div className="section-desc">
            Make sure to include your unique submission ID in all filenames to ensure proper tracking and organization.
          </div>
          <div className="section-actions">
            <button className="section-btn section-btn--white">Upload</button>
            <button className="section-btn">
              <span>Learn More</span>
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="image-column-wrap">
          <img
            src="/02-content-submit.jpg"
            alt="Submit Project Illustration"
            className="section-image"
          />
        </div>
      </div>
    </section>
  );
};

export default SubmitProjectSection;
