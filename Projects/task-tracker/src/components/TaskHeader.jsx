import React, { useState } from "react";
import TaskCreate from "./TaskCreate";

const TaskHeader = () => {
  const [showTaskDone, setShowTaskDone] = useState(false);

  return (
    <div>
      <h2>Task Tracker</h2>
      <button
        className="btn btn-info"
        onClick={() => setShowTaskDone(!showTaskDone)}
      >
        {!showTaskDone ? "Close Task List" : "Show Task List"}
      </button>
      {!showTaskDone && (
        <div>
          <div className="mt-4">
            <TaskCreate />
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskHeader;
