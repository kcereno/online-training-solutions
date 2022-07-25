// Simulates interacting with database
// Performs CRUD operations on database itself

import { useCallback, useContext } from "react";
import { deleteUser, addUser, updateUser } from "../data/DUMMY_DB";
import { User } from "../data/types";
import DatabaseContext from "../store/database-context";

const useDatabase = () => {
  const { database, updateDatabase } = useContext(DatabaseContext);

  const fetchUser = (userId: string) =>
    database.find((user) => user.info.id === userId);

  // Fetches users by id present in passed in array
  const fetchUsers = useCallback(
    (users: string[]) => {
      let results: User[] = [];

      users.forEach((userId) => {
        const foundUser = database.find((user) => user.info.id === userId);
        results.push(foundUser!);
      });
      return results;
    },
    [database]
  );

  // Validates user email and password
  const validateUser = (email: string, password: string) =>
    database.find(
      (user) => user.info.email === email && user.info.password === password
    );

  return {
    validateUser,
    addUserToDB: addUser,
    deleteUserFromDB: deleteUser,
    fetchUsers,
    fetchUser,
    updateDBUser: updateUser,
    userDB: database,
  };
};

export default useDatabase;

// addUser, deleteUser
