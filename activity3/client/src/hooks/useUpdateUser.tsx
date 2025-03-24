interface UpdateData {
  firstName?: string;
  lastName?: string;
  groupName?: string;
  role?: string;
  expectedSalary?: number;
  expectedDateOfDefense?: string;
}

export const useUpdateUser = async (userId: string, updateData: UpdateData) => {
  const response = await fetch(`http://localhost:3000/api/users/${userId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateData),
  });
  const data = await response.json();
  if (!response.ok) {
    console.error("Error:", data?.message);
    return { message: `Error: ${data.message}`, status: response.status };
  }
  console.log(data?.message);
  return { message: data.message, status: 200 };
};
