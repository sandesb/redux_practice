// src/hooks/useCart.js
import { useDispatch, useSelector } from 'react-redux';
import { incrementCart } from '../redux/uiActions';
import Cookies from 'js-cookie';
import { useEffect } from 'react';

const useCart = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector((state) => state.ui.cartCount);

  useEffect(() => {
    const savedCartCount = Cookies.get('cartCount');
    if (savedCartCount) {
      dispatch({ type: 'SET_CART_COUNT', payload: parseInt(savedCartCount, 10) });
    }
  }, [dispatch]);

  const handlePlusClick = () => {
    dispatch(incrementCart());
    Cookies.set('cartCount', cartCount + 1, { expires: 7 }); // Store the cart count in cookies for 7 days
  };

  return {
    handlePlusClick,
    cartCount,
  };
};

export default useCart;
