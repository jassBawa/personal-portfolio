import Image from "next/image";
import React from "react";

type Props = {
  src: string;
  name: string;
  size: number;
};

export default function Skill({ src, name, size }: Props) {
  return (
    <>
      <div className="flex flex-col items-center gap-3 dark:text-gray-100">
        <span className="hidden md:inline-flex opacity-100 hover:opacity-100">
          {name}
        </span>
        <Image
          src={src}
          alt={name}
          width={size}
          height={size}
          className="hover:scale-105 transition drop-shadow-lg "
        />
      </div>
    </>
  );
}
