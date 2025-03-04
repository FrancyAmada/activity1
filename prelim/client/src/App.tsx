import { useEffect, useState } from "react";
import "./App.css";
import EmployeeTable from "./components/EmployeeTableComponent";
import { Employee } from "./types";

function App() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    retrieveEmployees();
  }, []);

  const retrieveEmployees = async () => {
    const response = await fetch("http://localhost:3000/api/get");
    const data = await response.json();
    setData(data);
  };

  const employees = data?.employees;

  return (
    <div className="main-content">
      <div className="tables">
        <EmployeeTable
          title={"All Employees"}
          employees={employees}
        ></EmployeeTable>
        <EmployeeTable title={"Senior"} employees={employees}></EmployeeTable>
        <EmployeeTable title={"Junior"} employees={employees}></EmployeeTable>
      </div>
    </div>
  );
}

export default App;
