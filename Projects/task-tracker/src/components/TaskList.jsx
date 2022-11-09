import React, { useEffect } from "react";
import { useState } from "react";
import { TiTrash } from "react-icons/ti";
import { TiEdit } from "react-icons/ti";
import { TiInputCheckedOutline } from "react-icons/ti";
// import TaskUpdate from "./TaskUpdate";

const TaskList = ({ taskListAdd, setTaskListAdd, handleTaskDelete }) => {
  //* Tıklanan edit butonuna ait verilerin aktarıldığı state start
  const [updateTask, setUpdateTask] = useState("");
  console.log(updateTask);
  //* Tıklanan edit butonuna ait verilerin aktarıldığı state finish

  //* Modal dan gelen yen veriler için oluşturulan stateler start
  const [newTitle, setNewTitle] = useState("");
  // console.log(newTitle);
  const [newDate, setNewDate] = useState("");
  // console.log(newDate);
  //* Modal dan gelen yen veriler için oluşturulan stateler finish

  const handleUptade = (id) => {
    //* edit butonuna tıkladıktan sonra tıklanan veriyi id' sine göre seçip state aktarımı
    setUpdateTask(taskListAdd.filter((item) => item.id === id));
  };

  // * Edit butonuna tıklandığnda useEffect Hook unda dependency array tetikleniyor ve modal valuelar tıklanan veri ile dolduruluyor start
  useEffect(() => {
    setNewTitle(updateTask[0]?.title);
    setNewDate(updateTask[0]?.date);
  }, [updateTask]);
  // * Edit butonuna tıklandığnda useEffect Hook unda dependency array tetikleniyor ve modal valuelar tıklanan veri ile dolduruluyor Finish

  const handleUpdateDone = () => {
    //* Modalda submit yapıldıktan sonra veriler yeni object haline geliyor
    const newEditTask = {
      title: newTitle,
      date: newDate,
      id: updateTask[0].id,
    };
    // console.log(newEditTask);
    //* Oluşturulan yeni object in id'si seçilip eski veri çıkarılıp yenisi spread yöntemi ile sona ekleniyor
    const filtered = taskListAdd.filter((item) => item.id !== newEditTask.id);
    setTaskListAdd([...filtered, newEditTask]);
    setNewTitle("");
    setNewDate("");
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

      {/* Modal TaskUpdate component inden çıkarıldı */}

      {/* {updateTask?.map((item) => (
        <TaskUpdate
          setTaskListAdd={setTaskListAdd}
          taskListAdd={taskListAdd}
          item={item}
          key={item.id}
        />
      ))} */}

      {/* Modal Start */}
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
      {/* Modal finish */}
    </div>
  );
};

export default TaskList;
