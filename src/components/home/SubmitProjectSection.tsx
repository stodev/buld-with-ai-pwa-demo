import React from "react";
import { ChevronRight } from "lucide-react";

const SubmitProjectSection: React.FC = () => {
  return (
    <div className="items-stretch flex w-full flex-col overflow-hidden justify-center bg-[#EDF6F6] px-16 py-28 max-md:max-w-full max-md:px-5 max-md:py-[100px]">
      <div className="flex w-full items-center gap-[40px_80px] flex-wrap max-md:max-w-full">
        <div className="self-stretch flex min-w-60 flex-col items-stretch flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
          <div className="w-full text-[#040809] font-normal max-md:max-w-full">
            <div className="flex min-h-[42px] w-[42px]" aria-hidden="true" />
            <div className="w-full mt-6 max-md:max-w-full">
              <h2 className="text-[#040809] text-5xl leading-[58px] tracking-[-0.48px] max-md:max-w-full max-md:text-[40px] max-md:leading-[54px]">
                How to Submit Your Project
              </h2>
              <p className="text-[#040809] text-lg leading-[27px] mt-6 max-md:max-w-full">
                Make sure to include your unique submission ID in all
                filenames to ensure proper tracking and organization.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6 text-base text-[#040809] font-medium mt-8">
            <button className="text-[#040809] self-stretch border-[color:var(--Color-Neutral-Darkest,#040809)] gap-2 overflow-hidden whitespace-nowrap my-auto px-3 py-1.5 border-2 border-solid">
              Upload
            </button>
            <button className="self-stretch flex items-center gap-2 overflow-hidden justify-center my-auto">
              <span className="text-[#040809] self-stretch my-auto">
                Learn More
              </span>
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        <img
          src="/02-content-submit.jpg"
          alt="Submit Project Illustration"
          className="aspect-[0.96] object-contain w-full self-stretch min-w-60 flex-1 shrink basis-[0%] my-auto max-md:max-w-full rounded-[30px]"
        />
      </div>
    </div>
  );
};

export default SubmitProjectSection;
