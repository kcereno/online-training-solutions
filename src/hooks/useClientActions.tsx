import { useContext } from "react";
import { convertDate } from "../data/functions";
import { Client, LogData, LogEntry, Set } from "../data/interfaces";
import { UserType } from "../data/types";
import DatabaseContext from "../store/Database/database-context";
import UserContext from "../store/User/user-context";

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
    //check if there a log entry for today
    //fetchUser
    //see if user has log entry for today

    //if yes, add set to log entry

    //if no, create new log entry and add set to it

    const newSet: Set = { weight: +weight, reps: +reps };

    const today = convertDate(new Date());

    const client = database.find(
      (user: UserType) => user.info.id === activeUser?.info.id
    ) as Client;
    console.log("useClientActions ~ client", client);

    const logs = client.trainingPlan.log;

    const todaysLogs = logs.find(
      (logEntry: LogEntry) => logEntry.date.getTime() === today.getTime()
    );
    console.log("useClientActions ~ todaysLogs", todaysLogs);

    if (todaysLogs) {
      const exerciseIndex = todaysLogs.data.findIndex(
        (logData: LogData) => logData.exercise === exercise
      );

      const todayIndex = logs.findIndex(
        (logEntry: LogEntry) => logEntry.date.getTime() === today.getTime()
      );
      // const updatedExerciseEntry = {
      //   ...todaysLogs.data[exerciseIndex],
      //   sets: [...todaysLogs.data[exerciseIndex].sets, newSet],
      // };
      // const updatedLogData = [...todaysLogs.data];
      // updatedLogData[exerciseIndex] = updatedExerciseEntry;
      // const updatedLog = { ...todaysLogs, data: updatedLogData };
      // console.log("useClientActions ~ updatedLog", updatedLog);
      // const updatedClient = {
      //   ...client,
      //   trainingPlan: {
      //     ...client.trainingPlan,
      //     log: [...client.trainingPlan.log, updatedLog],
      //   },
      // };
      // console.log("useClientActions ~ updatedClient", updatedClient);

      // CURRENT ISSUE: ADDS DUPLICATE EXERCISE ETNRY TO DATA

      const updatedLog: LogEntry[] = [...client.trainingPlan.log];
      updatedLog[todayIndex] = {
        date: today,
        data: [
          ...updatedLog[todayIndex].data,
          {
            exercise,
            sets: [...updatedLog[todayIndex].data[exerciseIndex].sets, newSet],
          },
        ],
      };
      console.log("useClientActions ~ updatedLog", updatedLog);

      const updatedClient = {
        ...client,
        trainingPlan: {
          ...client.trainingPlan,
          log: updatedLog,
        },
      };
      console.log("useClientActions ~ updatedClient", updatedClient);
    }
  };

  return { fetchTodaysWorkoutEntries, addSetToLog };
};
export default useClientActions;
