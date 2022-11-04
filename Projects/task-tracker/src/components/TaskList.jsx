import React from "react";
import { TiTrash } from "react-icons/ti";
import { TiEdit } from "react-icons/ti";
import { TiInputCheckedOutline } from "react-icons/ti";

const TaskList = ({ taskListAdd, handleTaskDelete }) => {
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
    </div>
  );
};

export default TaskList;
