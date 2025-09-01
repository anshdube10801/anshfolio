import React, { useState, useRef, useEffect } from 'react';
import { NavHashLink } from 'react-router-hash-link';
import { RiArrowDropDownLine } from "react-icons/ri";
import projectsData from './projects.json'

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleIconClick = (event) => {
    event.stopPropagation(); // Prevent navigation when clicking the icon
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <>
      <nav className="sticky top-0 z-999 bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900 shadow-lg">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-2">
          <NavHashLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/logo.svg" className="h-18" alt="Logo" fetchpriority="high" />
          </NavHashLink>
          <div
            id="mega-menu-full"
            className="items-center justify-between font-medium hidden w-full md:flex md:w-auto md:order-1"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavHashLink
                  smooth
                  to="#hero"
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[var(--custom-nav-link)] md:p-0 dark:text-white"
                >
                  Home
                </NavHashLink>
              </li>
              <li>
                <NavHashLink
                  smooth
                  to="#about"
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[var(--custom-nav-link)] md:p-0 dark:text-white"
                >
                  About
                </NavHashLink>
              </li>
              <li ref={dropdownRef} className="relative">
                <div className="flex items-center">
                  <NavHashLink
                    smooth
                    to="#projects"
                    className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[var(--custom-nav-link)] md:p-0 dark:text-white"
                  >
                    Projects
                  </NavHashLink>
                  <RiArrowDropDownLine
                    size={24}
                    className="ml-1 cursor-pointer"
                    onClick={handleIconClick}
                  />
                </div>
                

                {isDropdownOpen && (
  <div className="absolute left-0 right-0 mt-2 z-10 bg-white dark:bg-gray-700 shadow-md rounded-lg">
    <div className="grid grid-cols-4 gap-4 px-4 max-h-auto overflow-auto">
  
    {isDropdownOpen && (
  <div className="absolute left-0 mt-2 w-50 z-10 bg-white dark:bg-gray-700 shadow-md rounded-lg overflow-hidden">
    <div className="grid grid-cols-1 max-h-auto">
      {projectsData.map((project, index) => (
        <div key={index} className="group">
          <a
            href={project?.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-2 hover:bg-[var(--custom-red-sec-btn-hover)] dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <img
              src={project?.image}
              alt="Project Thumbnail"
              className="h-24 w-48  rounded mb-2 group-hover:border border-[var(--custom-red-btn-hover)]"
            />
            <span>{project?.title}</span>
          </a>
        </div>
        
      ))}
    </div>
  </div>
)}


    </div>
  </div>
)}
              </li>
              <li>
                <NavHashLink
                  smooth
                  to="#contact"
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[var(--custom-nav-link)] md:p-0 dark:text-white"
                >
                  Footer
                </NavHashLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
