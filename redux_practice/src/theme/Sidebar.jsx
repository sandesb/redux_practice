import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { User, Home, Mail, HelpCircle } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="fixed w-64 h-screen bg-primary from-gray-100 to-gray-200  flex flex-col">
      <div className="flex items-center space-x-2 mb-2 p-6">
        <User className="w-12 h-12 rounded-full text-gray-600 " />
        <div>
          <h2 className="font-semibold text-lg text-gray-700">Sandes</h2>
          <p className="text-sm text-gray-500">Student</p>
        </div>
      </div>
      <nav className="flex flex-col space-y-6 ">
        <Link
          to="my-classes"
          className={`flex items-center space-x-2 p-6 ${isActive('/my-classes') ? 'bg-sidebar-active text-blue-500' : 'text-gray-600'} p-2`}
        >
          <Home className="w-5 h-5 " />
          <span>My Classes</span>
        </Link>
        <Link
          to="account"
          className={`flex items-center space-x-2 p-6 ${isActive('/account') ? 'bg-sidebar-active text-blue-500' : 'text-gray-600'} p-2`}
        >
          <User className="w-5 h-5" />
          <span>Account</span>
        </Link>
        <Link
          to="messages"
          className={`flex items-center space-x-2 p-6 ${isActive('/messages') ? 'bg-sidebar-active text-blue-500' : 'text-gray-600'} p-2`}
        >
          <Mail className="w-5 h-5" />
          <span>Messages</span>
        </Link>
        <Link
          to="help-center"
          className={`flex items-center space-x-2  p-6 ${isActive('/help-center') ? 'bg-sidebar-active text-blue-500' : 'text-gray-600'} p-2`}
        >
          <HelpCircle className="w-5 h-5" />
          <span>Help Center</span>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
