import React, { useState } from "react";
import TaskCreate from "./TaskCreate";
import TaskList from "./TaskList";

const TaskHeader = () => {
  const [showTaskDone, setShowTaskDone] = useState(false);

  const CreateTask = (create) => {
    // const { title, date } = create;
    // console.log("header task title and date", title, date);
  };

  return (
    <div>
      <h2>Task Tracker</h2>
      <button onClick={() => setShowTaskDone(!showTaskDone)}>
        {!showTaskDone ? "Close Task List" : "Show Task List"}
      </button>
      {!showTaskDone && (
        <div>
          <div className="mt-4">
            <TaskCreate CreateTask={CreateTask} />
          </div>
          <div>
            <TaskList />
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskHeader;
