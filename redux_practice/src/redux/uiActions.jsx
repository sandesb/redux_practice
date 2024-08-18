// src/redux/uiActions.js

export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
export const SET_LARGE_SCREEN = 'SET_LARGE_SCREEN';

export const toggleSidebar = () => {
  return {
    type: TOGGLE_SIDEBAR,
  };
};

export const setLargeScreen = (isLargeScreen) => {
  return {
    type: SET_LARGE_SCREEN,
    payload: isLargeScreen,
  };
};
