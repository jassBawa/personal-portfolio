import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { JsxElement } from "typescript";

type Props = {
  value: String;
  outlined?: Boolean;
  icon?: JSX.Element;
  className?: String;
};

function Button({ value, outlined, className }: Props) {
  if (outlined) {
    return (
      <button className="text-[#111827] font-medium text-sm md:text-sm opacity-70 outline-none  ">
        {value}
      </button>
    );
  }
  return (
    <button
      className={`bg-[#111827] dark:bg-blue-500 text-sm md:text-base text-gray-100 font-medium rounded-full px-8 py-2 hover:opacity-80 transition-opacity shadow-md focus-visible:outline-purple-400 ${className}
    `}
    >
      {value}
    </button>
  );
}

export function IconButton({ value, outlined, icon, className }: Props) {
  if (outlined) {
    return (
      <div className={`flex gap-1 items-center ${className}`}>
        <button className="text-[#111827] font-medium text-sm md:text-sm opacity-70 outline-none  ">
          {value}
        </button>
        {icon && <div className="text-gray-900">{icon}</div>}
      </div>
    );
  }

  return (
    <button
      className={`bg-[#111827] dark:bg-blue-500 flex gap-2 items-center text-sm md:text-base text-white font-medium rounded-full px-8 py-2 hover:opacity-80 transition-opacity shadow-md focus-visible:outline-purple-400 ${className}`}
    >
      {value}
      <span className="text-gray-100 ">{icon}</span>
    </button>
  );
}

export default Button;
