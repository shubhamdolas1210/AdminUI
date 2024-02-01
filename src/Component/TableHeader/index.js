const TableHeader = ({ isHeadingCheckboxChecked, onHeadingCheckboxChange }) => {
  return (
    <thead>
      <tr>
        <th>
          <input
            type="checkbox"
            checked={isHeadingCheckboxChecked}
            onChange={onHeadingCheckboxChange}
          />
        </th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
