import React from 'react';
import { useDispatch } from 'react-redux';
import { Bell, Search, User, Menu, X } from 'lucide-react';
import { toggleSidebar } from '../redux/uiActions';

const Navbar = () => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div className="flex justify-between items-center p-4 bg-primary from-gray-100 to-gray-200 w-full">
      <div className="text-xl font-bold text-gray-700 pl-6">⚛ Redux</div>
      
      <button
        onClick={handleToggle}
        className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-lg flex items-center space-x-2"
      >
        <Menu className="w-5 h-5" />
      </button>
      
      <div className="flex space-x-4">
        <input
          type="text"
          placeholder="Type In..."
          className="px-4 py-2 border rounded-md bg-gray-50 shadow-inner focus:outline-none focus:ring focus:border-blue-300"
        />

        <button className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-lg flex items-center space-x-2">
          <Search className="w-5 h-5" />
          <span>Search</span>
        </button>
      </div>
      
      <div className="flex items-center space-x-4 pr-4">
        <div className="relative">
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5 shadow">
            3
          </span>
          <Bell className="w-6 h-6 text-gray-600" />
        </div>
        <User className="w-8 h-8 text-gray-600" />
      </div>
    </div>
  );
};

export default Navbar;
