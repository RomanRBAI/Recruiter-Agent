import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Store, Settings, User, BarChart2 } from 'lucide-react';
export const Sidebar = ({
  activeView,
  setActiveView
}) => {
  const navigate = useNavigate();
  const handleNavigation = (path, view) => {
    setActiveView(view);
    navigate(path);
  };
  return <div className="w-64 bg-white border-r border-gray-200 flex flex-col h-screen">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="text-blue-500" size={24} />
          <h1 className="text-xl font-bold">AI Agent Hub</h1>
        </div>
      </div>
      <div className="p-4">
        <p className="text-gray-500 font-medium text-sm mb-3">MENU</p>
        <nav className="space-y-1">
          <button onClick={() => handleNavigation('/dashboard', 'dashboard')} className={`flex items-center gap-3 w-full p-2 rounded-md ${activeView === 'dashboard' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}>
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </button>
          <button onClick={() => handleNavigation('/store', 'store')} className={`flex items-center gap-3 w-full p-2 rounded-md ${activeView === 'store' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}>
            <Store size={20} />
            <span>Agent Store</span>
          </button>
          <button onClick={() => handleNavigation('/settings', 'settings')} className={`flex items-center gap-3 w-full p-2 rounded-md ${activeView === 'settings' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}>
            <Settings size={20} />
            <span>Settings</span>
          </button>
          <button onClick={() => handleNavigation('/profile', 'profile')} className={`flex items-center gap-3 w-full p-2 rounded-md ${activeView === 'profile' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}>
            <User size={20} />
            <span>Profile</span>
          </button>
          <button onClick={() => handleNavigation('/usage', 'usage')} className={`flex items-center gap-3 w-full p-2 rounded-md ${activeView === 'usage' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`}>
            <BarChart2 size={20} />
            <span>Usage</span>
          </button>
        </nav>
      </div>
      <div className="mt-6 p-4">
        <p className="text-gray-500 font-medium text-sm mb-3">MY AGENTS</p>
        <div className="space-y-2">
          <div className="bg-gray-100 p-3 rounded-md flex items-center gap-3">
            <div className="bg-gray-200 p-1.5 rounded-md">
              <Store size={18} className="text-gray-600" />
            </div>
            <div>
              <p className="text-sm font-medium">Writing Assistant</p>
              <p className="text-xs text-gray-500">Credits: 120</p>
            </div>
          </div>
          <div className="bg-gray-100 p-3 rounded-md flex items-center gap-3">
            <div className="bg-gray-200 p-1.5 rounded-md">
              <Store size={18} className="text-gray-600" />
            </div>
            <div>
              <p className="text-sm font-medium">Code Helper</p>
              <p className="text-xs text-gray-500">Credits: 85</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-auto p-4 border-t border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">
            JD
          </div>
          <span className="font-medium">John Doe</span>
        </div>
      </div>
    </div>;
};