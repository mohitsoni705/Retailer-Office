import React from 'react';
import { IoMdHelpCircleOutline } from 'react-icons/io';

const Header = () => {
  return (
    <div className="flex items-center w-full justify-between p-4 bg-black shadow-md border-gray-400 border" >
      {/* Search Input */}
      <div className="flex flex-1">
        <input
          type="text"
          placeholder="Search For Device"
          className="w-full p-2 bg-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"/>
      </div>

      {/* Help Icon List */}
      <div>
        <ul className="flex space-x-4  ml-4">
          <li>
            <a href="/help" className="text-gray-600 hover:text-blue-500">
              <IoMdHelpCircleOutline className="text-2xl text-white" />
            </a>
          </li>
          <li>
            <a href="/help" className="text-gray-600 hover:text-blue-500"></a>
          </li>
          <li>
            <a href="/help" className="text-gray-600 hover:text-blue-500"></a>
          </li>
          <li>
            <a href="/help" className="text-gray-600 hover:text-blue-500"></a>
          </li>
        </ul>
      </div>

      {/* User Info */}
      <div className="flex items-center space-x-2">
        <img
          src="" // You can replace with a user's image URL
          alt="User Avatar"
          className="w-10 h-10 rounded-full object-cover"
        />
        <p className="text-gray-800 font-semibold text-white">Mohit Soni</p>
      </div>
    </div>
  );
};

export default Header;
