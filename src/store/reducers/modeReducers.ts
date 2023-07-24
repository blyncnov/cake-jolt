import {
  IS_PROMPT,
  IS_SUCCESS,
  CLOSE_MODAL,
  SET_BIRTHDAY_MESSAGE,
  SET_CELEBRANT_NAME,
} from "../actions/action";

const InitialState = {
  isPromptModal: false,
  isSucessModal: false,
  celebrant: "",
  birthdayMessage: "Home",
  sender: "Cake-Jolt",
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

    case SET_BIRTHDAY_MESSAGE:
      return {
        ...state,
        birthdayMessage: action.payload,
      };

    case SET_CELEBRANT_NAME:
      return {
        ...state,
        celebrant: action.payload,
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
