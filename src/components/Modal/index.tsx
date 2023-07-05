import React from "react";

const CreationModal = ({ setWishing }: any) => {
  // Generate a Wish
  const WishHandler = () => {
    // Generate
    // Close Modal After
    setWishing(false);
  };

  // Close Prompt
  const CloseModalHandler = () => {
    setWishing(false);
  };

  return (
    <div className="creation_modal fixed top-0 left-0 right-0 h-full flex items-center justify-center">
      <div className="creation_modal_container bg-white md:w-[40%] w-[90%] h-[80%] rounded p-4 ">
        <h1 onClick={CloseModalHandler}>Creation Modal</h1>
      </div>
    </div>
  );
};

export default CreationModal;
