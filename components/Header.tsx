import { Flamenco } from '@next/font/google';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { BiMenuAltRight } from 'react-icons/bi';
import { MdOutlineDarkMode, MdDarkMode } from 'react-icons/md';
import { motion } from 'framer-motion';

const flamenco = Flamenco({
  subsets: ['latin'],
  weight: ['300', '400'],
});
function Header() {
  const { systemTheme, setTheme } = useTheme();

  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (systemTheme === 'dark') return true;
    return false;
  });


  const handleDarkMode = (theme: string) => {
    setTheme(theme);
    setDarkMode((prev) => !prev);
  };
  return (
    <header>
      <div className="flex items-center justify-between px-6 py-6 dark:text-gray-100 md:px-20">
        <Link href="/">
          <div className="flex items-end gap-2 image">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Image
                src="/lappy.png"
                height={42}
                width={42}
                alt="lappy"
                priority
              />
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
          <div className="p-1 border border-gray-900 border-dashed rounded-full cursor-pointer dark:border-gray-100 opacity-90 hover:opacity-100">
            {darkMode ? (
              <MdDarkMode
                className="w-6 h-6"
                onClick={() => handleDarkMode('light')}
              />
            ) : (
              <MdOutlineDarkMode
                className="w-6 h-6"
                onClick={() => handleDarkMode('dark')}
              />
            )}
          </div>
          <BiMenuAltRight className="text-3xl md:hidden " />
          <div className="hidden gap-8 md:flex">
            <Link href="#projects">
              <span className="text-lg dark:text-gray-300 dark:hover:text-white ">
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

// export async function getStaticProps({ locale }) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ["header"])),
//       // Will be passed to the page component as props
//     },
//   };
// }

export default Header;
