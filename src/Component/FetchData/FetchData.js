import { useEffect, useState } from "react";
import axios from "axios";
import UserDataTable from "../UserDataTable";

const API =
  "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";

const FetchData = () => {
  const fetchCall = async (URL) => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data);
    } catch (er) {
      console.error(er);
    }
  };
  useEffect(() => {
    fetchCall(API);
  }, []);
  return (
    <div>
      <UserDataTable />
    </div>
  );
};
export default FetchData;
