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
    const newSet: Set = { weight: +weight, reps: +reps };

    const todaysHistoryEntry = (activeUser as Client).trainingPlan.history.find(
      (entry) => isToday(entry.date)
    );

    let updatedHistory: HistoryEntry[] = [
      ...(activeUser as Client).trainingPlan.history,
    ];

    // Add a new HistoryEnty if there isn't one
    if (!todaysHistoryEntry) {
      const newHistoryEntry: HistoryEntry = {
        date: today,
        data: [],
      };
      updatedHistory = [...updatedHistory, newHistoryEntry];
    }

    // At this point, there will always be a an entry for today

    // Iterate through History.
    //    If current entry is todays
    //      Check if current entry.data has an existing exercise data set
    //        If not, create one and add to entry.data array
    //      Iterate through current entry.data
    //        if current entryData.exercise == exercise, return entryData.sets [existing data plus newSet]
    //        if not, return entry.data

    //    If current entry is not today
    //      return entry





    const updatedUser: Client = {
      ...(activeUser as Client),
      trainingPlan: {
        ...(activeUser as Client).trainingPlan,
        history: updatedHistory,
      },
    };

    updateUser(updatedUser);
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
