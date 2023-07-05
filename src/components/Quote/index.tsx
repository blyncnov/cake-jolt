import React from "react";

//=> React Icons

const Quote = () => {
  return (
    <>
      <section className="w-full bg-[#fff] py-[40px]">
        <div className="w-full max-w-[1200px] xl:px-0 px-[10px] mx-auto">
          <div className="text-center">
            <p className="skew-y-1 transform-gpu text-xl ">
              <span className="text-[purple] font-semibold">
                One&apos;s birthday
              </span>{" "}
              is the day on which they were born. It is a{" "}
              <span className="text-[purple] font-semibold">special day</span>{" "}
              that is celebrated annually to mark the anniversary of their
              birth. It is a time to
              <span className="text-[blue] font-semibold">
                {" "}
                reflect on the past year
              </span>{" "}
              , appreciate life, and for us beacuse they mark often involves
              gathering with loved ones to
              <span className="text-[blue] font-semibold">
                {" "}
                commemorate
              </span>{" "}
              the occasion..
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Quote;
