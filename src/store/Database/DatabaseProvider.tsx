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

  const DatabaseContextValue: DatabaseContextInterface = {
    database,
    updateDatabase,
  };

  return (
    <DatabaseContext.Provider value={DatabaseContextValue}>
      {children}
    </DatabaseContext.Provider>
  );
};

export default DatabaseProvider;
