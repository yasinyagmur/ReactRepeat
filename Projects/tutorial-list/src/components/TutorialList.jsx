import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

const TutorialList = ({ tutorials }) => {
  // test data start
  // let tutorials = [
  //   {
  //     id: 1,
  //     title: "React Js",
  //     description: "React is a JS-library for UI Desing",
  //   },
  //   {
  //     id: 2,
  //     title: "HTML",
  //     description: "HTML is markup languages",
  //   },
  // ];
  // test data finish

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col" className="text-center">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {tutorials.map((item) => {
            const { id, title, description } = item;
            return (
              <tr>
                <th>{id}</th>
                <td>{title}</td>
                <td>{description}</td>
                <td>
                  <FaEdit size={20} className="text-warning me-2" />
                  <AiFillDelete size={21} className="text-danger" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default TutorialList;
