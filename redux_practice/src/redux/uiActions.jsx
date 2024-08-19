// src/redux/uiActions.js

export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
export const SET_LARGE_SCREEN = 'SET_LARGE_SCREEN';
export const INCREMENT_CART = 'INCREMENT_CART';
export const SET_CART_COUNT = 'SET_CART_COUNT';
export const TOGGLE_CART_POPUP = 'TOGGLE_CART_POPUP'; // New action

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

export const incrementCart = () => {
  return {
    type: INCREMENT_CART,
  };
};

export const setCartCount = (count) => {
  return {
    type: SET_CART_COUNT,
    payload: count,
  };
};

export const toggleCartPopup = () => {
  return {
    type: TOGGLE_CART_POPUP,
  };
};
