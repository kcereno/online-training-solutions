import { useContext } from "react";
import { today, isToday } from "../data/functions";
import { Client, HistoryEntry } from "../data/interfaces";
import UserContext from "../store/User/user-context";
import { updateClientHistory } from "../data/functions";

const useClientActions = () => {
  const { activeUser, updateActiveUser } = useContext(UserContext);

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
    const todaysHistoryEntry = (activeUser as Client).trainingPlan.history.find(
      (entry) => isToday(entry.date)
    );

    let updatedHistory: HistoryEntry[] = [
      ...(activeUser as Client).trainingPlan.history,
    ];

    if (!todaysHistoryEntry)
      updatedHistory = [...updatedHistory, { date: today, data: [] }];

    let updatedHistoryEntry = updatedHistory.find((entry) =>
      isToday(entry.date)
    ) as HistoryEntry;

    const entryHasExercise = updatedHistoryEntry!.data.find(
      (data) => data.exercise === exercise
    );

    if (!entryHasExercise)
      updatedHistoryEntry = {
        ...updatedHistoryEntry,
        data: [...updatedHistoryEntry.data, { exercise, sets: [] }],
      };

    updatedHistoryEntry = {
      ...updatedHistoryEntry,
      data: [...updatedHistoryEntry.data].map((entry) => {
        if (entry.exercise === exercise)
          return { ...entry, sets: [...entry.sets, { weight, reps }] };

        return entry;
      }),
    };

    updatedHistory = updatedHistory.map((entry) => {
      if (isToday(entry.date)) return updatedHistoryEntry;

      return entry;
    });

    const updatedUser = updateClientHistory(
      activeUser as Client,
      updatedHistory
    );

    updateActiveUser(updatedUser);

    console.log("useClientActions ~ updatedHistoryEntry", updatedHistoryEntry);
  };

  const deleteSetFromLog = (exercise: string, setIndex: number, date: Date) => {
    console.log("deleteSetFromLog ~ Date", date);

    const updatedHistory: HistoryEntry[] = (
      activeUser as Client
    ).trainingPlan.history.map((entry) => {
      if (isToday(entry.date))
        return {
          ...entry,
          data: entry.data.map((data) => {
            if (data.exercise === exercise)
              return {
                ...data,
                sets: data.sets.filter((set, index) => index !== setIndex),
              };
            return data;
          }),
        };

      return entry;
    });

    const updatedUser = updateClientHistory(
      activeUser as Client,
      updatedHistory
    );

    updateActiveUser(updatedUser);
  };

  return {
    fetchTodaysWorkoutEntries,
    addSetToLog,
    fetchTodaysHistoryEntry,
    deleteSetFromLog,
  };
};

export default useClientActions;
