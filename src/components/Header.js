import React from "react";

const Header = () => {
  const date = new Date().getDay;
  console.log(date);
  return (
    <div className=" header flex flex-row items-center justify-between min-h-[60px] bg-[#F7F7F7] px-10">
      <div>TaskMaster</div>
      <div>{date}</div>
      <button className="py-2 px-4 bg-violet-500 rounded-lg">Sign In </button>
    </div>
  );
};

export default Header;
