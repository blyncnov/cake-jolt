import React from "react";
import Link from "next/link";
import Image from "next/image";

//=> React Icons
import { SiGamejolt } from "react-icons/si";
import { TbGitFork } from "react-icons/tb";

//=> Confettti
import Confetti from "@/assets/confetti-1.svg";
import Confetti2 from "@/assets/confetti-2.svg";
import Confetti3 from "@/assets/balloons.svg";
import Confetti4 from "@/assets/garlands.svg";

const Hero = ({ setWishing }: any) => {
  // Open Prompt
  const OpenModalHandler = () => {
    setWishing(true);
  };

  return (
    <>
      <section className="w-full relative">
        <div className="w-full max-w-[1200px] xl:px-0 px-4 mx-auto">
          <div className="py-[60px] text-center">
            <h1 className="skew-y-2 transform-gpu text-6xl">
              Give a{" "}
              <span className="p-1 bg-[#FAC033] rounded-sm font-semibold">
                surprise
              </span>
            </h1>
            <h1 className="-skew-y-2 transform-gpu text-6xl">
              to your{" "}
              <span className="text-[#F73776] font-semibold">loved</span> one on
              their{" "}
              <span className="text-[#5AE2E3] font-extrabold">birthday.</span>{" "}
            </h1>
            <div className="button-actions flex md:flex-row flex-col my-[30px] gap-4 justify-center items-center">
              <button className="py-4 px-6 " onClick={OpenModalHandler}>
                Send a jolt <SiGamejolt />
              </button>
              <Link href="https://github.com/blyncnov/cake-jolt/fork">
                <button className="py-4 px-6 hidden md:flex bg-[#F73776]">
                  Fork Repository
                  <TbGitFork />
                </button>
              </Link>
            </div>
          </div>
          <div className="confetti confetti_1 ">
            <Image src={Confetti} alt="confetti" />
          </div>
          <div className="confetti confetti_2 ">
            <Image src={Confetti4} alt="confetti" />
          </div>
          <div className="confetti confetti_3">
            <Image src={Confetti3} alt="confetti" />
          </div>
          <div className="confetti confetti_4">
            <Image src={Confetti2} alt="confetti" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
