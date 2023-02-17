import React from "react";
import Heading from "./shared/Heading";
import Skill from "./Skill";

type Skill = {
  src: string;
  name: string;
  size: number;
};

type Props = {
  skillList: Skill[];
};

export default function Skills({ skillList }: Props) {
  return (
    <>
      <Heading className="text-xl lg:text-3xl tracking-wide">Skills</Heading>
      <div className="flex flex-wrap justify-center px-4 gap-8 items-center  mt-8">
        {skillList.map(({ src, name, size }) => (
          <Skill key={name} src={src} name={name} size={size} />
        ))}
      </div>
    </>
  );
}
