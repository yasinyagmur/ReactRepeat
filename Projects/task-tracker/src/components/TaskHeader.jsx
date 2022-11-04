import React, { useState } from "react";
import TaskCreate from "./TaskCreate";
import TaskList from "./TaskList";

const TaskHeader = () => {
  const [showTaskDone, setShowTaskDone] = useState(false);
  const [taskList, setTaskList] = useState();

  const CreateTask = (create) => {
    console.log(create[0]);
    // const { title, date } = create;
    // console.log("header task title and date", title, date);
    setTaskList(create);
  };

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
            <TaskCreate CreateTask={CreateTask} taskList={taskList} />
          </div>
          <div>
            {/* map kısmı taşınacak task list kısmında yapılacak */}
            {taskList?.map((item) => {
              return <TaskList item={item} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskHeader;
