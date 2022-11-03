import React from "react";

const TaskList = ({ item }) => {
  console.log(item);
  const { title, date } = item;
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
            <td>{title}</td>
            <td>{date}</td>
            <td>X</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
