import React from "react";

const Sample = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Flowbite
          </span>
        </a>
        <div className="hidden md:flex md:w-auto md:order-1">
          <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-blue-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Home
              </a>
            </li>
            <li className="relative group">
              <button className="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
                Company
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
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
              <div className="absolute z-10 hidden group-hover:block w-auto grid grid-cols-2 text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700">
                <div className="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                  <ul className="space-y-4">
                    <li>
                      <a
                        href="#"
                        className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                      >
                        Library
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                      >
                        Resources
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sample;
