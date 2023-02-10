import React from "react";
import { BiMenuAltRight } from "react-icons/bi";
function Header() {
  return (
    <header>
      <div className="flex justify-between items-center py-6 px-6 md:px-20">
        <span className="font-semibold font-">J4ss Bawa</span>
        <div>
          <BiMenuAltRight className="text-3xl opacity-80" />
        </div>
      </div>
    </header>
  );
}

export default Header;
