import React from "react";

const Quote = () => {
  return (
    <>
      <section className="w-full bg-[#fff]">
        <div className="w-full max-w-[1200px] xl:px-0 px-[10px] mx-auto">
          <div className="text-center">
            <p className="skew-y-1 transform-gpu text-xl font-light">
              <span className="text-[#E65C64] font-semibold">
                One&apos;s birthday
              </span>{" "}
              is the day on which they were born. It is a{" "}
              <span className="text-[#E65C64] font-semibold">special day</span>{" "}
              that is celebrated annually to mark the anniversary of their
              birth. It is a time to
              <span className="text-[#FAC033] font-semibold">
                {" "}
                reflect on the past year
              </span>{" "}
              , appreciate life, and for us beacuse they mark often involves
              gathering with loved ones to
              <span className="text-[#FAC033] font-semibold">
                {" "}
                commemorate
              </span>{" "}
              the{" "}
              <span className="text-[#E65C64] font-semibold">
                {" "}
                occasion..
              </span>{" "}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Quote;
