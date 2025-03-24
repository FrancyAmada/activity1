import { NewUser } from "../types";

const validateUserData = (newUser: NewUser) => {
  if (newUser.firstName.length < 3) {
    return {
      ok: false,
      message: "Invalid First Name, must be 3 or more characters.",
    };
  }
  if (newUser.lastName.length < 3) {
    return {
      ok: false,
      message: "Invalid Last Name, must be 3 or more characters.",
    };
  }
  if (newUser.groupName.length < 3) {
    return {
      ok: false,
      message: "Invalid Group Name, must be 3 or more characters.",
    };
  }
  if (newUser.expectedSalary < 0) {
    return {
      ok: false,
      message: "Invalid Expected Salary, must be 0 or a positive number.",
    };
  }
  if (newUser.expectedDateOfDefense === "") {
    return { ok: false, message: "Invalid Date, must not be empty" };
  }
  return { ok: true, message: "Valid User Data!" };
};

export default validateUserData;
