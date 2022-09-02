import { useContext } from "react";
import { convertDate, today } from "../data/functions";
import {
  Client,
  HistoryEntryData,
  HistoryEntry,
  Set,
} from "../data/interfaces";
import { UserType } from "../data/types";
import DatabaseContext from "../store/Database/database-context";
import UserContext from "../store/User/user-context";
import { isToday } from "../data/functions";
import { log } from "console";

const useClientActions = () => {
  const { activeUser } = useContext(UserContext);
  const { database, updateUser, fetchUser } = useContext(DatabaseContext);

  const fetchTodaysWorkoutEntries = (date: Date) => {
    // const foundLog = (activeUser as Client).trainingPlan.log.find(
    //   (data) => data.date.getTime() === date.getTime()
    // );
    // return foundLog?.entry;
  };

  const addSetToLog = (
    exercise: string,
    weight: number,
    reps: number
  ): void => {
    // upadate the logEngty

    const today = convertDate(new Date());

    const fetchedClient = fetchUser(activeUser!.info.id) as Client;

    const todaysHistoryEntry: HistoryEntry | undefined =
      fetchedClient.trainingPlan.history.find((historyEntry: HistoryEntry) =>
        isToday(historyEntry.date)
      );
    console.log("useClientActions ~ todaysHistoryEntry", todaysHistoryEntry);

    if (!todaysHistoryEntry) {
      const updatedHistoryEntry: HistoryEntry = {
        date: today,
        data: [{ exercise, sets: [{ weight, reps }] }],
      };
    }

    // if (!hasHistoryEntryForToday) {
    //   const newLegEntry: HistoryEntry = {
    //     date: convertDate(new Date()),
    //     data: [],
    //   };
    // }

    // // if (hasHistoryEntryForToday) {
    // //   updatedUser.trainingPlan.log.forEach((HistoryEntry: HistoryEntry) => {
    // //     if (isToday(HistoryEntry.date)) {
    // //       HistoryEntry.data.forEach((logData: HistoryEntryData) => {
    // //         if (logData.exercise === exercise) {
    // //           logData.sets.push({ weight: +weight, reps: +reps });
    // //         }
    // //       });
    // //     }
    // //   });
    // // } else {
    // //   updatedUser.trainingPlan.log.push({
    // //     date: today,
    // //     data: [{ exercise, sets: [{ weight: +weight, reps: +reps }] }],
    // //   });
    // // }

    // // const test = {...(activeUser as Client), trainingPlan:{...activeUser.trainingPlan, lo}};

    // updateUser(updatedUser);
  };

  return { fetchTodaysWorkoutEntries, addSetToLog };
};
export default useClientActions;
