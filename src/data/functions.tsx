import { HistoryEntry } from "./interfaces";
import { Client } from "./interfaces";

export const createId = (fName: string, lName: string) => {
  const firstLetter = fName.slice(0, 1);

  return firstLetter.toLowerCase() + lName.toLowerCase();
};

export const convertDate = (date: Date) => {
  const year = date.getFullYear();
  const day = date.getDate();
  const month = date.getMonth();

  return new Date(year, month, day);
};

export const isToday = (date: Date) => {
  const today = convertDate(new Date());

  const convertedDate = convertDate(date);

  return convertedDate.getTime() === today.getTime();
};

export const today = convertDate(new Date());

export const updateClientHistory = (
  client: Client,
  updatedHistory: HistoryEntry[]
) => {
  return {
    ...client,
    trainingPlan: { ...client.trainingPlan, history: updatedHistory },
  };
};

export const dateToString = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return `${months[month]} ${day}, ${year}`;
};
