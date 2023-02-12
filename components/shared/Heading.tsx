import React from "react";

type Props = {
  className?: string;
  children: string | JSX.Element | JSX.Element[];
};

export default function Heading({ className, children }: Props) {
  return (
    <h1
      className={`text-2xl lg:text-5xl w-8 font-medium tracking-widest ${className}`}
    >
      {children}
    </h1>
  );
}
