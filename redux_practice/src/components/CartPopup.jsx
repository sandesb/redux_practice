// src/components/CartPopup.js
import React from 'react';
import { useSelector } from 'react-redux';

const CartPopup = () => {
  const isCartPopupVisible = useSelector((state) => state.ui.isCartPopupVisible);

  if (!isCartPopupVisible) return null;

  return (
    <div className="fixed top-16 right-4 w-80 bg-white shadow-lg rounded-lg z-50">
      <div className="p-4 border-b">
        <h2 className="text-lg font-bold">Cart</h2>
      </div>
      <div className="p-4">
        <p>No Data</p>
      </div>
    </div>
  );
};

export default CartPopup;
