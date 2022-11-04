import React from "react";

const TaskList = ({ taskListAdd }) => {
  console.log(taskListAdd[0]);
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
          <tr>
            <td>title</td>
            <td>date</td>
            <td>X</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
