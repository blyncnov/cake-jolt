import React from "react";

//=> React Icons
import { SiGamejolt } from "react-icons/si";
import { GoSponsorTiers } from "react-icons/go";

const Hero = () => {
  return (
    <>
      <section className="w-full">
        <div className="w-full max-w-[1200px] xl:px-0 px-4 mx-auto">
          <div className="py-[50px] text-center">
            <h1 className="skew-y-2 transform-gpu text-6xl">
              Give a{" "}
              <span className="p-1 bg-[#ff6b03] rounded-sm font-semibold">
                surprise
              </span>
            </h1>
            <h1 className="-skew-y-2 transform-gpu text-6xl">
              to your <span className="text-[purple] font-semibold">loved</span>{" "}
              one their{" "}
              <span className="text-[blue] font-semibold">birthday.</span>{" "}
            </h1>
            <div className="button-actions flex md:flex-row flex-col my-[30px] gap-4 justify-center items-center">
              <button className="py-4 px-6">
                Send a jolt <SiGamejolt />
              </button>
              <button className="py-4 px-6 hidden md:flex ">
                Sponsor Us <GoSponsorTiers />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
