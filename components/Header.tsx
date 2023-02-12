import Link from "next/link";
import React from "react";
import { BiMenuAltRight } from "react-icons/bi";
function Header() {
  return (
    <header>
      <div className="flex justify-between items-center py-6 px-6 md:px-20">
        <Link href="/">
          <span className="font-semibold text-lg">J4ss Bawa</span>
        </Link>
        <div>
          <BiMenuAltRight className="text-3xl opacity-80" />
        </div>
      </div>
    </header>
  );
}

export default Header;
