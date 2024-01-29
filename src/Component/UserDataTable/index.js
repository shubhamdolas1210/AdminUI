import "./index.css";
import { AiOutlineDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
const UserDataTable = () => {
  return (
    <div className="TableData">
      <table className="customers">
        <tr>
          <th>
            <input type="checkbox" />
          </th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Action</th>
        </tr>
        <tr>
          <th>
            <input type="checkbox" />
          </th>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
          <td className="iconSpace">
            <FaRegEdit className="edit-icon" />
            <AiOutlineDelete className="delete-icon" />
          </td>
        </tr>
      </table>
    </div>
  );
};
export default UserDataTable;
