// src/redux/uiReducer.js

import { TOGGLE_SIDEBAR, SET_LARGE_SCREEN, INCREMENT_CART, SET_CART_COUNT, TOGGLE_CART_POPUP } from './uiActions';

const initialState = {
  isSidebarOpen: true,
  isLargeScreen: window.innerWidth >= 1024,
  cartCount: 0,
  isCartPopupVisible: false, // New state for cart pop-up visibility
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
    case INCREMENT_CART:
      return {
        ...state,
        cartCount: state.cartCount + 1,
      };
    case SET_CART_COUNT:
      return {
        ...state,
        cartCount: action.payload,
      };
    case TOGGLE_CART_POPUP:
      return {
        ...state,
        isCartPopupVisible: !state.isCartPopupVisible,
      };
    default:
      return state;
  }
};

export default uiReducer;
