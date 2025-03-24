import { Router } from "express";
import { v4 as uuidv4 } from "uuid";

const router = Router();

interface User {
  id: string;
  firstName: string;
  lastName: string;
  groupName: string;
  role: string;
  expectedSalary: number;
  expectedDateOfDefense: string;
}

// Test Values //
// {
//   id: "185e29f3-ecd1-454a-9a04-9ccccd6a80b2",
//   firstName: "Jane",
//   lastName: "Dao",
//   groupName: "Poms",
//   role: "Member",
//   expectedSalary: 40000,
//   expectedDateOfDefense: "2025-04-28",
// },

// Mock Database //
var users: Array<User> = [
  {
    id: "185e29f3-ecd1-454a-9a04-9ccccd6a80b2",
    firstName: "Jane",
    lastName: "Dao",
    groupName: "Poms",
    role: "Member",
    expectedSalary: 40000,
    expectedDateOfDefense: "2025-04-28",
  },
];

router.get("/", (req, res) => {
  console.log("Sent all users");
  res.send({ users });
});

router.get("/:id", (req, res) => {
  console.log(req.params.id);
  const { id } = req.params;
  const item = users.find((user) => user.id === id);

  if (!item) {
    res.status(404).json({ 404: "Item not found" });
  } else {
    res.status(200).json({ users: [item] });
  }
});

router.post("/", (req, res) => {
  const user = req.body;
  const newUser = { ...user };
  console.log(newUser.expectedDateOfDefense);
  newUser.id = uuidv4();
  users.push(newUser);

  res
    .status(200)
    .json({ message: `${user.first_name} has been added to the Database` });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const item = users.find((user) => user.id === id);
  if (item) {
    users = users.filter((user) => user.id !== id);
    res
      .status(200)
      .json({ message: `${id} deleted successfully from database` });
  } else {
    res.status(404).json({ message: `${id} is not found in database` });
  }
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const {
    firstName,
    lastName,
    groupName,
    role,
    expectedSalary,
    expectedDateOfDefense,
  } = req.body;

  const user = users.find((user) => user.id === id);

  if (user) {
    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (groupName) user.groupName = groupName;
    if (role) user.role = role;
    if (expectedSalary) user.expectedSalary = expectedSalary;
    if (expectedDateOfDefense)
      user.expectedDateOfDefense = expectedDateOfDefense;

    res.status(200).json({ message: `User with the ${id} has been updated` });
  } else {
    res.status(404).json({ message: `User with the ${id} not found` });
  }
});

export default router;
