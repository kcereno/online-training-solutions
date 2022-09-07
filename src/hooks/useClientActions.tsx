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

  const fetchTodaysWorkoutEntries = (date: Date) => {};

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
    console.log("useClientActions ~ updatedHistory", updatedHistory);

    if (!todaysHistoryEntry) {
      const newHistoryEntry: HistoryEntry = {
        date: today,
        data: [],
      };

      updatedHistory = [...updatedHistory, newHistoryEntry];
    }
    // At this point, there will always be a an entry for today

    updatedHistory = updatedHistory.map((historyEntry: HistoryEntry) => {
      if (isToday(historyEntry.date)) {
        // check if current historyEntry has matching exercise data
        const historyEntryHasExistingExerciseData = historyEntry.data.find(
          (historyEntryData: HistoryEntryData) =>
            historyEntryData.exercise === exercise
        );

        let updatedHistoryEntry: HistoryEntry = { ...historyEntry };

        // if not, create one and add to current history entry
        if (!historyEntryHasExistingExerciseData) {
          const newHistoryEntryData: HistoryEntryData = { exercise, sets: [] };
          // Add to current HistoryEntry
          updatedHistoryEntry = {
            ...updatedHistoryEntry,
            data: [...updatedHistoryEntry.data, newHistoryEntryData],
          };
        }

        //TODO: iterate through data, once at the matching exercise, add to current set

        // AT THIS POINT, THERE WILL ALWAYS BE MATCHING EXERCISE DATA in the current entry
        // ADD SET TO MATCHING EXERCISE

        // DO NOT CHANGE BELOW
      }

      // Default return if current iteration is not todays entry
      return historyEntry;
    });

    // DO NOT CHANGE ANYHTING BELOW

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
  ) => {};

  return {
    fetchTodaysWorkoutEntries,
    addSetToLog,
    fetchTodaysHistoryEntry,
    deleteSetFromLog,
  };
};

export default useClientActions;
