import { useContext } from "react";
import { today, isToday } from "../data/functions";
import {
  Client,
  HistoryEntryData,
  HistoryEntry,
  Set,
} from "../data/interfaces";
import DatabaseContext from "../store/Database/database-context";
import UserContext from "../store/User/user-context";

const useClientActions = () => {
  const { activeUser, updateUser } = useContext(UserContext);
  const { database } = useContext(DatabaseContext);

  // FETCH FUNCTIONS
  const fetchTodaysHistoryEntry = (history: HistoryEntry[]) =>
    history.find(
      (historyEntry: HistoryEntry) =>
        historyEntry.date.getTime() === today.getTime()
    );

  const fetchTodaysWorkoutEntries = (date: Date) => { };

  //  SET FUNCTIONS
  const addSetToLog = (
    exercise: string,
    weight: number,
    reps: number
  ): void => {

    const newSet: Set = { weight: +weight, reps: +reps }

    const todaysHistoryEntry = (activeUser as Client).trainingPlan.history.find(entry => isToday(entry.date))

    if (!todaysHistoryEntry) {
      const newHistoryEntry: HistoryEntry = { date: today, data: [{ exercise, sets: [newSet] }] }
      const updatedUser: Client = { ...(activeUser as Client), trainingPlan: { ...(activeUser as Client).trainingPlan, history: [...(activeUser as Client).trainingPlan.history, newHistoryEntry] } }

      updateUser(updatedUser);
    } else {
      console.log("todaysHistoryEntry", todaysHistoryEntry)
      const updatedTodaysHistoryEntryData: HistoryEntryData[] = []
      const updatedTodaysHistoryEntry = { ...todaysHistoryEntry, data: updatedTodaysHistoryEntryData }
      console.log('updatedTodaysHistoryEntry', updatedTodaysHistoryEntry)

    }








  };

  const deleteSetFromLog = (
    historyEntry: HistoryEntry,
    exercise: string,
    setIndex: number
  ) => { };

  return {
    fetchTodaysWorkoutEntries,
    addSetToLog,
    fetchTodaysHistoryEntry,
    deleteSetFromLog,
  };
};

export default useClientActions;
