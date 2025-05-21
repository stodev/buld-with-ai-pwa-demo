import React from "react";

const PrizesSection: React.FC = () => {
  return (
    <section className="homepage-section bg-[#F3EFE1]" id="prizes">
      <div className="section-columns">
        <div className="text-column-wrap text-[#040809]">
          <div className="section-title prizes-title">
            Prizes Await the Most Innovative Projects in Our Hackathon!
          </div>
          <div className="section-desc prizes-desc">
            🏆 Top projects will be awarded exciting cash prizes! Compete for your chance to win and showcase your skills.
          </div>
          <div className="prizes-awards-row">
            <div className="prize-award-col">
              <h3 className="prize-award-title">1st Place</h3>
              <p className="prize-award-desc">$15,000 in CAD for the top project!</p>
            </div>
            <div className="prize-award-col">
              <h3 className="prize-award-title">2nd Place</h3>
              <p className="prize-award-desc">$10,000 in CAD for the runner-up!</p>
            </div>
          </div>
          <div className="prizes-awards-row mt-4">
            <div className="prize-award-col">
              <h3 className="prize-award-title">3rd to 5th Place</h3>
              <p className="prize-award-desc">$5,000 in CAD</p>
            </div>
            <div className="prize-award-col prizes-award-empty" />
          </div>
        </div>
        <div className="image-column-wrap">
          <img
            src="/03-content-prizes.jpg"
            alt="Prizes Illustration"
            className="section-image"
          />
        </div>
      </div>
    </section>
  );
};

export default PrizesSection;
