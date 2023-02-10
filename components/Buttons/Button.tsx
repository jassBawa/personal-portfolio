import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { JsxElement } from "typescript";

type Props = {
  value: String;
  outlined?: Boolean;
  icon?: JSX.Element;
};

function Button({ value, outlined, icon }: Props) {
  if (outlined) {
    return (
      <div className="flex gap-1 items-center ">
        <button className="text-[#111827] font-medium text-sm md:text-sm opacity-70 outline-none  ">
          {value}
        </button>
        {icon && <div>{icon}</div>}
      </div>
    );
  }
  return (
    <button
      className="bg-[#111827] text-sm md:text-base text-white font-medium rounded-full px-8 py-2 hover:opacity-80 transition-opacity shadow-md
focus-visible:outline-purple-400
    "
    >
      {value}
    </button>
  );
}

export default Button;
