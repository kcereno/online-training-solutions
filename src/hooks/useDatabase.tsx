// Simulates interacting with database
import { useCallback } from "react";
import { DUMMY_DATA, deleteUser, addUser, updateUser } from "../data/DUMMY_DB";
import { User } from "../data/types";

const useDatabase = () => {
  const fetchUser = (userId: string) =>
    DUMMY_DATA.find((user) => user.info.id === userId);

  // Fetches users by id present in passed in array
  const fetchUsers = useCallback((users: string[]) => {
    let results: User[] = [];

    users.forEach((userId) => {
      const foundUser = DUMMY_DATA.find((user) => user.info.id === userId);
      results.push(foundUser!);
    });
    return results;
  }, []);

  // Validates user email and password
  const validateUser = (email: string, password: string) =>
    DUMMY_DATA.find(
      (user) => user.info.email === email && user.info.password === password
    );

  return {
    validateUser,
    addUser,
    deleteUserFromDB: deleteUser,
    fetchUsers,
    fetchUser,
    updateDBUser: updateUser,
    userDB: DUMMY_DATA,
  };
};

export default useDatabase;

// addUser, deleteUser
