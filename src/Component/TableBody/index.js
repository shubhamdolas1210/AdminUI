import UserTableRow from "../UserTableRow";

const TableBody = ({
  currentRows,
  editingUserId,
  editFormData,
  handleEdit,
  handleEditFormChange,
  handleEditSubmit,
  handleDelete,
  handleCheckboxChange,
  selectedRows,
}) => {
  return (
    <tbody>
      {currentRows.map((rowData) => (
        <UserTableRow
          key={rowData.id}
          rowData={rowData}
          editingUserId={editingUserId}
          editFormData={editFormData}
          handleEdit={handleEdit}
          handleEditFormChange={handleEditFormChange}
          handleEditSubmit={handleEditSubmit}
          handleDelete={handleDelete}
          handleCheckboxChange={handleCheckboxChange}
          isSelected={selectedRows.includes(rowData.id)}
        />
      ))}
    </tbody>
  );
};

export default TableBody;
