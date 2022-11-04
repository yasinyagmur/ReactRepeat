import React, { useState } from "react";

const TaskCreate = ({ setTaskList }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  //   console.log(taskTitle);
  //   console.log(taskDate);

  const CreateTaskDone = (e) => {
    e.preventDefault();
    const id = new Date().getTime();
    const TaskListAdd = { title: taskTitle, date: taskDate, id: id };

    setTaskList([TaskListAdd]);
  };

  return (
    <form onSubmit={CreateTaskDone}>
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
          <button className="mt-2">Task Add</button>
        </div>
      </div>
    </form>
  );
};

export default TaskCreate;
