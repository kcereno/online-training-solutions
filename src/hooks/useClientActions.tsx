import { useContext } from "react";
import { convertDate, today } from "../data/functions";
import { Client, LogData, LogEntry, Set } from "../data/interfaces";
import { UserType } from "../data/types";
import DatabaseContext from "../store/Database/database-context";
import UserContext from "../store/User/user-context";
import { isToday } from '../data/functions'

const useClientActions = () => {
  const { activeUser } = useContext(UserContext);
  const { database } = useContext(DatabaseContext);
  const { updateUser } = useContext(UserContext);

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

    const newSet: Set = { weight: +weight, reps: +reps }
    const fetchedClient = (database.find((user: UserType) => user.info.id === activeUser?.info.id)) as Client

    const todaysLog = (activeUser as Client).trainingPlan.log.find((logEntry: LogEntry) => isToday(logEntry.date))
    console.log('todaysLog: ', todaysLog)

    if (todaysLog) {
      const targetExerciseIndex = todaysLog.data.findIndex((logData: LogData) => logData.exercise === exercise)

      console.log(targetExerciseIndex)

      const updatedSets = [...todaysLog.data[targetExerciseIndex].sets, newSet]
      console.log('updatedSets', updatedSets)

      const updatedClient = { ...fetchedClient, trainingPlan: { ...fetchedClient.trainingPlan, log: [...fetchedClient.trainingPlan.log, { date: today, data: {exercise, sets: updatedSets} }] } }
      console.log(updatedClient)
    }
  };

  return { fetchTodaysWorkoutEntries, addSetToLog };
};
export default useClientActions;
