import React from "react";
import { Link, useLocation } from "react-router-dom";
import { User, Home, Mail, HelpCircle } from "lucide-react";

const ActiveCircles = ({ isActive }) => {
  return (
    <>
      {isActive && (
        <>
          {/* Top Right Circle */}
          <span
            className="absolute z-10 top-[-25px] right-[32px] w-[25px] h-[25px] rounded-full"
            style={{ boxShadow: "9px 9px 0 #f0f4fc" }}
          ></span>
          {/* Bottom Right Circle */}
          <span
            className="absolute z-10 top-[48px] right-[32px] w-[25px] h-[25px] rounded-full"
            style={{ boxShadow: "9px -9px 0 #f0f4fc" }}
          ></span>
        </>
      )}
    </>
  );
};

const ActiveLink = ({ to, icon: Icon, label, isActive }) => {
  return (
    <div className="relative">
      <ActiveCircles isActive={isActive} />
      <Link
        to={to}
        className={`relative flex items-center space-x-2 px-4 py-3 ml-4 ${
          isActive
            ? "bg-sidebar-active text-blue-500 rounded-tl-[20px] rounded-bl-[20px] pl-6"
            : "text-gray-600"
        }`}
      >
        <Icon className="w-5 h-5" />
        <span>{label}</span>
      </Link>
    </div>
  );
};

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="relative h-screen flex">
      <div className="absolute top-0 left-0 w-72 h-full bg-primary from-gray-100 to-gray-200 rounded-tr-[60px] rounded-br-[60px] overflow-hidden">
        <div className="h-full w-full bg-primary">
          <div className="flex items-center space-x-2 mb-2 p-4 ml-4">
            <User className="w-12 h-12 rounded-full text-gray-600" />
            <div>
              <h2 className="font-semibold text-lg text-gray-700">Sandes</h2>
              <p className="text-sm text-gray-500">Student</p>
            </div>
          </div>
          <nav className="flex flex-col space-y-3">
            <ActiveLink
              to="/my-classes"
              icon={Home}
              label="My Classes"
              isActive={location.pathname === "/my-classes"}
            />
            <ActiveLink
              to="/account"
              icon={User}
              label="Account"
              isActive={location.pathname === "/account"}
            />
            <ActiveLink
              to="/messages"
              icon={Mail}
              label="Messages"
              isActive={location.pathname === "/messages"}
            />
            <ActiveLink
              to="/help-center"
              icon={HelpCircle}
              label="Help Center"
              isActive={location.pathname === "/help-center"}
            />
          </nav>
        </div>
      </div>
      <div className="ml-72 flex-grow bg-white">
        {/* Main content goes here */}
      </div>
    </div>
  );
};

export default Sidebar;
