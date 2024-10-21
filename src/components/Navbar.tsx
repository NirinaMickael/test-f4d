"use client";
import React, { FC, useState, useEffect } from "react";
import Link from "next/link";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { useTheme } from "@/lib/ThemeContext";
import IconOpenWhite from "./icons/IconOpenWhite";
import IconCloseWhite from "./icons/IconCloseWhite";

const Navbar: FC = () => {
  const [activeLink, setActiveLink] = useState<string>("Services");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Set mounted to true when the component has mounted
    setMounted(true);
  }, []);

  // Use the fill color only when the component is mounted
  const FILL = mounted && theme === "dark" ? "#FFF" : "#000";

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav
      className={`h-[80px] md:py-[31px] px-[10%] md:px-[81px] flex justify-between items-center relative z-[10] border-b-0`}
    >
      <div
        id="logoFrench4Dev"
        className="flex items-center justify-between w-full md:w-auto z-[10]"
      >
        <div className="text-[24px] font-bold dark:text-white text-black">
          FRENCH4 <span className="text-blue-500">DEV.</span>
        </div>

        <button
          className="md:hidden dark:text-white text-black"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <IconCloseWhite fill={FILL} />
          ) : (
            <IconOpenWhite fill={FILL} />
          )}
        </button>
      </div>

      <ul
        className={`fixed top-0 z-50 left-0 h-full w-[250px] dark:bg-gradient-to-b from-[#070b14] to-[#07071b] bg-gray-50 dark:bg-gray-900 dark:text-white text-black flex flex-col items-center gap-4 pt-20 transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 md:flex-row md:w-auto md:pt-0 md:bg-transparent md:flex md:items-center md:gap-[40px]`}
      >
        {["Services", "Portfolio", "Blog", "Contact"].map((link) => (
          <li
            key={link}
            className="relative group text-center md:text-left"
            onClick={() => {
              setActiveLink(link);
              setIsMenuOpen(false);
            }}
          >
            <Link
              href="#"
              className={`block py-2 md:py-0 dark:text-white text-black ${
                activeLink === link ? "font-bold opacity-100" : "opacity-50"
              } transition-opacity duration-300`}
            >
              {link}
            </Link>

            {activeLink === link && (
              <div
                className="absolute left-0 md:bottom-[-29px] w-full h-1 transition-all duration-300"
                style={{ backgroundColor: "rgba(73, 96, 255, 1)" }}
              ></div>
            )}
          </li>
        ))}
        <div className="md:hidden flex items-center">
          <ThemeSwitcher />
        </div>
      </ul>

      <div className="hidden md:flex items-center">
        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
