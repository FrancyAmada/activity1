import React, { useState } from "react";
import { User } from "../types";
import UserModal from "./UserModal";
import "../styles/UserCard.css";

interface UserCardProps {
  user: User;
  onUpdate: (updatedUser: User) => void;
  onDelete: (userId: string) => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="user-card">
      <div className="user-card-header">
        <h2 className="user-card-title">
          {user.lastName}, {user.firstName}
        </h2>
        <div className="user-card-actions">
          <button className="edit-button" onClick={() => setIsEditing(true)}>
            Edit
          </button>
          <button className="delete-button" onClick={() => onDelete(user.id)}>
            Delete
          </button>
        </div>
      </div>
      <table className="user-table">
        <tbody>
          <tr>
            <td>Group Name:</td>
            <td>{user.groupName}</td>
          </tr>
          <tr>
            <td>Role:</td>
            <td>{user.role}</td>
          </tr>
          <tr>
            <td>Expected Salary:</td>
            <td>${user.expectedSalary.toLocaleString()}</td>
          </tr>
          <tr>
            <td>Expected Date of Defense:</td>
            <td>{new Date(user.expectedDateOfDefense).toLocaleDateString()}</td>
          </tr>
        </tbody>
      </table>

      {isEditing && (
        <UserModal
          user={user}
          isEditing={true}
          onClose={() => setIsEditing(false)}
          onConfirm={(updatedUser) => {
            onUpdate(updatedUser);
            setIsEditing(false);
          }}
        />
      )}
    </div>
  );
};

export default UserCard;
