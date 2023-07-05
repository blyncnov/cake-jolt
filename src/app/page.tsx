import React from "react";

//=> NavBar
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Quote from "@/components/Quote";
import Footer from "@/components/Footer";
import CreationModal from "@/components/Modal";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Quote />
      <Footer />

      {/* Create Jolt Modal */}
      {/* <CreationModal /> */}
    </>
  );
}
