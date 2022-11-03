import React from "react";

const TaskCreate = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="col-md-6">
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control "
            id="floatingInput"
            placeholder="Enter your task title..."
          />
          <label htmlFor="floatingInput">Enter your task title...</label>
        </div>
        <div className="form-floating">
          <input
            type="date"
            className="form-control "
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Task Date</label>
        </div>
      </div>
    </div>
  );
};

export default TaskCreate;
