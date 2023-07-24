"use client";

import React from "react";

//=> NavBar
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Quote from "@/components/Quote";
import Footer from "@/components/Footer";
import CreationModal from "@/components/Modal";
import SucessModal from "@/components/Modal/preview";

// Redux
import { useSelector } from "react-redux";

export default function Home() {
  // Prompt Modal State
  const is_prompt_state = useSelector(
    (state: any) => state.ModeReducer.isPromptModal
  );

  // Prompt Modal State
  const is_sucess_state = useSelector(
    (state: any) => state.ModeReducer.isSucessModal
  );

  const CloseSidebar = () => {
    // Do This Action
  };

  return (
    <>
      <NavBar />
      <Hero />
      <Quote />
      <Footer />

      {/* Create Jolt Modal */}
      {is_prompt_state && <CreationModal />}

      {/* Success  Modal */}
      {is_sucess_state && <SucessModal />}
    </>
  );
}
