import React from "react";

const ReminderSection: React.FC = () => {
  return (
    <div className="items-stretch flex w-full flex-col overflow-hidden justify-center bg-[#EDF6F6] px-16 py-28 max-md:max-w-full max-md:px-5 max-md:py-[100px]">
      <div className="flex w-full gap-[40px_80px] flex-wrap max-md:max-w-full">
        <div className="flex min-w-60 flex-col overflow-hidden items-stretch text-[#040809] flex-1 shrink basis-[0%] max-md:max-w-full">
          <div className="text-[#040809] text-base font-semibold whitespace-nowrap">
            Reminder
          </div>
          <h2 className="text-[#040809] text-5xl font-normal leading-[58px] tracking-[-0.48px] mt-4 max-md:max-w-full max-md:text-[40px] max-md:leading-[54px]">
            Stick to Your Approved Build Week
          </h2>
        </div>
        <div className="flex min-w-60 flex-col items-stretch flex-1 shrink basis-[0%] max-md:max-w-full">
          <div className="w-full text-[#040809] font-normal max-md:max-w-full">
            <p className="text-[#040809] text-lg leading-[27px] max-md:max-w-full">
              To ensure smooth project delivery, please adhere to your
              scheduled build week. Coordinate with your manager to avoid
              any conflicts with team commitments.
            </p>
            <div className="w-full mt-8 max-md:max-w-full">
              <div className="flex w-full gap-6 flex-wrap py-2 max-md:max-w-full">
                <div className="min-w-60 flex-1 shrink basis-[0%]">
                  <div className="flex min-h-11 w-12" aria-hidden="true" />
                  <h3 className="text-[#040809] text-xl leading-[1.4] tracking-[-0.2px] mt-4">
                    Stay On Track
                  </h3>
                  <p className="text-[#040809] text-base leading-6 mt-4">
                    Your timely completion is crucial for team success.
                  </p>
                </div>
                <div className="min-w-60 flex-1 shrink basis-[0%]">
                  <div className="flex min-h-11 w-12" aria-hidden="true" />
                  <h3 className="text-[#040809] text-xl leading-[1.4] tracking-[-0.2px] mt-4">
                    Team Collaboration
                  </h3>
                  <p className="text-[#040809] text-base leading-6 mt-4">
                    Work together to achieve the best results.
                  </p>
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
              <img
                src="https://cdn.builder.io/api/v1/image/assets/6684d7353aa94725ab1f51960a0c7d00/613ddd872a1d54420d3ad9dfa5c40e5f6c1e0067?placeholderIfAbsent=true"
                alt="Arrow Right"
                className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReminderSection;
