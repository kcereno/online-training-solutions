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

  const fetchTodaysWorkoutEntries = (date: Date) => {};

  //  ADD SET

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

  const fetchTodaysHistoryEntry = (history: HistoryEntry[]) =>
    history.find(
      (historyEntry: HistoryEntry) =>
        historyEntry.date.getTime() === today.getTime()
    )?.data;

  return { fetchTodaysWorkoutEntries, addSetToLog, fetchTodaysHistoryEntry };
};
export default useClientActions;
