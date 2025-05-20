import React from "react";

const PrizesSection: React.FC = () => {
  return (
    <div className="items-stretch flex w-full flex-col overflow-hidden text-[#040809] justify-center bg-[#F3EFE1] px-16 py-28 max-md:max-w-full max-md:px-5 max-md:py-[100px]">
      <div className="flex w-full items-center gap-[40px_80px] flex-wrap max-md:max-w-full">
        <div className="self-stretch min-w-60 flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
          <div className="w-full font-normal max-md:max-w-full">
            <h2 className="text-[#040809] text-[40px] leading-[48px] tracking-[-0.4px] max-md:max-w-full">
              Prizes Await the Most Innovative Projects in Our Hackathon!
            </h2>
            <p className="text-[#040809] text-lg leading-[27px] mt-6 max-md:max-w-full">
              🏆 Top projects will be awarded exciting cash prizes! Compete
              for your chance to win and showcase your skills.
            </p>
          </div>
          <div className="w-full mt-8 max-md:max-w-full">
            <div className="flex w-full gap-6 flex-wrap py-2 max-md:max-w-full">
              <div className="min-w-60 flex-1 shrink basis-[0%]">
                <h3 className="text-[#040809] text-xl font-bold leading-[1.4] tracking-[-0.2px]">
                  1st Place
                </h3>
                <p className="text-[#040809] text-base font-normal mt-4">
                  $15,000 in CAD for the top project!
                </p>
              </div>
              <div className="min-w-60 flex-1 shrink basis-[0%]">
                <h3 className="text-[#040809] text-xl font-bold leading-[1.4] tracking-[-0.2px]">
                  2nd Place
                </h3>
                <p className="text-[#040809] text-base font-normal mt-4">
                  $10,000 in CAD for the runner-up!
                </p>
              </div>
            </div>
            <div className="flex w-full items-stretch gap-6 flex-wrap mt-4 py-2 max-md:max-w-full">
              <div className="min-w-60 flex-1 shrink basis-[0%]">
                <h3 className="text-[#040809] text-xl font-bold leading-[1.4] tracking-[-0.2px]">
                  3rd to 5th Place
                </h3>
                <p className="text-[#040809] text-base font-normal mt-4">
                  $5,000 in CAD
                </p>
              </div>
              <div className="flex min-w-60 w-[296px] shrink h-[68px] flex-1 basis-[0%]" />
            </div>
          </div>
        </div>
        <img
          src="/03-content-prizes.jpg"
          alt="Prizes Illustration"
          className="aspect-[0.96] object-contain w-full self-stretch min-w-60 flex-1 shrink basis-[0%] my-auto max-md:max-w-full rounded-[30px]"
        />
      </div>
    </div>
  );
};

export default PrizesSection;
