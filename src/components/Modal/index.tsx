import React from "react";
import axios from "axios";

//=> React Icons
import { FaTimes } from "react-icons/fa";
import { SiGamejolt } from "react-icons/si";

// Redux
import { useDispatch } from "react-redux";
import {
  IS_PROMPT,
  IS_SUCCESS,
  CLOSE_MODAL,
  SET_BIRTHDAY_MESSAGE,
  SET_CELEBRANT_NAME,
} from "@/store/actions/action";

const CreationModal = () => {
  const dispatch = useDispatch();

  //=> Generate a Wish
  const WishHandler = (e: any) => {
    e.preventDefault();

    let CelebrantName = e.target.celebrant_name.value;
    let Category = e.target.category.value;
    let Prompts = e.target.prompt.value;

    if (!CelebrantName || !Prompts || !Category) {
      return;
    }

    console.log(CelebrantName, Category, Prompts);

    //=> Set Celebrant Name
    dispatch({
      type: SET_CELEBRANT_NAME,
      payload: CelebrantName,
    });

    //=> Generate What i need
    axios
      .post("https://cakejolt.okxlogin.site/api/ask", {
        question: `generate birthday quote for my friend using ${Category} mood and include ${Prompts} to wish him/her`,
      })
      .then((res) => {
        console.log(res.data.data.answer);

        dispatch({
          type: SET_BIRTHDAY_MESSAGE,
          payload: res.data.data.answer,
        });

        //=> Toggle Modal After
        dispatch({ type: IS_SUCCESS });
        dispatch({ type: IS_PROMPT });
      });
  };

  //=>Close Prompt
  const CloseModalHandler = () => {
    dispatch({ type: CLOSE_MODAL });
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
              name="celebrant_name"
              placeholder="Celebrant Name or Nickname"
              required
            />

            <select name="category">
              <option value="beautiful">Choose Energy</option>
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
