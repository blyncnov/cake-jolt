import React from "react";
import Link from "next/link";

// React Icons
import { BiSolidStar } from "react-icons/bi";

const NavBar = () => {
  return (
    <section className="w-full border-b">
      <div className="w-full max-w-[1200px] xl:px-0 px-4 mx-auto h-[70px] flex items-center justify-start">
        <div className="w-full h-full flex justify-between items-center">
          <div className="logo-action">
            <Link href="/">
              <h1 className="text-xl font-bold">CAKEJOLT</h1>
            </Link>
          </div>
          <div className="lists-action hidden md:block">
            <ul className="flex gap-6">
              <Link href="/">
                <h1 className="font-normal hover:underline">Home</h1>
              </Link>
              <Link href="#goals">
                <h1 className="font-normal hover:underline">Goals</h1>
              </Link>
              <Link href="#surprise">
                <h1 className="font-normal hover:underline">Surprise me</h1>
              </Link>
              <Link href="#about">
                <h1 className="font-normal hover:underline">About us</h1>
              </Link>
            </ul>
          </div>
          <div className="btn-action">
            <Link href="https://github.com/blyncnov/cake-jolt" target="_blank">
              <button className="btn btn-primary">
                GitHub <BiSolidStar />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
