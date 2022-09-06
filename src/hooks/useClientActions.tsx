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

    //create shallowCopy of active user. Save as updatedUser
    let updatedUser = { ...activeUser as Client }

    // Check if there is a HistoryEntry for today
    const todaysHistoryEntry = updatedUser.trainingPlan.history.find((entry: HistoryEntry) => isToday(entry.date))
    console.log("todaysHistoryEntry", todaysHistoryEntry)


    // If todaysHistoryEntry DOES NOT EXIST
    //Create one and add it to activeUser.trainingPlan.history
    if (!todaysHistoryEntry) {
      const newHistoryEntry: HistoryEntry = { date: today, data: [] }
      updatedUser.trainingPlan.history.push(newHistoryEntry)
    }


    // At this point, there will ALWAYS be a todaysHistoryEntry
    // Is there an HistoryEntryData for the exercise?

    // HistoryEntryData DOES NOT exist
    //Create historyData for that exercise

    // HistoryEntryData Exists
    // Add set to historyEntryData.sets


    console.log('updatedUser', updatedUser)











    // const updatedUser: Client = {
    //   ...(activeUser as Client),
    //   trainingPlan: {
    //     ...(activeUser as Client).trainingPlan,
    //     history: updatedHistory,
    //   },
    // };

    // updateUser(updatedUser);
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
