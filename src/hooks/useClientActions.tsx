import { useContext } from "react";
import { convertDate, today } from "../data/functions";
import {
  Client,
  HistoryEntryData,
  HistoryEntry,
  Set,
} from "../data/interfaces";
import { UserType } from "../data/types";
import DatabaseContext from "../store/Database/database-context";
import UserContext from "../store/User/user-context";
import { isToday } from "../data/functions";
import { log } from "console";

const useClientActions = () => {
  const { activeUser } = useContext(UserContext);
  const { database, fetchUser } = useContext(DatabaseContext);
  const { updateUser } = useContext(UserContext)

  const fetchTodaysWorkoutEntries = (date: Date) => {
    // const foundLog = (activeUser as Client).trainingPlan.log.find(
    //   (data) => data.date.getTime() === date.getTime()
    // );
    // return foundLog?.entry;
  };

  const addSetToLog = (
    exercise: string,
    weight: number,
    reps: number
  ): void => {

    const newSet: Set = { weight: +weight, reps: +reps }
    const today = convertDate(new Date());

    const fetchedClient = fetchUser(activeUser!.info.id) as Client;

    const todaysEntry: HistoryEntry | undefined = fetchedClient.trainingPlan.history.find((entry: HistoryEntry) => isToday(entry.date))
    console.log("todaysEntry", todaysEntry)

    if (!todaysEntry) {
      const newEntry: HistoryEntry = { date: today, data: [{ exercise, sets: [newSet] }] }
      const updatedClient: Client = { ...fetchedClient, trainingPlan: { ...fetchedClient.trainingPlan, history: [...fetchedClient.trainingPlan.history, newEntry] } }
      updateUser(updatedClient)
    } else {
      const updatedHistory: HistoryEntry[] = fetchedClient.trainingPlan.history.map((entry: HistoryEntry) => {
        if (isToday(entry.date)) {
          entry.data.map((data: HistoryEntryData) => {
            if (data.exercise === exercise) {
              data.sets.push(newSet)
            }
          })
        }
        return entry
      })

      const updatedClient: Client = { ...fetchedClient, trainingPlan: { ...fetchedClient.trainingPlan, history: updatedHistory } }
      updateUser(updatedClient)
      console.log("updatedHistory", updatedHistory)

      // console.log(updatedTodayEntry)
    }


    // make a shallow copy of the user to be updated.
    //check if there is a historyEntry for today
    //if not, create one and add it into client.trainingPlan.history
  };

  return { fetchTodaysWorkoutEntries, addSetToLog };
};
export default useClientActions;
