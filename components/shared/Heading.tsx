import React from "react";

type Props = {
  className?: string;
  children: string | JSX.Element | JSX.Element[];
};

export default function Heading({ className, children }: Props) {
  return (
    <h1
      className={` w-8 font-medium tracking-widest text-gray-900 dark:text-gray-100 ${
        className ? className : "text-2xl lg:text-5xl"
      }`}
    >
      {children}
    </h1>
  );
}
