import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsGithub, BsGlobe2 } from "react-icons/bs";

type Social = {
  github: string;
  live?: string;
};

type Props = {
  title: string;
  badges: string[];
  image: string;
  socials: Social;
};

// hover:scale-105 opacity-80 hover:opacity-100 transition-all ease-in-out duration-200

export default function Project({ title, badges, image, socials }: Props) {
  return (
    <>
      <div className="mt-6 flex flex-col items-start gap-4 p-4 ">
        <h3 className="text-lg lg:text-2xl font-medium dark:text-gray-100">
          {title}
        </h3>
        <div className="tags flex gap-1">
          {badges.map((badge, i) => (
            <span
              key={i}
              className="rounded-full bg-[#38BDF8] px-3 py-1 text-xs text-gray-100"
            >
              {badge}
            </span>
          ))}{" "}
        </div>
        <div className="project-image border-[16px] border-x-8 rounded-lg border-red-500">
          <div className="relative h-44 w-80">
            <Image
              src={image}
              alt={image}
              fill
              className=" absolute  object-center"
            />
          </div>
        </div>
        <div className="links px-2 flex gap-4">
          <Link href={socials.github} target="_blank">
            <div className="btncontainer flex gap-2 items-center cursor-pointer rounded-full px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 ">
              <span className="text-gray-600  dark:text-gray-100 text-lg">
                Github
              </span>
              <BsGithub className="dark:text-white" />
            </div>
          </Link>
          {socials.live && (
            <Link href={socials.live} target="_blank">
              <div className="btncontainer flex gap-2 items-center cursor-pointer rounded-full px-2 py-1 hover:bg-gray-100  dark:hover:bg-gray-600">
                <span className="text-gray-600 dark:text-gray-100 text-lg">
                  Live
                </span>
                <BsGlobe2 className="dark:text-white" />
              </div>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
