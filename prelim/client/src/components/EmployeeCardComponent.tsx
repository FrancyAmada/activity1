import React from "react";

type EmployeeCardProps = {
  id: string;
  name: string;
  role: string;
  salary: number;
};

const EmployeeCard: React.FC<EmployeeCardProps> = ({
  id,
  name,
  role,
  salary,
}) => {
  return (
    <div className="employee-card">
      <div className="employee-card-content">{id}</div>
      <div className="employee-card-content">{name}</div>
      <div className="employee-card-content">{role}</div>
      <div className="employee-card-content">{salary}</div>
    </div>
  );
};

export default EmployeeCard;
