import { useState, useEffect } from "react";
import "./index.css";
import TableHeader from "../TableHeader";
import TableBody from "../TableBody";
import Pagination from "../Pagination";
import Searchbar from "../Searchbar";

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
  const [selectedRows, setSelectedRows] = useState([]);
  const [isHeadingCheckboxChecked, setIsHeadingCheckboxChecked] =
    useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (query) => {
    const lowerCaseQuery = query.toLowerCase();
    const filteredData = userDetails.filter(
      (user) =>
        user.name.toLowerCase().includes(lowerCaseQuery) ||
        user.email.toLowerCase().includes(lowerCaseQuery) ||
        user.role.toLowerCase().includes(lowerCaseQuery)
    );

    setTableData(filteredData);
    setSearchTerm(query);
  };

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

  const handleCheckboxChange = (rowId) => {
    const updatedSelectedRows = [...selectedRows];
    const index = updatedSelectedRows.indexOf(rowId);

    if (index !== -1) {
      updatedSelectedRows.splice(index, 1);
    } else {
      updatedSelectedRows.push(rowId);
    }

    setSelectedRows(updatedSelectedRows);
  };

  const handleDeleteSelected = () => {
    const updatedTableData = tableData.filter(
      (row) => !selectedRows.includes(row.id)
    );

    setTableData(updatedTableData);
    setSelectedRows([]);
  };

  const handleHeadingCheckboxChange = () => {
    setIsHeadingCheckboxChecked(!isHeadingCheckboxChecked);
    const updatedSelectedRows = isHeadingCheckboxChecked
      ? []
      : currentRows.map((row) => row.id);
    setSelectedRows(updatedSelectedRows);
  };

  return (
    <div className="TableData">
      <Searchbar onSearch={handleSearch} />
      <table className="customers">
        <TableHeader
          isHeadingCheckboxChecked={isHeadingCheckboxChecked}
          onHeadingCheckboxChange={handleHeadingCheckboxChange}
        />
        <TableBody
          currentRows={currentRows}
          editingUserId={editingUserId}
          editFormData={editFormData}
          handleEdit={handleEdit}
          handleEditFormChange={handleEditFormChange}
          handleEditSubmit={handleEditSubmit}
          handleDelete={handleDelete}
          handleCheckboxChange={handleCheckboxChange}
          selectedRows={selectedRows}
        />
      </table>
      <Pagination
        totalItems={tableData.length}
        itemsPerPage={rowsPerPage}
        onPageChange={handlePageChange}
      />
      <button className="DeleteSelected-btn" onClick={handleDeleteSelected}>
        Delete Selected
      </button>
    </div>
  );
};

export default UserDataTable;
