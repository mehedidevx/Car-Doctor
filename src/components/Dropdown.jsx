import React, { useState, useRef, useEffect } from 'react';
import { User, LogOut, Settings, ChevronDown } from 'lucide-react';
import { signOut, useSession } from 'next-auth/react';

const ModernDropdown = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Mock session data for demonstration
  const { data: session, status } = useSession();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleProfileClick = () => {
    console.log('Navigate to profile');
    setOpen(false);
  };

  const handleLogout = () => {
    console.log('Logout user');
    setOpen(false);
    signOut()
  };

  const handleSettings = () => {
    console.log('Navigate to settings');
    setOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Avatar button */}
      <button
        className="relative flex items-center space-x-2 p-1 rounded-full hover:bg-gray-50 transition-all duration-200 focus:outline-none "
        onClick={() => setOpen(!open)}
      >
        <div className="relative cursor-pointer">
          <img
            src={session?.user?.image || "/default-avatar.png"}
            alt="User profile"
            className="w-8 h-8 rounded-full object-cover ring-2 ring-white shadow-sm"
          />
          {/* Online indicator */}
          <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full ring-2 ring-white"></div>
        </div>
        
        
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-3 w-56 bg-white border border-gray-200 rounded-xl shadow-xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
          {/* User info section */}
          <div className="px-4 py-3 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50">
            <div className="flex items-center space-x-3">
              <img
                src={session?.user?.image || "/default-avatar.png"}
                alt="User profile"
                className="w-10 h-10 rounded-full object-cover ring-2 ring-white shadow-sm"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 truncate">
                  {session?.user?.name || 'User Name'}
                </p>
                <p className="text-xs text-gray-600 truncate">
                  {session?.user?.email || 'user@example.com'}
                </p>
              </div>
            </div>
          </div>

          {/* Menu items */}
          <div className="py-2">
            <button
              onClick={handleProfileClick}
              className="flex items-center w-full px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-150 group"
            >
              <User className="w-4 h-4 mr-3 text-gray-500 group-hover:text-blue-500 transition-colors" />
              <span>Profile</span>
            </button>
            
            <button
              onClick={handleSettings}
              className="flex items-center w-full px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-150 group"
            >
              <Settings className="w-4 h-4 mr-3 text-gray-500 group-hover:text-blue-500 transition-colors" />
              <span>Settings</span>
            </button>

            {/* Divider */}
            <div className="border-t border-gray-100 my-2"></div>

            <button
              onClick={handleLogout}
              className="flex items-center w-full px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 hover:text-red-700 transition-colors duration-150 group"
            >
              <LogOut className="w-4 h-4 mr-3 text-red-500 group-hover:text-red-600 transition-colors" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModernDropdown;