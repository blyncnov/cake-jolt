import { IS_PROMPT, IS_SUCCESS, CLOSE_MODAL } from "../actions/action";

const InitialState = {
  isPromptModal: false,
  isSucessModal: false,
  CardInfo: {
    message:
      "Hope all your birthday wishes come true!” “It's your special day — May your day be filled with joy, reflection, and hope for the year ahead, and may He continue to bless you and watch over you all the days of your life.",
    sender: "Anonymous",
  },
};

export const modeReducers = (state = InitialState, action: any) => {
  switch (action.type) {
    case IS_PROMPT:
      return {
        ...state,
        isPromptModal: !state.isPromptModal,
      };

    case IS_SUCCESS:
      return {
        ...state,
        isSucessModal: !state.isSucessModal,
      };

    case CLOSE_MODAL:
      return {
        ...state,
        isPromptModal: false,
      };

    default:
      return state;
  }
};

export default modeReducers;
