import React from "react";

// Utilities
import { getLocaltimeAndDate } from "@/utils/getTimeDate";

const Footer = () => {
  const { getFullYear } = getLocaltimeAndDate();

  return (
    <>
      <section className="w-full bg-[#fff] py-[50px]">
        <div className="w-full max-w-[1200px] xl:px-0 px-[10px] mx-auto">
          <div className="text-center flex flex-col justify-center gap-2">
            <p>
              Copyright &copy; {getFullYear().toString()} || All Rights Reserved
            </p>
            <p>
              Built with ❤️ by{" "}
              <a
                href="https://twitter.com/jeremytechie"
                className="text-[#57BAB7]"
              >
                Blyncnov
              </a>
            </p>{" "}
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
