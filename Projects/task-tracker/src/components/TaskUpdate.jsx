import React, { useState } from "react";

const TaskUpdate = ({ item, setTaskListAdd, taskListAdd }) => {
  const [newTitle, setNewTitle] = useState(item.title);
  const [newDate, setNewDate] = useState(item.date);
  console.log(item);

  const upChangeTask = (newEditTask) => {
    const filtered = taskListAdd.filter((item) => item.id !== newEditTask.id);
    setTaskListAdd([...filtered, newEditTask]);
  };

  const handleUpdateDone = (e) => {
    e.preventDefault();
    const newEditTask = {
      title: newTitle,
      date: newDate,
      id: item.id,
    };
    upChangeTask(newEditTask);
    // console.log(newEditTask);
  };

  return (
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
  );
};
export default TaskUpdate;
