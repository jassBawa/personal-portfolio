import Image from "next/image";
import React from "react";
import Heading from "./shared/Heading";
import Skill from "./Skill";

const skills = [
  {
    src: "/reactbadge.png",
    name: "React Js",
    size: 72,
  },
  {
    src: "/nextjsbadge.png",
    name: "Next Js",
    size: 100,
  },
  {
    src: "/jsbadge.png",
    name: "Javscript",
    size: 72,
  },
  {
    src: "/redux.png",
    name: "Redux",
    size: 72,
  },
  {
    src: "/tailwindcss.png",
    name: "Tailwind Css",
    size: 72,
  },
];

type Props = {};

export default function AboutMe({}: Props) {
  return (
    <section>
      <div className="max-w-xs md:max-w-3xl lg:max-w-7xl xl:max-w-7xl mx-auto py-6 mt-10">
        <Heading>About Me</Heading>
        <div className="grid grid-cols-1 md:grid-cols-2  ">
          <div className="flex flex-col mt-16 gap-16 order-2 md:order-1">
            <div className="border-l-2 border-black dark:border-gray-100 p-2 pl-6 text-gray-900 dark:text-gray-100 ">
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
              <p className="tracking-widest mt-4 uppercase">Open to work!</p>
            </div>
            <div>
              <Heading className="text-xl lg:text-3xl tracking-wide">
                Skills
              </Heading>
              <div className="flex flex-wrap justify-center px-4 gap-8 items-center  mt-8">
                {skills.map(({ src, name, size }) => (
                  <Skill key={name} src={src} name={name} size={size} />
                ))}
              </div>
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
