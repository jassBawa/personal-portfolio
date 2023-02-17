import Image from "next/image";
import React from "react";
import Heading from "./shared/Heading";
import { motion } from "framer-motion";
import Skills from "./Skills";

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
            <motion.div
              className="border-l-2 border-black dark:border-gray-100 p-2 pl-6 text-gray-900 dark:text-gray-100 "
              initial={{ opacity: 0, y: -50 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                I&apos;m 21 years old frontend developer, with 1+ year of
                experience in building modern and scaleable frontends with react
                and next-js. I love to learn new technology and deliver
                successful projects.
                <br />
                When I am not coding I love to learn about Video editing 🎥 &
                Color grading.
                <br />
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="tracking-widest mt-4 uppercase"
              >
                Open to work!
              </motion.p>
            </motion.div>
            <div>
              <Skills skillList={skills} />
            </div>
          </div>
          <div className="image relative mt-16 md:mt-0 flex items-center justify-center md:order-2 ">
            <div
              className="absolute w-[350px] h-[400px]"
              // initial={{ opacity: 0 }}
              // whileInView={{ opacity: 1 }}
              // viewport={{ once: true }}
            >
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
