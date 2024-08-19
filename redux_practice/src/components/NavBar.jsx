// src/components/Navbar.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Bell, User, Menu, ShoppingCart } from 'lucide-react';
import { toggleSidebar, toggleCartPopup, loadCourses } from '../redux/uiActions'; // Import loadCourses
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Navbar = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector((state) => state.ui.cartCount);

  useEffect(() => {
    dispatch(loadCourses()); // Load courses when Navbar mounts
  }, [dispatch]);

  const handleToggle = () => {
    dispatch(toggleSidebar());
  };

  const handleCartClick = () => {
    dispatch(toggleCartPopup());
  };

  return (
    <div className="flex justify-between items-center p-4 bg-primary from-gray-100 to-gray-200 w-full">
      {/* Adjusted Container for Logo, Menu Button, and Search Bar */}
      <div className="flex items-center space-x-4">
        {/* Logo and Link to HomePage */}
        <Link to="/" className="flex items-center text-xl font-bold text-gray-700 pl-4">
          <span className="pr-2">⚛</span> Redux
        </Link>
        <div className='flex space-x-4 pl-32'>
        {/* Menu Button */}
        <button
          onClick={handleToggle}
          className="p-2 text-gray-700 rounded-md flex items-center"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Search Bar */}
        <SearchBar />
        </div>
      </div>
      
      {/* Icons */}
      <div className="flex items-center space-x-4 pr-4">
        <div className="relative" onClick={handleCartClick}>
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5 shadow">
            {cartCount}
          </span>
          <ShoppingCart className="w-6 h-6 text-gray-600" />
        </div>
        <User className="w-8 h-8 text-gray-600" />
      </div>
    </div>
  );
};

export default Navbar;
