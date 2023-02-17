import { Flamenco } from "@next/font/google";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { MdOutlineDarkMode, MdDarkMode } from "react-icons/md";
import { motion } from "framer-motion";

const flamenco = Flamenco({
  subsets: ["latin"],
  weight: ["300", "400"],
});
function Header() {
  const { systemTheme, setTheme, theme } = useTheme();
  const [darkMode, setDarkMode] = useState(
    systemTheme === "dark" ? false : true
  );

  const handleDarkMode = (theme: string) => {
    setTheme(theme);
    setDarkMode((prev) => !prev);
  };
  return (
    <header>
      <div className="flex dark:text-gray-100 justify-between items-center py-6 px-6 md:px-20">
        <Link href="/">
          <div className="image flex gap-2 items-end">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Image src="/lappy.png" height={42} width={42} alt="lappy" />
            </motion.div>
            <motion.span
              className={` text-lg ${flamenco.className}`}
              initial={{ y: -90 }}
              animate={{ y: 0 }}
              // style={{ y: -90 }}
              transition={{ duration: 0.8 }}
            >
              Jass Bawa
            </motion.span>
          </div>
        </Link>
        <motion.div
          className="flex items-center gap-8"
          initial={{ x: 400 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
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
        </motion.div>
      </div>
    </header>
  );
}

export default Header;
