import Image from "next/image";
import React from "react";
import Heading from "./shared/Heading";

type Props = {};

export default function AboutMe({}: Props) {
  return (
    <section>
      <div className="max-w-xs md:max-w-3xl lg:max-w-7xl xl:max-w-7xl mx-auto py-6 mt-6">
        <Heading>About Me</Heading>
        <div className="grid grid-cols-1 md:grid-cols-2  ">
          <div className="flex flex-col mt-16 gap-16 order-2 md:order-1">
            <div className="border-l-2 border-black p-2 pl-6 text-gray-900 ">
              <p>
                I&apos;m 21 years old frontend developer, with 1+ year of
                experience in building modern and scaleable frontends with react
                and next-js. I love to learn new technology and deliver
                successful projects.
                <br />
                When I am not coding I love to learn about Video editing 🎥 &
                Color grading.
                <br />
              </p>
              <p className="tracking-widest mt-4">I am open to work!</p>
            </div>
            <div>
              <Heading className="text-sm">Skills</Heading>
            </div>
          </div>
          <div className="image relative mt-16 md:mt-0 flex items-center justify-center md:order-2 ">
            <div className="absolute w-[350px] h-[400px]">
              <Image
                src="/vectordrawings.png"
                alt="drawings"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <Image
              src="/abouteme2.png"
              width={400}
              height={400}
              alt="about"
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
