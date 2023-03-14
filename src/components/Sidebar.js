import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <Link to="/daily">Daily</Link>
      </div>
      <div>
        <Link to="/weekly">Weekly</Link>
      </div>
      <div>
        <Link to="/monthly">Monthly</Link>
      </div>
    </div>
  );
};

export default Sidebar;
