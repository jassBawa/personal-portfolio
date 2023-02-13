import { Flamenco } from "@next/font/google";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { MdOutlineDarkMode, MdDarkMode } from "react-icons/md";

const flamenco = Flamenco({
  subsets: ["latin"],
  weight: ["300", "400"],
});
function Header() {
  const [darkMode, setDarkMode] = useState(false);

  const { systemTheme, setTheme, theme } = useTheme();

  const handleDarkMode = (theme: string) => {
    setTheme(theme);
    setDarkMode((prev) => !prev);
  };
  return (
    <header>
      <div className="flex dark:text-gray-100 justify-between items-center py-6 px-6 md:px-20">
        <Link href="/">
          <div className="image flex gap-2 items-end">
            <Image src="/lappy.png" height={42} width={42} alt="lappy" />
            <span className={` text-lg ${flamenco.className}`}>Jass Bawa</span>
          </div>
        </Link>
        <div className="flex items-center gap-8">
          <div className="border rounded-full p-1 border-dashed border-gray-900 dark:border-gray-100 cursor-pointer opacity-90 hover:opacity-100">
            {darkMode ? (
              <MdDarkMode
                className="h-6 w-6"
                onClick={() => handleDarkMode("light")}
              />
            ) : (
              <MdOutlineDarkMode
                className="h-6 w-6"
                onClick={() => handleDarkMode("dark")}
              />
            )}
          </div>
          <BiMenuAltRight className="md:hidden text-3xl " />
          <div className="hidden md:flex gap-8">
            <Link href="#projects">
              <span className="text-lg dark:text-gray-300  dark:hover:text-white ">
                Projects
              </span>
            </Link>
            <Link href="#about">
              <span className="text-lg dark:text-gray-300 dark:hover:text-white">
                About
              </span>
            </Link>
            <Link href="#contact">
              <span className="text-lg dark:text-gray-300 dark:hover:text-white">
                Contact
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
