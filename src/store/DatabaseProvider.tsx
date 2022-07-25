import { useState } from "react";
import { DUMMY_DATA } from "../data/DUMMY_DB";
import { User } from "../data/types";
import DatabaseContext, { DatabaseContextInterface } from "./database-context";

type Props = {
  children?: React.ReactNode;
};

const DatabaseProvider = ({ children }: Props) => {
  const [database, setDatabase] = useState<User[]>(DUMMY_DATA);

  const DatabaseContextValue: DatabaseContextInterface = {
    database,
    updateDatabase: setDatabase,
  };

  return (
    <DatabaseContext.Provider value={DatabaseContextValue}>
      {children}
    </DatabaseContext.Provider>
  );
};

export default DatabaseProvider;
