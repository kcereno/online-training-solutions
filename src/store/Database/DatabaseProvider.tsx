import { useState } from "react";
import { DUMMY_DATA } from "../../data/DUMMY_DB";
import { UserType } from "../../data/types";
import DatabaseContext, { DatabaseContextInterface } from "./database-context";

type Props = {
  children?: React.ReactNode;
};

const DatabaseProvider = ({ children }: Props) => {
  const [database, setDatabase] = useState<UserType[]>(DUMMY_DATA);
  console.log("DatabaseProvider ~ database", database);

  const fetchUser = (userId: string): UserType | undefined =>
    database.find((user) => user.info.id === userId);

  const deleteUser = (userId: string) => {
    const updatedDatabase = database.filter((user) => user.info.id !== userId);
    setDatabase(updatedDatabase);
  };

  const addUser = (user: UserType) => {
    const updatedDatabase = [...database, user];
    setDatabase(updatedDatabase);
  };

  const updateUser = (updatedUser: UserType) => {
    console.log("pinged");
    const userIndex = database.findIndex(
      (entry) => entry.info.id === updatedUser.info.id
    );
    const updatedDb = [...database];
    updatedDb[userIndex] = updatedUser;
    setDatabase(updatedDb);
  };

  const DatabaseContextValue: DatabaseContextInterface = {
    database,
    fetchUser,
    updateDatabase: setDatabase,
    deleteUser,
    addUser,
    updateUser,
  };

  return (
    <DatabaseContext.Provider value={DatabaseContextValue}>
      {children}
    </DatabaseContext.Provider>
  );
};

export default DatabaseProvider;
