import React, { useState } from "react";
import { motion } from "framer-motion";

const MegaMenu = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 dark:bg-gray-900">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto p-4">
        <a
          href="#"
          className="text-2xl font-semibold text-gray-900 dark:text-white"
        >
          Flowbite
        </a>
        <ul className="flex space-x-8">
          <li>
            <a
              href="#"
              className="text-gray-900 dark:text-white hover:text-blue-600"
            >
              Home
            </a>
          </li>
          <li
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <button className="text-gray-900 dark:text-white hover:text-blue-600 flex items-center">
              Company
              <svg
                className="w-3 h-3 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700"
              >
                <ul className="p-2">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </motion.div>
            )}
          </li>
          <li>
            <a
              href="#"
              className="text-gray-900 dark:text-white hover:text-blue-600"
            >
              Marketplace
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MegaMenu;
