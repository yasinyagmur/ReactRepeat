import React, { useEffect, useState } from "react";
import TaskList from "./TaskList";

const TaskCreate = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");

  //   console.log(taskTitle);
  //   console.log(taskDate);
  const [taskListAdd, setTaskListAdd] = useState(
    JSON.parse(localStorage.getItem("task")) || []
  );
  // console.log(taskListAdd);

  const CreateTaskDone = (e) => {
    e.preventDefault();
    const id = new Date().getTime();
    const isDone = false;
    setTaskListAdd([
      ...taskListAdd,
      {
        title: taskTitle,
        date: taskDate,
        id: id,
        isDone: isDone,
      },
    ]);
    setTaskTitle("");
    setTaskDate("");
  };

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(taskListAdd));
  }, [taskListAdd]);

  const handleTaskDelete = (id) => {
    setTaskListAdd(taskListAdd.filter((item) => item.id !== id));
  };

  const upChangeTask = (newEditTask) => {
    const filtered = taskListAdd.filter((item) => item.id !== newEditTask.id);
    setTaskListAdd([...filtered, newEditTask]);
  };

  return (
    <div>
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
                required
              />
              <label htmlFor="floatingInput">Enter your task title...</label>
            </div>
            <div className="form-floating">
              <input
                type="date"
                className="form-control "
                id="floatingPassword"
                required
                value={taskDate}
                onChange={(e) => setTaskDate(e.target.value)}
              />
              <label htmlFor="floatingPassword">Task Date</label>
            </div>
            <button className="mt-2">Task Add</button>
          </div>
        </div>
      </form>
      <TaskList
        taskListAdd={taskListAdd}
        setTaskListAdd={setTaskListAdd}
        handleTaskDelete={handleTaskDelete}
        upChangeTask={upChangeTask}
      />
    </div>
  );
};

export default TaskCreate;
