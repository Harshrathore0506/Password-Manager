import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-between items-center bg-slate-800 text-white p-2 px-10 fixed bottom-0 w-full">
      <div className="logo font-bold text-2xl">
        <span className="text-green-500">&lt;</span>
        Pass
        <span className="text-green-500">OP/&gt;</span>
      </div>
      <div>Created by Harsh Rathore</div>
    </div>
  );
};

export default Footer;
