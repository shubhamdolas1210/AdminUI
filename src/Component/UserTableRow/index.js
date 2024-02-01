import { FaRegEdit, FaRegSave } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";

const UserTableRow = ({
  rowData,
  editingUserId,
  editFormData,
  handleEdit,
  handleEditFormChange,
  handleEditSubmit,
  handleDelete,
}) => {
  return (
    <tr key={rowData.id}>
      <td>
        <input type="checkbox" />
      </td>
      <td>
        {editingUserId === rowData.id ? (
          <input
            className="input-editSave"
            type="text"
            name="name"
            value={editFormData.name}
            onChange={handleEditFormChange}
          />
        ) : (
          rowData.name
        )}
      </td>
      <td>
        {editingUserId === rowData.id ? (
          <input
            className="input-editSave"
            type="text"
            name="email"
            value={editFormData.email}
            onChange={handleEditFormChange}
          />
        ) : (
          rowData.email
        )}
      </td>
      <td>
        {editingUserId === rowData.id ? (
          <input
            className="input-editSave"
            type="text"
            name="role"
            value={editFormData.role}
            onChange={handleEditFormChange}
          />
        ) : (
          rowData.role
        )}
      </td>
      <td className="iconSpace">
        {editingUserId === rowData.id ? (
          <FaRegSave
            className="edit-icon"
            onClick={() => handleEditSubmit(rowData.id)}
          />
        ) : (
          <>
            <FaRegEdit
              className="edit-icon"
              onClick={() => handleEdit(rowData.id)}
            />
            <AiOutlineDelete
              className="delete-icon"
              onClick={() => handleDelete(rowData.id)}
            />
          </>
        )}
      </td>
    </tr>
  );
};
export default UserTableRow;
