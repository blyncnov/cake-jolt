"use client";

import React from "react";

//=> NavBar
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Quote from "@/components/Quote";
import Footer from "@/components/Footer";
import CreationModal from "@/components/Modal";
import SucessModal from "@/components/Modal/sucess";

export default function Home() {
  const [wishing, setWishing] = React.useState(false);
  const [Success, setSuccess] = React.useState(false);
  return (
    <>
      <NavBar />
      <Hero setWishing={setWishing} />
      <Quote />
      <Footer />

      {/* Create Jolt Modal */}
      {wishing && (
        <CreationModal setWishing={setWishing} setSuccess={setSuccess} />
      )}

      {/* Success  Modal */}
      {Success && <SucessModal setSuccess={setSuccess} />}
    </>
  );
}
