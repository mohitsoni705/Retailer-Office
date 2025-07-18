import React from 'react';
import { BsSpeedometer } from 'react-icons/bs';
import { RiSettingsLine } from 'react-icons/ri';
import { TbDeviceMobile, TbDeviceMobileSearch } from 'react-icons/tb';
import { NavLink } from 'react-router-dom';

const LeftNav = () => {
  return (
    <div className="flex  flex-col gap-8 p-4 bg-black h-full border-gray-400 shadow-lg border">
      {/* Logo and Title */}
      <div className="flex items-center gap-2 font-bold text-lg h-16">
        <NavLink to="/">
        <img src="src/img/logo.jpg" className="w-8 h-8 object-contain" alt="Logo" />
        <div className='text-white '>Retailer Office</div>
        </NavLink>
      </div>

      {/* Navigation Links */}
      <div>
        <ul className="flex flex-col gap-2">
          <li className="h-12 w-36 rounded-sm p-3 transition-all duration-200 ">
            <NavLink to="/" className="flex items-center text-white hover:text-gray-300 ">
              <BsSpeedometer className="mr-2 text-xl " />
              Dashboard
            </NavLink>
          </li>
          <li className="h-12 w-36 rounded-sm p-3 transition-all duration-200">
            <NavLink to="/handsets" className="flex items-center text-white hover:text-gray-300 ">
              <TbDeviceMobile className="mr-2 text-xl" />
              Handsets
            </NavLink>
          </li>
          <li className="h-12 w-36 rounded-sm p-3 transition-all duration-200">
            <NavLink to="/locate" className="flex items-center text-white hover:text-gray-300">
              <TbDeviceMobileSearch className="mr-2 text-xl" />
              Locate
            </NavLink>
          </li>
          <li className="h-12 w-36 rounded-sm p-3  transition-all duration-200">
            <NavLink to="/settings" className="flex items-center text-white hover:text-gray-300 ">
              <RiSettingsLine className="mr-2 text-xl" />
              Settings
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftNav;
