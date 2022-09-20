import { useContext } from "react";
import { today, isToday } from "../data/functions";
import { Client, HistoryEntry } from "../data/interfaces";
import UserContext from "../store/User/user-context";
import { updateClientHistory } from "../data/functions";

const useClientActions = () => {
  const { activeUser } = useContext(UserContext);

  // FETCH FUNCTIONS
  const fetchTodaysHistoryEntry = (history: HistoryEntry[]) =>
    history.find(
      (historyEntry: HistoryEntry) =>
        historyEntry.date.getTime() === today.getTime()
    );

  const fetchTodaysWorkoutEntries = (date: Date) => {};

  //  SET FUNCTIONS
  const addSetToLog = (
    clientId: string,
    setData: {
      exerciseName: string;
      weight: number;
      reps: number;
    }
  ): void => {
    // const todaysHistoryEntry = fetchTodaysHistoryEntry(
    //   (activeUser as Client).trainingPlan.history
    // );
    // let updatedHistory: HistoryEntry[] = [
    //   ...(activeUser as Client).trainingPlan.history,
    // ];
    // if (!todaysHistoryEntry) {
    //   updatedHistory = [
    //     ...updatedHistory,
    //     {
    //       date: today,
    //       data: [],
    //     },
    //   ];
    // }
    // updatedHistory = updatedHistory.map((entry) => {
    //   if (isToday(entry.date)) {
    //     let updatedEntry = { ...entry };
    //     const hasExistingExerciseData = entry.data.find(
    //       (data) => data.exercise === exercise
    //     );
    //     if (!hasExistingExerciseData)
    //       updatedEntry = {
    //         ...updatedEntry,
    //         data: [...entry.data, { exercise, sets: [] }],
    //       };
    //     const updatedEntryData = updatedEntry.data.map((data) => {
    //       if (data.exercise === exercise)
    //         return {
    //           exercise,
    //           sets: [...data.sets, { weight: +weight, reps: +reps }],
    //         };
    //       return data;
    //     });
    //     return { ...updatedEntry, data: updatedEntryData };
    //   }
    //   return entry;
    // });
    // const updatedUser = updateClientHistory(
    //   activeUser as Client,
    //   updatedHistory
    // );
    // updateUser(updatedUser);
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

    // updateUser(updatedUser);
  };

  return {
    fetchTodaysWorkoutEntries,
    addSetToLog,
    fetchTodaysHistoryEntry,
    deleteSetFromLog,
    // todaysHistoryEntry,
  };
};

export default useClientActions;
