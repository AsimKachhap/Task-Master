import React from "react";
import DailyTaskBoard from "../components/DailyTaskBoard";

const DailyPage = () => {
  return (
    <div className="grid grid-cols-3 gap-2 rounded-md ">
      <DailyTaskBoard heading="Tasks to Do" pinColor="#45BFFF" />
      <DailyTaskBoard heading="Tasks in Progress" pinColor="#FFBB55" />
      <DailyTaskBoard heading="Tasks Completed" pinColor="#3DED97" />
    </div>
  );
};

export default DailyPage;
