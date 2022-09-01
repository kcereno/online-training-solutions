import { useContext } from "react";
import { convertDate, today } from "../data/functions";
import { Client, LogData, LogEntry, Set } from "../data/interfaces";
import { UserType } from "../data/types";
import DatabaseContext from "../store/Database/database-context";
import UserContext from "../store/User/user-context";
import { isToday } from '../data/functions'
import { log } from "console";

const useClientActions = () => {
  const { activeUser } = useContext(UserContext);
  const { database, updateUser } = useContext(DatabaseContext);


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

    const hasLogEntryForToday = (activeUser as Client)!.trainingPlan.log.find((logEntry: LogEntry) => isToday(logEntry.date))
    const updatedUser = { ...activeUser as Client }

    if (hasLogEntryForToday) {


      updatedUser.trainingPlan.log.forEach((logEntry: LogEntry) => {
        if (isToday(logEntry.date)) {
          logEntry.data.forEach((logData: LogData) => {
            if (logData.exercise === exercise) {
              logData.sets.push({ weight: +weight, reps: +reps })
            }
          })
        }
      })
      updateUser(updatedUser)

    } else {
      updatedUser.trainingPlan.log.push({ date: today, data: [{ exercise, sets: [{ weight: +weight, reps: +reps }] }] })
      updateUser(updatedUser)
    }
  };

  return { fetchTodaysWorkoutEntries, addSetToLog };
};
export default useClientActions;
