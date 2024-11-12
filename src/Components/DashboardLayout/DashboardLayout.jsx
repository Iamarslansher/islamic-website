import React, { useState } from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import {
  Home,
  BookOpen,
  HelpCircle,
  Music,
  Book,
  Calendar,
  Users,
  Settings,
  Menu,
  X,
} from "lucide-react";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation().pathname;
  let title = location.slice(11, location.length);
  if (!title) {
    title = "Dashboard";
  }

  const menuItems = [
    { title: "Dashboard", icon: <Home size={20} />, path: "/dashboard" },
    { title: "Bayan", icon: <BookOpen size={20} />, path: "bayan" },
    {
      title: "Islamic Issues",
      icon: <HelpCircle size={20} />,
      path: "islamic-issues",
    },
    { title: "Naats", icon: <Music size={20} />, path: "islamic-naats" },
    { title: "Hadiths", icon: <Book size={20} />, path: "hadiths" },
    {
      title: "Islamic Calendar",
      icon: <Calendar size={20} />,
      path: "islamic-calendar",
    },
    { title: "Community", icon: <Users size={20} />, path: "/community" },
    { title: "Settings", icon: <Settings size={20} />, path: "/settings" },
  ];

  return (
    <div
      className={`${
        isOpen ? "w-64" : "w-20"
      } bg-green-800 min-h-screen transition-all duration-300 sticky top-0 h-screen`}
    >
      <div className="flex items-center justify-between p-4 border-b border-green-700">
        <h2 className={`text-white font-bold ${isOpen ? "block" : "hidden"}`}>
          {title.toUpperCase()}
        </h2>
        <button
          onClick={toggleSidebar}
          className="text-white hover:bg-green-700 p-2 rounded-lg"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      <nav className="mt-4">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className="flex items-center text-white hover:bg-green-700 px-4 py-3 transition-colors"
          >
            <span className="mr-3">{item.icon}</span>
            <span className={`${isOpen ? "block" : "hidden"}`}>
              {item.title}
            </span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

const Topbar = () => {
  const location = useLocation().pathname;
  let title = location.slice(11, location.length);
  if (!title) {
    title = "Dashboard";
  }

  return (
    <div className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-4 shadow-sm sticky top-0 z-10">
      <h1 className="text-2xl font-semibold text-green-800">
        {` ${title.toUpperCase()}`}
      </h1>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx4DqO_qPpE-WlhlBrMovwtoxXYxkwlwVYwA&s"
            alt="Profile"
            className="w-10 h-10 rounded-full border-2 border-green-800"
          />
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex bg-gray-50">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 min-h-screen">
        <Topbar />
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
