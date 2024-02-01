import "./App.css";
import UserDataTable from "./Component/UserDataTable";
import { useEffect, useState } from "react";
import axios from "axios";

const API =
  "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API);
        console.log(response);
        setData(response.data);
      } catch (error) {
        throw new Error("Error fetching data");
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <UserDataTable userDetails={data} />
    </div>
  );
}
export default App;
