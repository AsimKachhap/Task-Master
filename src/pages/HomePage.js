import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-12">
        <div className="col-span-2">
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
