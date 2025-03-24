import React from "react";
import Image from 'next/image';
import PrimaryButton from "./PrimaryButton";

const FreeTrialSection = () => {

  return (
    <>
      {/* Free Trial Section */}
      <section className="py-14 bg-white z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Wrapper for the trial section */}
          <div className="relative trial-wrapper bg-white rounded-md overflow-hidden z-10">
            
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full -translate-x-1/3 -translate-y-1/3 hidden lg:block"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full translate-x-1/3 translate-y-1/3 hidden lg:block"></div>

            {/* Main Content */}
            <div className="relative z-50 grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
              
              {/* Left Image Section */}
              <div className="flex justify-center lg:justify-start lg:block">
                <Image
                  src="/assets/img/get-started-free-1.png"
                  alt="get-started-free"
                  className="max-w-xs lg:max-w-md"
                  width={208}
                  height={186}
                />
              </div>

              {/* Text Content */}
              <div className="text-center">
                {/* Heading */}
                <h2 className="text-3xl lg:text-4xl font-bold text-black-900 mb-4">
                  Get started for free
                </h2>
                {/* Subheading */}
                <p className="text-black text-base font-light mb-8">
                  Sign up free and start your 14-day premium trial
                </p>
                {/* Buttons */}
                <PrimaryButton/>
              </div>

              {/* Right Image Section */}
              <div className="flex justify-center lg:justify-end">
                <Image
                  src="/assets/img/get-started-free-2.png"
                  alt="get-started-free"
                  className="max-w-xs lg:max-w-md hidden lg:block"
                  width={238}
                  height={248}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FreeTrialSection;
