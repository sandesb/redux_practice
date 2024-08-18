import { TOGGLE_SIDEBAR, SET_LARGE_SCREEN } from './uiActions';

const initialState = {
  isSidebarOpen: true,
  isLargeScreen: window.innerWidth >= 1024,
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        isSidebarOpen: !state.isSidebarOpen,
      };
    case SET_LARGE_SCREEN:
      return {
        ...state,
        isLargeScreen: action.payload,
      };
    default:
      return state;
  }
};

export default uiReducer;
