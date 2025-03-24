import React, { useState } from "react";
import { User } from "../types";
import "../styles/UserModal.css";

interface UserModalProps {
  user: User;
  isEditing: boolean;
  onClose: () => void;
  onConfirm: (updatedUser: User) => void;
}

const EditUserModal: React.FC<UserModalProps> = ({
  user,
  isEditing,
  onClose,
  onConfirm,
}) => {
  const [editedUser, setEditedUser] = useState<User>({ ...user });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>{isEditing ? "Edit User" : "New User"}</h3>

        <div className="input-group">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={editedUser.firstName}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={editedUser.lastName}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label>Group Name</label>
          <input
            type="text"
            name="groupName"
            value={editedUser.groupName}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label>Role</label>
          <input
            type="text"
            name="role"
            value={editedUser.role}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label>Expected Salary</label>
          <input
            type="number"
            name="expectedSalary"
            value={editedUser.expectedSalary}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label>Expected Date of Defense</label>
          <input
            type="date"
            name="expectedDateOfDefense"
            value={editedUser.expectedDateOfDefense}
            onChange={handleChange}
          />
        </div>

        <div className="modal-buttons">
          <button
            className="confirm-button"
            onClick={() => onConfirm(editedUser)}
          >
            Confirm
          </button>
          <button className="cancel-button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditUserModal;
