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
      (entry: HistoryEntry) => entry.date.getTime() === today.getTime()
    );

    let updatedHistory: HistoryEntry[] = [
      ...(activeUser as Client).trainingPlan.history,
    ];

    if (!todaysHistoryEntry) {
      console.log("no todaysHistoryEntry");
      const newHistoryEntry: HistoryEntry = { date: today, data: [] };
      updatedHistory.push(newHistoryEntry);
      console.log(
        "useClientActions ~ updatedHistory with added etnry with empty data",
        updatedHistory
      );
    }

    updatedHistory = updatedHistory.map((entry: HistoryEntry) => {
      if (isToday(entry.date)) {
        // IM UP TO HERE
      }

      return entry;
    });

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
  ) => {};

  return {
    fetchTodaysWorkoutEntries,
    addSetToLog,
    fetchTodaysHistoryEntry,
    deleteSetFromLog,
  };
};

export default useClientActions;
