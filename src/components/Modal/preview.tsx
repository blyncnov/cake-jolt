import React from "react";

//=> React Icons
import { FaTimes } from "react-icons/fa";

//=> React Componnets
import Preview from "@/components/Preview";

//=> Redux
import { useDispatch, useSelector } from "react-redux";
import { IS_SUCCESS } from "@/store/actions/action";

const SucessModal = () => {
  const dispatch = useDispatch();

  //Check if birthday message exist
  const isBirthdayMessage = useSelector(
    (state: any) => state.ModeReducer.birthdayMessage
  );

  //=> Close Prompt
  const CloseModalHandler = () => {
    dispatch({ type: IS_SUCCESS });
  };

  //=> Send to celebrant
  const SenderHandler = (e: any) => {
    e.preventDefault();

    let phone_number = e.target.phone_number.value;

    console.log(phone_number);
  };

  return (
    <div className="creation_modal fixed top-0 left-0 right-0 h-full flex items-center justify-center">
      <div className="sucess_creation_modal_container bg-white md:w-[40%] w-[90%]">
        <div className="top flex items-center justify-between border-b  p-4 ">
          <h1 className="font-medium flex items-start justify-start gap-1">
            Preview!!!!
          </h1>
          <FaTimes
            onClick={CloseModalHandler}
            style={{ fontSize: "1.5em", cursor: "pointer" }}
          />
        </div>
        {isBirthdayMessage === "" ? (
          <div className="w-full flex items-center justify-center min-h-[500px]">
            <h1>Loading...</h1>
          </div>
        ) : (
          <div className="w-full">
            <section className="py-6 px-4">
              <Preview />
            </section>
            <div className="w-full">
              <form
                method="POST"
                className="w-full flex gap-4 items-start flex-col p-4 "
                onSubmit={SenderHandler}
              >
                <input
                  type="number"
                  name="phone_number"
                  placeholder="Celebrant Phone Number"
                />

                <div className="w-full">
                  <button className="w-full text-center justify-center p-4">
                    Send Jolt
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SucessModal;
