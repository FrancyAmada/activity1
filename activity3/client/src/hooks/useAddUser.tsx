interface NewUserData {
  firstName: string;
  lastName: string;
  groupName: string;
  role: string;
  expectedSalary: number;
  expectedDateOfDefense: string;
}

export const useAddUser = async (newUser: NewUserData) => {
  const response = await fetch("http://localhost:3000/api/users/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...newUser,
    }),
  });
  const data = await response.json();
  if (!response.ok) {
    console.error("Error:", data?.message);
    return { message: `Error: ${response}`, status: response.status };
  }
  console.log("New User:", data?.message);
  return { message: "Successfully Added New User", status: response.status };
};
