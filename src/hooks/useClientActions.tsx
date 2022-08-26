import React, { useContext } from "react";
import { convertDate } from "../data/functions";
import { Client, LogEntry } from "../data/interfaces";
import DatabaseContext from "../store/Database/database-context";
import UserContext from "../store/User/user-context";

const useClientActions = () => {
  const { activeUser } = useContext(UserContext);
  const { database, updateUser } = useContext(DatabaseContext);

  const fetchTodaysWorkoutEntries = (date: Date) => {
    // const foundLog = (activeUser as Client).trainingPlan.log.find(
    //   (data) => data.date.getTime() === date.getTime()
    // );
    // return foundLog?.entry;
  };

  const addToExerciseLog = (exercise: string, weight: number, reps: number) => {
    const user = database.find(
      (user) => user.info.id === activeUser?.info.id
    ) as Client;

    const today = convertDate(new Date());

    const newEntry: LogEntry = {
      date: today,
      data: [{ exercise, sets: [{ weight, reps }] }],
    };

    const updatedUser: Client = {
      ...user,
      trainingPlan: {
        ...(user as Client).trainingPlan,
        log: [...(user as Client).trainingPlan.log, newEntry],
      },
    };

    updateUser(updatedUser);
  };

  return { fetchTodaysWorkoutEntries, addToExerciseLog };
};
export default useClientActions;
