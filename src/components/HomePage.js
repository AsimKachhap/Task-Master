import React from "react";
import Header from "./Header";
import { Outlet } from "react-router";
import Sidebar from "./Sidebar";

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-12">
        <div className="col-span-2 bg-red-500">
          <Sidebar />
        </div>
        <div className=" col-span-10 bg-orange-300 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
