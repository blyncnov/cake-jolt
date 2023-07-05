import React from "react";

//=> React Icons
import { FaTimes } from "react-icons/fa";

const SucessModal = ({ setSuccess }: any) => {
  // Close Prompt
  const CloseModalHandler = () => {
    setSuccess(false);
  };

  return (
    <div className="creation_modal fixed top-0 left-0 right-0 h-full flex items-center justify-center">
      <div className="creation_modal_container bg-white md:w-[40%] w-[90%]">
        <div className="top flex items-center justify-between border-b p-4 ">
          <h1 className="font-medium flex items-start justify-start gap-1">
            Successfully
          </h1>
          <FaTimes
            onClick={CloseModalHandler}
            style={{ fontSize: "1.5em", cursor: "pointer" }}
          />
        </div>
        <div className="w-full p-4">
          <h1>Huraayy!!!!</h1>
        </div>
      </div>
    </div>
  );
};

export default SucessModal;
