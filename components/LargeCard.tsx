import Image from "next/image";
import React from "react";
import { Button, IconButton } from "components";
import { BsCloudDownload } from "react-icons/bs";
import Link from "next/link";
import { useTypewriter, Cursor } from "react-simple-typewriter";

type Props = {};

export default function LargeCard({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, This is Jass Bawa!",
      "A passionate web developer.",
      "Loves to develop solutions.",
    ],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 80,
  });
  return (
    <section
      className=" max-w-xs md:max-w-3xl lg:max-w-7xl xl:max-w-7xl mx-auto  
    py-6 shadow-md shadow-[#ABECD6] 
    bg-gradient-to-r from-[#FBED96] to-[#ABECD6] rounded-lg 
    animate-text
    "
    >
      <div className="flex flex-col items-center gap-6">
        <div className="bg-[#EFFFFA] shadow-md shadow-teal-100 rounded-full h-16 w-16 flex items-center justify-center">
          <Image
            src="/profilepictwo.png"
            alt="profile"
            width={58}
            height={58}
            className="rounded-full object-contain"
          />
        </div>
        <div className="name text-xl w-3/4 text-center lg:text-3xl text-gray-900">
          {" "}
          {text}
          <Cursor cursorColor="#0b89ff" />
        </div>
        <h3 className="descript text-gray-900 w-52 text-xl lg:text-2xl md:w-96 text-center ">
          I develop
          <span className="text-blue-400 mx-1 lg:mx-2">ideas</span>
          and help build a better world through software.
        </h3>
        <div className="buttons flex items-center gap-3">
          <Link
            href="https://www.linkedin.com/in/jaspreet-singh-bawa/"
            target="_blank"
          >
            <Button value={"Contact"} />
          </Link>

          <Link
            href="https://rxresu.me/jassibawa904/jaspreet-singh"
            target="_blank"
          >
            <IconButton
              icon={<BsCloudDownload />}
              outlined
              value={"Resume"}
              className="border-b-2 border-black/50 py-1 px-2"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
