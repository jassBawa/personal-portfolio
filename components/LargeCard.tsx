import Image from "next/image";
import React from "react";
import Button from "./Buttons/Button";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

type Props = {};

export default function LargeCard({}: Props) {
  return (
    <section
      className=" max-w-xs md:max-w-3xl lg:max-w-7xl xl:max-w-7xl mx-auto  
    py-6 shadow-md shadow-[#ABECD6] 
    bg-gradient-to-r from-[#FBED96] to-[#ABECD6] rounded-lg 
    hover:from-[#ABECD6] hover:to-[#FBED96]
    
    "
    >
      <div className="flex flex-col items-center gap-4">
        <div className="bg-[#EFFFFA] rounded-full h-16 w-16 flex items-center justify-center">
          <Image
            src="/profilepic.png"
            alt="profile"
            width={54}
            height={54}
            className="rounded-full object-contain -mt-3"
          />
        </div>
        <div className="name text-3xl">Hello, I’m Jass 🤘🏻</div>
        <h3 className="descript w-52 text-xl md:text-3xl lg:text-4xl md:w-96 leading-relaxed text-center">
          I develop
          {/* ideas  */}
          <span className="text-blue-400 mx-1 lg:mx-2">ideas</span>
          and help build a better world through software.
        </h3>
        <div className="buttons flex items-center gap-3">
          <Button value={"Contact"} />
          <Button
            icon={<HiOutlineArrowNarrowRight />}
            outlined
            value={"Download CV"}
          />
        </div>
      </div>
    </section>
  );
}
