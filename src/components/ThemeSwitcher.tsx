"use client";
import React, { useContext } from "react";
import { useTheme } from "@/lib/ThemeContext";
import IconMoon from "./icons/IconMoon";
import IconSun from "./icons/IconSun";

const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
    onClick={() => toggleTheme()}
      className="relative flex items-center px-2 rounded-full transition-colors duration-300 dark:bg-gray-700
      bg-blue-600 w-24 h-10
      "
    >
        <span
          className={`absolute dark:-right-7 left-2 text-white text-sm font-bold transition-all duration-300`}
        >
          {theme == 'dark' ? "Dark" : "Light"}
        </span>

      <div
        className="flex items-center justify-center w-8 h-8 rounded-full transition-transform transform  dark:translate-x-0 dark:bg-blue-600
          translate-x-12 bg-white"
      >
        {theme == 'dark' ? (
          <IconMoon />
        ) : (
          <IconSun  />
        )}
      </div>
    </button>
  );
};

export default ThemeSwitcher;
