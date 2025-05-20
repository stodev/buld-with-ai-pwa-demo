import React from "react";
import CheckIcon from "../ui/CheckIcon";
import { ChevronRight } from "lucide-react";

const SubmissionSection: React.FC = () => {
  return (
    <div className="items-stretch flex w-full flex-col overflow-hidden justify-center bg-white px-16 py-28 max-md:max-w-full max-md:px-5 max-md:py-[100px]">
      <div className="flex w-full items-center gap-[40px_80px] flex-wrap max-md:max-w-full">
        <div className="self-stretch flex min-w-60 flex-col items-stretch flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
          <div className="w-full text-[#040809] max-md:max-w-full">
            <div className="flex w-full flex-col items-stretch max-md:max-w-full">
              <div className="text-[#040809] text-base font-semibold whitespace-nowrap">
                Submission
              </div>
              <div className="w-full font-normal mt-4 max-md:max-w-full">
                <h2 className="text-[#040809] text-5xl leading-[58px] tracking-[-0.48px] max-md:max-w-full max-md:text-[40px] max-md:leading-[54px]">
                  What Your Submission Should Include
                </h2>
                <p className="text-[#040809] text-lg leading-[27px] mt-6 max-md:max-w-full">
                  To successfully participate, ensure your submission
                  includes a ZIP file containing your project repository
                  along with a detailed document. This document should
                  outline the problem your project addresses, its
                  functionality, and the AI tools utilized.
                </p>
              </div>
            </div>
            <div className="w-full text-base font-normal mt-8 py-2 max-md:max-w-full">
              <div className="flex w-full items-center gap-4 flex-wrap max-md:max-w-full">
                <CheckIcon />
                <div className="text-[#040809] self-stretch flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
                  ZIP file with your project repository (code, README, assets)
                </div>
              </div>
              <div className="flex w-full items-center gap-4 flex-wrap mt-4 max-md:max-w-full">
                <CheckIcon />
                <div className="text-[#040809] self-stretch flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
                  1–2 page document explaining your project
                </div>
              </div>
              <div className="flex w-full items-center gap-4 flex-wrap mt-4 max-md:max-w-full">
                <CheckIcon />
                <div className="text-[#040809] self-stretch flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
                  Short screen-recorded demo video
                </div>
              </div>
              <div className="flex w-full items-center gap-4 flex-wrap mt-4 max-md:max-w-full">
                <CheckIcon />
                <div className="text-[#040809] self-stretch flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
                  Live deployment URL
                </div>
              </div>
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
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        <img
          src="/01-content-submission.jpg"
          alt="Submission Illustration"
          className="aspect-[0.96] object-contain w-full self-stretch min-w-60 flex-1 shrink basis-[0%] my-auto max-md:max-w-full rounded-[30px]"
        />
      </div>
    </div>
  );
};

export default SubmissionSection;
