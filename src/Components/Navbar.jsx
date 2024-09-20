import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white ">
      <div className="flex justify-between items-center px-4 py-5 h-14 mycontainer">
        <div className="logo font-bold text-2xl">
          <span className="text-green-500">&lt;</span>
          Pass
          <span className="text-green-500">OP/&gt;</span>
        </div>
        <ul>
          <li className="flex gap-10">
            <a className="hover:text-green-400" href="#">
              Home
            </a>
            <a className="hover:text-green-400" href="#">
              About
            </a>
            <a className="hover:text-green-400" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
