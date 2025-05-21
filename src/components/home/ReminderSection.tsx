import React from "react";
import { AlarmClock, Users, ChevronRight } from "lucide-react";
import ParallaxCard from "../animations/ParallaxCard";

const ReminderSection: React.FC = () => {
  return (
    <section className="homepage-section bg-[#EDF6F6]" id="reminder">
      <div className="section-columns">
        {/* Left column: Title, description, and actions */}
        <div className="text-column-wrap text-[#040809]">
          <div className="section-label">Reminder</div>
          <div className="section-title">Stick to Your Approved Build Week</div>
          <div className="section-desc">
            To ensure smooth project delivery, please adhere to your scheduled build week. Coordinate with your manager to avoid any conflicts with team commitments.
          </div>
          <div className="section-actions mt-8">
            <button className="section-btn section-btn--white">Learn More</button>
            <button className="section-btn">
              <span>Sign Up</span>
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        {/* Right column: Dynamic parallax cards */}
        <div className="reminder-cards-column">
          <ParallaxCard
            index={0}
            icon={<AlarmClock className="reminder-card-svg" />}
            title="Stay On Track"
            desc="Your timely completion is crucial for team success."
            color="#52A8AA"
          />
          <ParallaxCard
            index={1}
            icon={<Users className="reminder-card-svg" />}
            title="Team Collaboration"
            desc="Work together to achieve the best results."
            color="#F3B63A"
          />
        </div>
      </div>
    </section>
  );
};

export default ReminderSection;
