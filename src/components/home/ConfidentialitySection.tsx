import React from "react";

const ConfidentialitySection: React.FC = () => {
  return (
    <div className="items-stretch flex w-full flex-col overflow-hidden justify-center bg-[#DCEDEE] px-16 py-28 max-md:max-w-full max-md:px-5 max-md:py-[100px]">
      <div className="flex w-full items-center gap-[40px_80px] flex-wrap max-md:max-w-full">
        <div className="self-stretch flex min-w-60 flex-col items-stretch flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
          <div className="flex w-full flex-col items-stretch text-[#040809] max-md:max-w-full">
            <div className="text-[#040809] text-base font-semibold whitespace-nowrap">
              Important
            </div>
            <div className="w-full font-normal mt-4 max-md:max-w-full">
              <h2 className="text-[#040809] text-5xl leading-[58px] tracking-[-0.48px] max-md:max-w-full max-md:text-[40px] max-md:leading-[54px]">
                Important Note on IP and Confidentiality
              </h2>
              <p className="text-[#040809] text-lg leading-[27px] mt-6 max-md:max-w-full">
                All creations during this initiative belong to Valsoft
                Corporation, Inc. Please refrain from disclosing or
                publishing any work outside the company without written
                consent.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6 text-base text-[#040809] font-medium mt-8">
            <button className="text-[#040809] self-stretch border-[color:var(--Color-Neutral-Darkest,#040809)] gap-2 overflow-hidden my-auto px-3 py-1.5 border-2 border-solid">
              Learn More
            </button>
            <button className="self-stretch flex items-center gap-2 overflow-hidden justify-center my-auto">
              <span className="text-[#040809] self-stretch my-auto">
                Sign Up
              </span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/6684d7353aa94725ab1f51960a0c7d00/e52529232037d6ce45824189e743416d71395ed3?placeholderIfAbsent=true"
                alt="Arrow Right"
                className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
              />
            </button>
          </div>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/6684d7353aa94725ab1f51960a0c7d00/24f301e77eaf7b66853a3af0d22af883b942757d?placeholderIfAbsent=true"
          alt="Confidentiality Illustration"
          className="aspect-[0.96] object-contain w-full self-stretch min-w-60 flex-1 shrink basis-[0%] my-auto max-md:max-w-full"
        />
      </div>
    </div>
  );
};

export default ConfidentialitySection;
