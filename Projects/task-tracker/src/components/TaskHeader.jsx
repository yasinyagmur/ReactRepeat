import React, { useState } from "react";
import TaskCreate from "./TaskCreate";

const TaskHeader = () => {
  const [showTaskDone, setShowTaskDone] = useState(false);

  return (
    <div>
      <h2>Task Tracker</h2>
      <button onClick={() => setShowTaskDone(!showTaskDone)}>
        {!showTaskDone ? "Close Task List" : "Show Task List"}
      </button>
      <div className="mt-4">{!showTaskDone && <TaskCreate />}</div>
    </div>
  );
};

export default TaskHeader;
