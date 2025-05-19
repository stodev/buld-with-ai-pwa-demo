import React from "react";

const CreativitySection: React.FC = () => {
  return (
    <div className="items-stretch flex w-full flex-col overflow-hidden justify-center bg-[#52A8AA] px-16 py-28 max-md:max-w-full max-md:px-5 max-md:py-[100px]">
      <div className="flex w-full items-center gap-[40px_80px] flex-wrap max-md:max-w-full">
        <div className="self-stretch flex min-w-60 flex-col items-stretch flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
          <div className="w-full text-white max-md:max-w-full">
            <div className="flex w-full flex-col items-stretch max-md:max-w-full">
              <div className="text-white text-base font-semibold whitespace-nowrap">
                Welcome
              </div>
              <div className="w-full font-normal mt-4 max-md:max-w-full">
                <h2 className="text-white text-5xl leading-[58px] tracking-[-0.48px] max-md:max-w-full max-md:text-[40px] max-md:leading-[54px]">
                  Unleash Your Creativity with AI
                </h2>
                <p className="text-white text-lg leading-[27px] mt-6 max-md:max-w-full">
                  We're eager to witness your innovative projects and how
                  you utilize AI tools. Reach out for any support you may
                  need!
                </p>
              </div>
            </div>
            <div className="w-full font-normal mt-8 max-md:max-w-full">
              <div className="flex w-full gap-6 flex-wrap py-2 max-md:max-w-full">
                <div className="min-w-60 flex-1 shrink basis-[0%]">
                  <h3 className="text-white text-xl leading-[1.4] tracking-[-0.2px]">
                    Need Help?
                  </h3>
                  <p className="text-white text-base leading-6 mt-4">
                    Contact your technical leaders for guidance and
                    assistance.
                  </p>
                </div>
                <div className="min-w-60 flex-1 shrink basis-[0%]">
                  <h3 className="text-white text-xl leading-[1.4] tracking-[-0.2px]">
                    Good Luck
                  </h3>
                  <p className="text-white text-base mt-4">
                    We wish you the best in your AI journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6 text-base text-white font-medium mt-8">
            <button className="text-white self-stretch border-[color:var(--Color-White,#FFF)] gap-2 overflow-hidden whitespace-nowrap my-auto px-3 py-1.5 border-2 border-solid">
              Submit
            </button>
            <button className="self-stretch flex items-center gap-2 overflow-hidden justify-center my-auto">
              <span className="text-white self-stretch my-auto">
                Learn More
              </span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/6684d7353aa94725ab1f51960a0c7d00/205b3cf0ce27339ae3ef408a2596348387831b71?placeholderIfAbsent=true"
                alt="Arrow Right"
                className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
              />
            </button>
          </div>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/6684d7353aa94725ab1f51960a0c7d00/8e7278cf6d57ef42d868fc87b478515e89838d30?placeholderIfAbsent=true"
          alt="Creativity Illustration"
          className="aspect-[0.96] object-contain w-full self-stretch min-w-60 flex-1 shrink basis-[0%] my-auto max-md:max-w-full"
        />
      </div>
    </div>
  );
};

export default CreativitySection;
