import React from "react";
import Image from "next/image";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import Link from "next/link";

type Props = {};

export default function Contact({}: Props) {
  return (
    <div className=" bg-gray-900 max-w-xs md:max-w-3xl lg:max-w-full rounded-xl rounded-b-none mx-auto py-6 mt-10 ">
      <div className="flex py-8 px-24">
        <div className="text-white">
          <h1 className="text-8xl tracking-wider">Is there a idea?</h1>
          <h3 className="text-gray-200 text-2xl mt-4">
            Let&apos;s build it together
          </h3>
          <Link href="mailto:jasspreetsbawa@gmail.com" target="_blank">
            <h2 className="text-3xl border-b-2 pb-1 mt-20 inline-block cursor-pointer">
              hello@jass.com
            </h2>
          </Link>

          <div className="flex gap-4 mt-8">
            <Link
              href="https://www.linkedin.com/in/jaspreet-singh-bawa/"
              target="_blank"
            >
              <BsLinkedin className="h-12 w-12 text-blue-500 bg-white rounded cursor-pointer  hover:opacity-90" />
            </Link>
            <Link href="https://github.com/jassBawa" target="_blank">
              <BsGithub className="h-12 w-12  bg-gray-700 p-2 rounded cursor-pointer hover:opacity-90" />
            </Link>
          </div>
        </div>
        <div className="image hidden md:inline-flex">
          <Image src="/footericons.png" height={500} width={500} alt="icons" />
        </div>
      </div>
    </div>
  );
}
