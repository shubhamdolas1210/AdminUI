import React, { useState, useEffect } from "react";
import "./index.css";
import UserTableRow from "../UserTableRow";
import Pagination from "../Pagination";

const UserDataTable = ({ userDetails }) => {
  const rowsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [tableData, setTableData] = useState(userDetails);
  const [editingUserId, setEditingUserId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    name: "",
    email: "",
    role: "",
  });

  useEffect(() => {
    setTableData(userDetails);
  }, [userDetails]);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = tableData.slice(indexOfFirstRow, indexOfLastRow);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    setEditingUserId(null);
  };

  const handleDelete = (id) => {
    const updatedTableData = tableData.filter((row) => row.id !== id);
    setTableData(updatedTableData);
    setEditingUserId(null);
    console.log("Deleted Row with ID:", id);
  };

  const handleEdit = (id) => {
    setEditingUserId(id);
    const userToEdit = tableData.find((row) => row.id === id);
    setEditFormData({
      name: userToEdit.name,
      email: userToEdit.email,
      role: userToEdit.role,
    });
  };

  const handleEditFormChange = (e) => {
    setEditFormData({
      ...editFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditSubmit = (id) => {
    const updatedTableData = tableData.map((row) =>
      row.id === id ? { ...row, ...editFormData } : row
    );
    setTableData(updatedTableData);
    setEditingUserId(null);
    console.log("Updated Row with ID:", id);
  };

  return (
    <div className="TableData">
      <table className="customers">
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
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
            />
          ))}
        </tbody>
      </table>
      <Pagination
        totalItems={tableData.length}
        itemsPerPage={rowsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default UserDataTable;
