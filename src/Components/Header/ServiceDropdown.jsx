import React, { useState } from "react";

const NestedDropdown = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const handleMouseEnter = (menu) => {
    setOpenMenu(menu);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setOpenMenu(null);
      setOpenSubMenu(null);
    }, 200); // Small delay to allow smooth transition
  };

  return (
    <div className="relative inline-block">
      {/* Main Button */}
      <button className="btn bg-blue-500 text-white px-4 py-2 rounded-md">
        Tutorials
      </button>

      {/* Main Dropdown */}
      <ul
        className="absolute left-0 mt-2 w-52 bg-white shadow-md rounded-md p-2"
        onMouseEnter={() => handleMouseEnter("main")}
        onMouseLeave={handleMouseLeave}
      >
        <li className="p-2 hover:bg-gray-100 rounded">
          <a href="#">HTML</a>
        </li>
        <li className="p-2 hover:bg-gray-100 rounded">
          <a href="#">CSS</a>
        </li>

        {/* Nested Dropdown - Level 1 */}
        <li
          className="relative p-2 hover:bg-gray-100 rounded cursor-pointer"
          onMouseEnter={() => setOpenMenu("submenu1")}
        >
          New Dropdown ▸
          {openMenu === "submenu1" && (
            <ul
              className="absolute left-full top-0 mt-0 w-52 bg-white shadow-md rounded-md p-2"
              onMouseEnter={() => setOpenMenu("submenu1")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <li className="p-2 hover:bg-gray-100 rounded">
                <a href="#">2nd Level Item 1</a>
              </li>
              <li className="p-2 hover:bg-gray-100 rounded">
                <a href="#">2nd Level Item 2</a>
              </li>

              {/* Nested Dropdown - Level 2 */}
              <li
                className="relative p-2 hover:bg-gray-100 rounded cursor-pointer"
                onMouseEnter={() => setOpenSubMenu("submenu2")}
              >
                Another Dropdown ▸
                {openSubMenu === "submenu2" && (
                  <ul
                    className="absolute left-full top-0 mt-0 w-52 bg-white shadow-md rounded-md p-2"
                    onMouseEnter={() => setOpenSubMenu("submenu2")}
                    onMouseLeave={() => setOpenSubMenu(null)}
                  >
                    <li className="p-2 hover:bg-gray-100 rounded">
                      <a href="#">3rd Level Item 1</a>
                    </li>
                    <li className="p-2 hover:bg-gray-100 rounded">
                      <a href="#">3rd Level Item 2</a>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default NestedDropdown;
