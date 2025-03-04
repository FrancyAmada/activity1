import React, { useState } from "react";
import { Employee } from "../types";
import EmployeeCard from "./EmployeeCardComponent";

type EmployeeTableProps = {
  title: "All Employees" | "Senior" | "Junior";
  employees: Array<Employee>;
};

const EmployeeTable: React.FC<EmployeeTableProps> = ({ title, employees }) => {
  const filterTable = (category: string) => {
    var newDisplayList: Array<Employee> = [];
    employees?.forEach((employee) => {
      if (
        category == "All Employees" ||
        (category == "Senior" && employee.salary >= 50000) ||
        (category == "Junior" && employee.salary < 50000)
      ) {
        newDisplayList.push(employee);
      }
    });
    return newDisplayList;
  };
  var displayedEmployees = filterTable(title);
  return (
    <div className="employee-table">
      <div className="employee-table-label">{title}</div>
      <div className="employee-table-list">
        {displayedEmployees?.map((employee) => {
          return (
            <EmployeeCard
              key={employee.id}
              id={employee.id}
              name={employee.name}
              role={employee.role}
              salary={employee.salary}
            ></EmployeeCard>
          );
        })}
      </div>
    </div>
  );
};

export default EmployeeTable;
