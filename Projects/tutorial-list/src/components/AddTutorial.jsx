import React, { useState } from "react";

const AddTutorial = ({ addTutorial }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const HandleSubmit = (e) => {
    e.preventDefault();
    addTutorial({
      title: title,
      description: desc,
    });
    setTitle("");
    setDesc("");
  };
  return (
    <div className="container text-center mt-4">
      <h1 className="text-danger display-5">Add Your Tutorial</h1>
      <form onSubmit={HandleSubmit}>
        <div className="mb-2">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            className="form-control"
            type="text"
            name="title"
            id="title"
            value={title}
            placeholder="Enter your title"
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-2 ">
          <label htmlFor="desc" className=" form-label">
            Description
          </label>
          <input
            className="form-control"
            type="text"
            name="desc"
            id="desc"
            value={desc}
            placeholder="Enter your description"
            required
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" className="btn btn-danger mb-4">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTutorial;
