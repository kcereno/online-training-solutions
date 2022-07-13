// Simulates fetching data from database
import { DUMMY_DATA } from "../data/DUMMY_DB";

const useDatabase = () => {
  const findUser = (email: string, password: string) => {
    return DUMMY_DATA.find(
      (user) => user.info.email === email && user.info.password === password
    );
  };

  return { findUser };
};

export default useDatabase;
