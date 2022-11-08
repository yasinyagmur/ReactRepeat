import React from "react";
import { useState } from "react";
import { TiTrash } from "react-icons/ti";
import { TiEdit } from "react-icons/ti";
import { TiInputCheckedOutline } from "react-icons/ti";
import TaskUpdate from "./TaskUpdate";

const TaskList = ({ taskListAdd, setTaskListAdd, handleTaskDelete }) => {
  const [updateTask, setUpdateTask] = useState();

  // Modal dan gelen yen veriler için oluşturulan stateler start
  const [newTitle, setNewTitle] = useState("");
  const [newDate, setNewDate] = useState("");
  // Modal dan gelen yen veriler için oluşturulan stateler finish

  const handleUptade = (id) => {
    setUpdateTask(taskListAdd.filter((item) => item.id === id));
  };

  // console.log(taskListAdd);

  // console.log(item);

  // const upChangeTask = (newEditTask) => {
  //   const filtered = taskListAdd.filter((item) => item.id !== newEditTask.id);
  //   setTaskListAdd([...filtered, newEditTask]);
  // };

  const handleUpdateDone = () => {
    const newEditTask = {
      title: newTitle,
      date: newDate,
      id: updateTask.id,
    };
    const filtered = taskListAdd.filter((item) => item.id !== newEditTask.id);
    setTaskListAdd([...filtered, newEditTask]);
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Task Title</th>
            <th>Task Date</th>
            <th>selection</th>
          </tr>
        </thead>
        <tbody>
          {taskListAdd?.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.date}</td>
                <td className="d-flex justify-content-center">
                  <div>
                    <TiTrash
                      size="2rem"
                      style={{ cursor: "pointer", color: "red" }}
                      onClick={() => handleTaskDelete(item.id)}
                    />
                  </div>
                  <div>
                    <TiEdit
                      size="2rem"
                      style={{ cursor: "pointer", color: "grey" }}
                      // Modal open start
                      data-bs-toggle="modal"
                      data-bs-target="#edit-modal"
                      // modal open fınısh
                      onClick={() => handleUptade(item.id)}
                    />
                  </div>
                  <div>
                    <TiInputCheckedOutline
                      size="2.1rem"
                      style={{ cursor: "pointer", color: "green" }}
                    />
                  </div>
                </td>
              </tr>
            );
          })}
          {/* <tr>
            <td>title</td>
            <td>date</td>
            <td>X</td>
          </tr> */}
        </tbody>
      </table>
      {/* {updateTask?.map((item) => (
        <TaskUpdate
          setTaskListAdd={setTaskListAdd}
          taskListAdd={taskListAdd}
          item={item}
          key={item.id}
        />
      ))} */}

      <div className="modal" tabIndex="-1" id="edit-modal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Task Update</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
              />
            </div>
            <div className="modal-body">
              <label htmlFor="date" className="form-label">
                Date
              </label>
              <input
                type="date"
                className="form-control"
                id="date"
                onChange={(e) => setNewDate(e.target.value)}
                value={newDate}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={handleUpdateDone}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
