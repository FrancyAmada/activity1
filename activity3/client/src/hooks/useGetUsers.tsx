export const useGetUsers = async () => {
  const response = await fetch("http://localhost:3000/api/users/");
  const data = await response.json();
  console.log(data!.users);
  return {
    message: "Successfully retrieved all users.",
    users: data!.users,
    status: response.status,
  };
};

export const useGetUser = async (userId: string) => {
  const response = await fetch(`http://localhost:3000/api/users/${userId}`);
  if (response!.status === 200) {
    const data = await response!.json();
    console.log(data!.users);
    return {
      message: `Successfully retrieved user ${userId}.`,
      user: data!.users,
      status: response.status,
    };
  } else {
    console.log(response.body);
    return {
      message: "Error retrieving user.",
      user: undefined,
      status: response.status,
    };
  }
};
