import React from "react";

const DailyTaskBoard = ({ heading, pinColor }) => {
  const taskList = [
    "Go for a 5 km Run.",
    "Read 15 pages.",
    "Solve 5 LeetCode Problems.",
  ];
  return (
    <div style={{ backgroundColor: pinColor }}>
      <h3 className="text-2xl font-semibold text-center">{heading}</h3>
      <hr />
      <div className="flex flex-col gap-4">
        {taskList.map((item) => {
          return (
            <div
              className="align-center px-4 py-4 rounded-md mx-3 my-2"
              style={{ backgroundColor: "#ffffffbf" }}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DailyTaskBoard;
