import { useEffect, useState } from "react";
import { DUMMY_DATA } from "../../data/DUMMY_DB";
import { UserType } from "../../data/types";
import DatabaseContext, { DatabaseContextInterface } from "./database-context";

type Props = {
  children?: React.ReactNode;
};

const DatabaseProvider = ({ children }: Props) => {
  const [database, setDatabase] = useState<UserType[]>([]);

  useEffect(() => {
    setDatabase(DUMMY_DATA);
  }, []);

  const updateDatabase = (updatedDatabase: UserType[]) => {
    setDatabase(updatedDatabase);
  };

  // USER CRUD

  const addUser = (newUser: UserType) => {
    const updatedDatabase = [...database, newUser];
    updateDatabase(updatedDatabase);
  };

  const fetchUser = (userId: string): UserType | undefined =>
    database.find((user) => user.info.id === userId);

  const updateUser = (updatedUser: UserType) => {
    const updatedDatabase = [...database];

    const updatedUserIndex = database.findIndex(
      (user) => user.info.id === updatedUser.info.id
    );

    updatedDatabase[updatedUserIndex] = updatedUser;
    updateDatabase(updatedDatabase);
  };

  const deleteUser = (userId: string) => {
    const updatedDatabase = database.filter((user) => user.info.id !== userId);
    updateDatabase(updatedDatabase);
  };

  const DatabaseContextValue: DatabaseContextInterface = {
    database,
    addUser,
    fetchUser,
    deleteUser,
    updateUser,
  };

  return (
    <DatabaseContext.Provider value={DatabaseContextValue}>
      {children}
    </DatabaseContext.Provider>
  );
};

export default DatabaseProvider;
