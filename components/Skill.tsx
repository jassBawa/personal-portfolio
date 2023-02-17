import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  src: string;
  name: string;
  size: number;
};

export default function Skill({ src, name, size }: Props) {
  return (
    <>
      <div className="flex flex-col items-center gap-3 dark:text-gray-100">
        <motion.span
          className="hidden  md:inline-flex opacity-100 hover:opacity-100"
          initial={{ opacity: 0, y: 20, zIndex: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          {name}
        </motion.span>
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
