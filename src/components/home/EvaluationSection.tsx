import React from "react";
import { Sparkles, Code2, Globe2 } from "lucide-react";

const criteria = [
  {
    title: "Creativity",
    desc: "How original and innovative is your project?",
    icon: (
      <span className="criteria-icon-bg" style={{ background: "#52A8AA" }}>
        <Sparkles className="criteria-icon" />
      </span>
    )
  },
  {
    title: "Technical Excellence",
    desc: "How well does your project demonstrate technical skill and problem-solving?",
    icon: (
      <span className="criteria-icon-bg" style={{ background: "#F3B63A" }}>
        <Code2 className="criteria-icon" />
      </span>
    )
  },
  {
    title: "Impact",
    desc: "What is the potential for real-world impact?",
    icon: (
      <span className="criteria-icon-bg" style={{ background: "#6C63FF" }}>
        <Globe2 className="criteria-icon" />
      </span>
    )
  }
];

const EvaluationSection: React.FC = () => {
  return (
    <section className="homepage-section bg-white" id="evaluation">
      <div className="section-columns">
        <div className="text-column-wrap text-[#040809]">
          <div className="section-label">Evaluation</div>
          <div className="section-title">How Projects Are Judged</div>
          <div className="section-desc">
            Our panel of experts will evaluate submissions based on the following criteria:
          </div>
          <div className="criteria-timeline">
            {criteria.map((item, i) => (
              <div className="criteria-step" key={i}>
                <div className="criteria-step-icon-wrap">
                  {item.icon}
                  {i < criteria.length - 1 && <div className="criteria-step-line" />}
                </div>
                <div>
                  <div className="criteria-title">{item.title}</div>
                  <div className="criteria-desc">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="image-column-wrap">
          <img
            src="/04-content-criteria.jpg"
            alt="Evaluation"
            className="section-image"
          />
        </div>
      </div>
    </section>
  );
};

export default EvaluationSection;
