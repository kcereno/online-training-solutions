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

    const todaysHistoryEntry = fetchTodaysHistoryEntry((activeUser as Client).trainingPlan.history)

    let updatedHistory: HistoryEntry[] = [
      ...(activeUser as Client).trainingPlan.history,
    ];

    if (!todaysHistoryEntry) {
      updatedHistory = [...updatedHistory, {
        date: today,
        data: [],
      }];
    }

    updatedHistory = updatedHistory.map(entry => {
      if (isToday(entry.date)) {
        let updatedEntry = { ...entry }
        
        const hasExistingExerciseData = entry.data.find(data => data.exercise === exercise)

        if (!hasExistingExerciseData) updatedEntry = { ...updatedEntry, data: [...entry.data, { exercise, sets: [] }] }

        const updatedEntryData = updatedEntry.data.map(data => {
          if (data.exercise === exercise) return { exercise, sets: [...data.sets, { weight: +weight, reps: +reps }] }

          return data
        })
        return { ...updatedEntry, data: updatedEntryData }
      }
      return entry
    })

    const updatedUser: Client = {
      ...(activeUser as Client),
      trainingPlan: {
        ...(activeUser as Client).trainingPlan,
        history: updatedHistory,
      },
    }
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
