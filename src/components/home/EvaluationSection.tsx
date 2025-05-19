import React from "react";

const EvaluationSection: React.FC = () => {
  return (
    <div className="items-stretch flex w-full flex-col overflow-hidden text-[#040809] font-normal justify-center bg-white px-16 py-28 max-md:max-w-full max-md:px-5 max-md:py-[100px]">
      <div className="flex w-full items-center gap-[40px_80px] flex-wrap max-md:max-w-full">
        <div className="self-stretch min-w-60 flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
          <h2 className="text-[#040809] text-[40px] leading-[48px] tracking-[-0.4px] max-md:max-w-full">
            Evaluation Criteria for Your AI Hackathon Project Submission
          </h2>
          <p className="text-[#040809] text-lg leading-[27px] mt-6 max-md:max-w-full">
            Each project will be assessed based on five key areas, ensuring
            a comprehensive evaluation. Focus on originality, impact,
            quality, technical execution, and alignment with AI goals to
            maximize your chances of success.
          </p>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/6684d7353aa94725ab1f51960a0c7d00/48613a20d5a972a3aea3cd0453c57930d82e5546?placeholderIfAbsent=true"
          alt="Evaluation Criteria Illustration"
          className="aspect-[0.96] object-contain w-full self-stretch min-w-60 flex-1 shrink basis-[0%] my-auto max-md:max-w-full"
        />
      </div>
    </div>
  );
};

export default EvaluationSection;
