// src/redux/uiActions.js

export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
export const SET_LARGE_SCREEN = 'SET_LARGE_SCREEN';
export const INCREMENT_CART = 'INCREMENT_CART';
export const SET_CART_COUNT = 'SET_CART_COUNT';
export const TOGGLE_CART_POPUP = 'TOGGLE_CART_POPUP';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const SET_CART_ITEMS = 'SET_CART_ITEMS'; // New action

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

export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
};

export const removeFromCart = (index) => {
  return {
    type: REMOVE_FROM_CART,
    payload: index,
  };
};

export const setCartItems = (items) => {
  return {
    type: SET_CART_ITEMS,
    payload: items,
  };
};
