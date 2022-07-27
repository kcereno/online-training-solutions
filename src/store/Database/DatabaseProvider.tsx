import { useState } from "react";
import { DUMMY_DATA } from "../../data/DUMMY_DB";
import { UserType } from "../../data/types";
import DatabaseContext, { DatabaseContextInterface } from "./database-context";

type Props = {
  children?: React.ReactNode;
};

const DatabaseProvider = ({ children }: Props) => {
  const [database, setDatabase] = useState<UserType[]>(DUMMY_DATA);

  const validateUser = (email: string, password: string) =>
    database.find(
      (user) => user.info.email === email && user.info.password === password
    );

  const deleteUser = (userId: string) => {
    const updatedDatabase = database.filter((user) => user.info.id !== userId);
    setDatabase(updatedDatabase);
  };

  const addUser = (user: UserType) => {
    const updatedDatabase = [...database, user];
    setDatabase(updatedDatabase);
  };

  const DatabaseContextValue: DatabaseContextInterface = {
    database,
    updateDatabase: setDatabase,
    deleteUser,
    addUser,
    validateUser,
  };

  return (
    <DatabaseContext.Provider value={DatabaseContextValue}>
      {children}
    </DatabaseContext.Provider>
  );
};

export default DatabaseProvider;
