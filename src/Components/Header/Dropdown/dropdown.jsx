import React from "react";
import "./style.css";
import { services_data } from "../ServicesStatic"; // Import your data

// Function to build hierarchical menu structure
const buildMenu = (data) => {
  const mainItems = data.filter((item) => item.type === "main-list");

  return mainItems.map((main) => {
    const subItems = data.filter(
      (item) => item.type === "sub-list" && item.belongsTo === main.name
    );

    const subWithChildren = subItems.map((sub) => {
      const subSubItems = data.filter(
        (item) => item.type === "sub-sub-list" && item.belongsTo === sub.name
      );
      return { ...sub, children: subSubItems };
    });

    return { ...main, children: subWithChildren };
  });
};

const DropdownMenu = ({ items }) => {
  return (
    <li className="dropdown group relative">
      <a
        href={items.url}
        className="flex items-center px-4 py-2 hover:bg-gray-100 transition-colors"
      >
        {items.name}
        {items.children && (
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        )}
      </a>

      {items.children && (
        <ul className="dropdown-submenu absolute hidden group-hover:block min-w-[200px] bg-white border shadow-lg">
          {items.children.map((child) => (
            <DropdownMenu key={child.name} items={child} />
          ))}
        </ul>
      )}
    </li>
  );
};

// Main Menu Component
const MultiLevelDropdown = () => {
  const menuData = buildMenu(services_data);

  return (
    <nav className="bg-white shadow-sm">
      <ul className="container mx-auto flex space-x-4">
        {menuData.map((item) => (
          <DropdownMenu key={item.name} items={item} />
        ))}
      </ul>
    </nav>
  );
};

export default MultiLevelDropdown;
