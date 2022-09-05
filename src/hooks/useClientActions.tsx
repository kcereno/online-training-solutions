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

    const newHistoryEntry: HistoryEntry = {
      date: today,
      data: [{ exercise, sets: [newSet] }],
    };

    // const (activeUser as Client) = database.find(
    //   (user: UserType) => user.info.id === activeUser?.info.id
    // ) as Client;

    const todaysHistoryEntry = (activeUser as Client).trainingPlan.history.find(
      (entry: HistoryEntry) => entry.date.getTime() === today.getTime()
    );

    let updatedHistory: HistoryEntry[] = [
      ...(activeUser as Client).trainingPlan.history,
      newHistoryEntry,
    ];

    if (todaysHistoryEntry) {
      updatedHistory = (activeUser as Client).trainingPlan.history.map(
        (entry: HistoryEntry) => {
          const updatedEntry = { ...entry };
          // Check if entry is todays entry
          if (isToday(entry.date)) {
            const existingExerciseData = entry.data.find(
              (data: HistoryEntryData) => data.exercise === exercise
            );

            // If exercise data does NOT exist
            updatedEntry.data.push({ exercise, sets: [newSet] });

            if (existingExerciseData) {
              const existingExerciseIndex = entry.data.findIndex(
                (data: HistoryEntryData) => data.exercise === exercise
              );
              updatedEntry.data[existingExerciseIndex].sets.push(newSet);
            }
          }

          return updatedEntry;
        }
      );
    }

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
  ) => {
    console.log("useClientActions ~ historyEntry", historyEntry);
    //fetchLog
    // Use the data to remove the set
    // Store in a shallow copy of the log
    //updated User with the shallow copy

    const exerciseIndex = historyEntry.data.findIndex(
      (entry) => entry.exercise === exercise
    );

    const updatedSetList = historyEntry.data[exerciseIndex].sets.filter(
      (elem, index) => index !== setIndex
    );
    console.log("useClientActions ~ updatedSetList", updatedSetList);
  };

  return {
    fetchTodaysWorkoutEntries,
    addSetToLog,
    fetchTodaysHistoryEntry,
    deleteSetFromLog,
  };
};

export default useClientActions;
