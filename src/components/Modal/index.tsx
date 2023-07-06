import React from "react";

//=> React Icons
import { FaTimes } from "react-icons/fa";
import { SiGamejolt } from "react-icons/si";

const CreationModal = ({ setWishing, setSuccess }: any) => {
  //=> Generate a Wish
  const WishHandler = () => {
    //=> Generate
    setSuccess(true);
    //=> Close Modal After
    setWishing(false);
  };

  //=>Close Prompt
  const CloseModalHandler = () => {
    setWishing(false);
  };

  return (
    <div className="creation_modal fixed top-0 left-0 right-0 h-full flex items-center justify-center">
      <div className="creation_modal_container bg-white md:w-[40%] w-[90%]">
        <div className="top flex items-center justify-between border-b  p-4 ">
          <h1 className="font-medium flex items-start justify-start gap-1">
            Jolt <SiGamejolt /> Birthday Prompt
          </h1>
          <FaTimes
            onClick={CloseModalHandler}
            style={{ fontSize: "1.5em", cursor: "pointer" }}
          />
        </div>
        <div className="w-full">
          <form
            method="POST"
            className="w-full flex gap-4 items-start flex-col p-4 "
            onSubmit={WishHandler}
          >
            <input
              type="text"
              name="Name"
              placeholder="Celebrant Name or Nickname"
              required
            />

            <select name="category">
              <option value="beautiful">Choose Engery</option>
              <option value="happy">Happy</option>
              <option value="sad">Sad </option>
              <option value="lazy">Lazy </option>
              <option value="cranky">Cranky </option>
              <option value="anxious">Anxious </option>
            </select>

            <textarea
              name="prompt"
              placeholder="Enter Your Prompt Keywords"
              required
            />
            <div className="w-full">
              <button className="w-full text-center justify-center p-4">
                Send Jolt <SiGamejolt />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreationModal;
