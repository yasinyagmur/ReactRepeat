import React, { useState } from "react";

const TaskUpdate = ({ uptadeTask, setTaskListAdd, taskListAdd }) => {
  const { title, date, id } = uptadeTask[0];
  const [newTitle, setNewTitle] = useState();
  const [newDate, setNewDate] = useState();
  console.log(title);

  const handleUpdateDone = () => {
    setTaskListAdd({
      title: newTitle,
      date: newDate,
      id: id,
    });
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
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <input
              onChange={(e) => setNewTitle(e.target.value)}
              value={title}
            />
          </div>
          <div className="modal-body">
            <input onChange={(e) => setNewDate(e.target.value)} value={date} />
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
              onClick={() => handleUpdateDone()}
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
