import React from "react";
import Image from "next/image";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import Link from "next/link";

type Props = {};

export default function Contact({}: Props) {
  return (
    <div className=" bg-gray-900 dark:bg-[#ABECD6] max-w-full rounded-xl rounded-b-none mx-auto py-6 mt-10 ">
      <div className="flex py-8 px-16 md:px-24">
        <div className="text-white dark:text-gray-900">
          <h1 className="text-4xl md:text-8xl tracking-wider">
            Is there any idea?
          </h1>
          <h3 className="text-gray-200 dark:text-gray-700 text-lg md:text-2xl mt-4">
            Let&apos;s build it together
          </h3>
          <Link href="mailto:jasspreetsbawa@gmail.com" target="_blank">
            <h2 className="text-xl md:text-3xl border-b-2 dark:border-gray-900 pb-1 mt-8 md:mt-20 inline-block cursor-pointer dark:text-gray-900">
              hello@jassbawa
            </h2>
          </Link>

          <div className="flex gap-4 mt-8">
            <Link
              href="https://www.linkedin.com/in/jaspreet-singh-bawa/"
              target="_blank"
            >
              <BsLinkedin className="h-12 w-12 text-blue-500 bg-white  rounded cursor-pointer  hover:opacity-90" />
            </Link>
            <Link href="https://github.com/jassBawa" target="_blank">
              <BsGithub className="h-12 w-12  bg-gray-700 dark:text-white p-2 rounded cursor-pointer hover:opacity-90" />
            </Link>
          </div>
        </div>
        <div className="image hidden md:inline-flex">
          <Image src="/footericons.png" height={400} width={500} alt="icons" />
        </div>
      </div>
    </div>
  );
}
