import { Client } from "./classes";
import { Karl } from "./TRAINERS";

const adraymon = new Client({
  basicInfo: {
    id: "adraymon",
    firstName: "Alexander",
    lastName: "Draymon",
    birthday: new Date(1989, 11, 31),
    email: "client@gmail.com",
    password: "password",
    role: "CLIENT",
    profilePicture:
      "https://m.media-amazon.com/images/M/MV5BMmIzMjc5Y2ItNTIyZi00YTEzLWI4NDAtODQ0MzBiNTZmMDMxXkEyXkFqcGdeQXVyMjQwMzc1MzI@._V1_.jpg",
  },
  trainingPlan: {
    goal: "GAIN STRENGTH",
    trainingBlock: [
      {
        blockName: "Starting Strength",
        exercises: [
          { exerciseName: "Squat", rpe: 6, reps: 5, sets: 5, rest: 60 },
          { exerciseName: "Bench", rpe: 6, reps: 5, sets: 5, rest: 60 },
          { exerciseName: "Deadlift", rpe: 6, reps: 5, sets: 5, rest: 60 },
        ],
      },
    ],
  },
});

const ddawson = new Client({
  basicInfo: {
    id: "ddawson",
    firstName: "David",
    lastName: "Dawson",
    birthday: new Date(1989, 11, 31),
    email: "client2@gmail.com",
    password: "password",
    role: "CLIENT",
    profilePicture:
      "https://www.unitedagents.co.uk/sites/default/files/thumbnails/image/20210721daviddawson00197-1.jpg",
  },
  trainingPlan: {
    goal: "BUILD MUSCLE",
  },
});

const ebutterworth = new Client({
  basicInfo: {
    id: "ebutterworth",
    firstName: "Eliza",
    lastName: "Butterworth",
    birthday: new Date(1989, 11, 31),
    email: "client3@gmail.com",
    password: "password",
    role: "CLIENT",
    profilePicture:
      "https://m.media-amazon.com/images/M/MV5BOTRmZTJmOWItZTNkNy00ZTcwLWIwYTctMzU0MGYyZmVkYWY5XkEyXkFqcGdeQXVyNzM3MDAzMTI@._V1_.jpg",
  },
  trainingPlan: {
    goal: "LOSE FAT",
  },
});

const mbrady = new Client({
  basicInfo: {
    id: "mbrady",
    firstName: "Millie",
    lastName: "Brady",
    birthday: new Date(1989, 11, 31),
    email: "client4@gmail.com",
    password: "password",
    role: "CLIENT",
    profilePicture:
      "https://superstarsbio.com/wp-content/uploads/2019/10/Millie-Brady-hihgd-240x300.jpg",
  },
  trainingPlan: {
    goal: "BODY RECOMPOSITION",
  },
});

const tinnes = new Client({
  basicInfo: {
    id: "tinnes",
    firstName: "Timothy",
    lastName: "Innes",
    birthday: new Date(1989, 11, 31),
    email: "client5@gmail.com",
    password: "password",
    role: "CLIENT",
    profilePicture:
      "https://assets.mycast.io/actor_images/actor-timothy-innes-348914_large.jpg?1642667387",
  },
  trainingPlan: {
    goal: "SPORTS SPECIFIC",
  },
});

export const CLIENTS: Client[] = [
  adraymon,
  ddawson,
  ebutterworth,
  mbrady,
  tinnes,
];
