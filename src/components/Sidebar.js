import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-col justify-around  ">
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-blue-200 py-4 px-8 m-2 rounded-md"
            : "bg-neutral-400 py-4 px-8 m-2 rounded-md"
        }
        to="/daily"
      >
        Daily
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-blue-200 py-4 px-8 m-2 rounded-md"
            : "bg-neutral-400 py-4 px-8 m-2 rounded-md"
        }
        to="/weekly"
      >
        Weekly
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-blue-200 py-4 px-8 m-2 rounded-md"
            : "bg-neutral-400 py-4 px-8 m-2 rounded-md"
        }
        to="/monthly"
      >
        Monthly
      </NavLink>
    </div>
  );
};

export default Sidebar;
