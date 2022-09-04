import { useContext } from "react";
import { today, isToday } from "../data/functions";
import {
  Client,
  HistoryEntryData,
  HistoryEntry,
  Set,
} from "../data/interfaces";
import { UserType } from "../data/types";
import DatabaseContext from "../store/Database/database-context";
import UserContext from "../store/User/user-context";

const useClientActions = () => {
  const { activeUser, updateUser } = useContext(UserContext);
  const { database } = useContext(DatabaseContext);

  const fetchTodaysWorkoutEntries = (date: Date) => {};

  const addSetToLog = (
    exercise: string,
    weight: number,
    reps: number
  ): void => {
    const newSet: Set = { weight: +weight, reps: +reps };

    const fetchedClient = database.find(
      (user: UserType) => user.info.id === activeUser?.info.id
    ) as Client;

    const todaysHistoryEntry = fetchedClient.trainingPlan.history.find(
      (entry: HistoryEntry) => entry.date.getTime() === today.getTime()
    );

    let updatedHistory: HistoryEntry[] = [
      ...fetchedClient.trainingPlan.history,
    ];

    if (!todaysHistoryEntry) {
      const newHistoryEntry: HistoryEntry = {
        date: today,
        data: [{ exercise, sets: [newSet] }],
      };
      updatedHistory = [...fetchedClient.trainingPlan.history, newHistoryEntry];
    } else {
      updatedHistory = fetchedClient.trainingPlan.history.map(
        (entry: HistoryEntry) => {
          let updatedEntry: HistoryEntry = { ...entry };

          if (isToday(entry.date)) {
            entry.data.forEach((data: HistoryEntryData) => {
              if (data.exercise === exercise) {
                data.sets.push(newSet);
              }
            });
          }
          return updatedEntry;
        }
      );
    }

    const updatedUser: Client = {
      ...fetchedClient,
      trainingPlan: { ...fetchedClient.trainingPlan, history: updatedHistory },
    };

    updateUser(updatedUser);
  };

  return { fetchTodaysWorkoutEntries, addSetToLog };
};
export default useClientActions;
