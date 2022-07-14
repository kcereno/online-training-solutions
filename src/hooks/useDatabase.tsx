// Simulates fetching data from database
import { DUMMY_DATA } from "../data/DUMMY_DB";
import { Client } from "../data/interfaces";

const useDatabase = () => {
  const findUser = (email: string, password: string) => {
    return DUMMY_DATA.find(
      (user) => user.info.email === email && user.info.password === password
    );
  };

  const fetchClients = (clientIds: string[]) => {
    console.log("useDatabase: Clients fetched");
    let result: Client[] = [];

    clientIds.forEach((clientId) => {
      const foundClient = DUMMY_DATA.find((user) => user.info.id === clientId);
      result.push(foundClient as Client);
    });

    return result;
  };

  return { findUser, fetchClients };
};

export default useDatabase;
