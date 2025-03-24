export const useDeleteUser = async (userId: string) => {
  const response = await fetch(`http://localhost:3000/api/users/${userId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  if (!response.ok) {
    console.error("Error:", data?.message);
    return { message: `Error: ${data.message}`, status: response.status };
  }
  console.log(data?.message);
  return { message: data?.message, status: 200 };
};
