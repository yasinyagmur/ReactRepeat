import React, { useState } from "react";

const TaskCreate = ({ CreateTask }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  //   console.log(taskTitle);
  //   console.log(taskDate);
  let TaskListArray = [
    {
      title: "yasin",
      date: "2000-10-10",
    },
  ];
  const CreateTaskDone = () => {
    TaskListArray.push({ title: taskTitle, date: taskDate });
    CreateTask(TaskListArray);
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="w-50">
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control "
            id="floatingInput"
            placeholder="Enter your task title..."
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
          />
          <label htmlFor="floatingInput">Enter your task title...</label>
        </div>
        <div className="form-floating">
          <input
            type="date"
            className="form-control "
            id="floatingPassword"
            value={taskDate}
            onChange={(e) => setTaskDate(e.target.value)}
          />
          <label htmlFor="floatingPassword">Task Date</label>
        </div>
        <button onClick={() => CreateTaskDone()} className="mt-2">
          Task Add
        </button>
      </div>
    </div>
  );
};

export default TaskCreate;
