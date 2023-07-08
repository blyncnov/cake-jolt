import { TOGGLE_SIDEBAR, CLOSE, SHOW_MODAL } from "../actions/action";

const InitialState = {
  isSideBarOpen: false,
  isModalOpen: false,
  CardInfo: {
    message:
      "Hope all your birthday wishes come true!” “It's your special day — May your day be filled with joy, reflection, and hope for the year ahead, and may He continue to bless you and watch over you all the days of your life.",
    sender: "Anonymous",
  },
};

export const modeReducers = (state = InitialState, action: any) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        isSideBarOpen: !state.isSideBarOpen,
      };

    case CLOSE:
      return {
        ...state,
        isModalOpen: false,
        isSideBarOpen: false,
      };

    case SHOW_MODAL:
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
      };

    default:
      return state;
  }
};

export default modeReducers;
