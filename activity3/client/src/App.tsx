import { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/ButtonComponent";
import { NewUser, User } from "./types";
import { useGetUser, useGetUsers } from "./hooks/useGetUsers";
import { useAddUser } from "./hooks/useAddUser";
import { useDeleteUser } from "./hooks/useDeleteUser";
import { useUpdateUser } from "./hooks/useUpdateUser";
import UserCard from "./components/UserCardComponent";
import UserModal from "./components/UserModal";
import validateUserData from "./hooks/validateNewUserData";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [isAddingUser, setIsAddingUser] = useState<boolean>(false);

  const handleGetUsers = async () => {
    const res = await useGetUsers();
    // console.log(res.message);
    setUsers(res.users);
  };

  const handleAddUser = async (userData: NewUser) => {
    const validation = validateUserData(userData);
    if (validation.ok) {
      userData.expectedSalary = Number(userData.expectedSalary);
      const res = await useAddUser(userData);
      // console.log(res.message);
      if (res.status === 200) {
        handleGetUsers();
      }
    } else {
      console.log(validation.message);
    }
  };

  const handleGetUser = async () => {
    const userId = "185e29f3-ecd1-454a-9a04-9ccccd6a80b2";
    const res = await useGetUser(userId);
    // console.log(res.message);
    if (res.status === 200) {
      setUsers(res.user);
    }
  };

  const handleDeleteUser = async (userId: string) => {
    const res = await useDeleteUser(userId);
    // console.log(res.message);
    if (res.status === 200) {
      handleGetUsers();
    }
  };

  const handleUpdateUser = async (newUserData: User) => {
    const res = await useUpdateUser(newUserData.id, { ...newUserData });
    // console.log(res.message);
    if (res.status === 200) {
      handleGetUsers();
    }
  };

  useEffect(() => {
    handleGetUsers();
  }, []);

  return (
    <>
      <div className="buttons">
        <Button
          label="Retrieve Users"
          onClick={() => handleGetUsers()}
        ></Button>
        <Button label="Add User" onClick={() => setIsAddingUser(true)}></Button>
        <Button
          label="Get Specific User"
          onClick={() => handleGetUser()}
        ></Button>
      </div>

      <div className="user-card-grid">
        {users ? (
          users.map((user: User) => (
            <UserCard
              key={user.id}
              user={user}
              onUpdate={(user) => handleUpdateUser(user)}
              onDelete={(user) => handleDeleteUser(user)}
            />
          ))
        ) : (
          <p>No users available</p>
        )}
      </div>

      {isAddingUser && (
        <UserModal
          user={{
            id: "",
            firstName: "",
            lastName: "",
            groupName: "",
            role: "",
            expectedSalary: 0,
            expectedDateOfDefense: "",
          }}
          isEditing={false}
          onClose={() => setIsAddingUser(false)}
          onConfirm={(newUser: NewUser) => {
            handleAddUser(newUser);
            setIsAddingUser(false);
          }}
        />
      )}
    </>
  );
}

export default App;
