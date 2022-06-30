import { Client } from "../interfaces";

export const clients: Client[] = [
  {
    role: "CLIENT",
    info: {
      id: "adraymon",
      firstName: "Alexander",
      lastName: "Draymon",
      birthday: new Date(1989, 11, 31),
      email: "client@gmail.com",
      password: "password",
      profilePicture:
        "https://m.media-amazon.com/images/M/MV5BMmIzMjc5Y2ItNTIyZi00YTEzLWI4NDAtODQ0MzBiNTZmMDMxXkEyXkFqcGdeQXVyMjQwMzc1MzI@._V1_.jpg",
    },
    trainingPlan: {
      trainer: "kcereno",
      goal: "GAIN STRENGTH",
    },
  },
  {
    role: "CLIENT",
    info: {
      id: "ddawson",
      firstName: "David",
      lastName: "Dawson",
      birthday: new Date(1989, 11, 31),
      email: "client2@gmail.com",
      password: "password",
      profilePicture:
        "https://www.unitedagents.co.uk/sites/default/files/thumbnails/image/20210721daviddawson00197-1.jpg",
    },
    trainingPlan: {
      trainer: "kcereno",
      goal: "BUILD MUSCLE",
    },
  },
  {
    role: "CLIENT",
    info: {
      id: "ebutterworth",
      firstName: "Eliza",
      lastName: "Butterworth",
      birthday: new Date(1989, 11, 31),
      email: "client3@gmail.com",
      password: "password",
      profilePicture:
        "https://m.media-amazon.com/images/M/MV5BOTRmZTJmOWItZTNkNy00ZTcwLWIwYTctMzU0MGYyZmVkYWY5XkEyXkFqcGdeQXVyNzM3MDAzMTI@._V1_.jpg",
    },
    trainingPlan: {
      trainer: "kcereno",
      goal: "LOSE FAT",
    },
  },
  {
    role: "CLIENT",
    info: {
      id: "mbrady",
      firstName: "Millie",
      lastName: "Brady",
      birthday: new Date(1989, 11, 31),
      email: "client4@gmail.com",
      password: "password",
      profilePicture:
        "https://superstarsbio.com/wp-content/uploads/2019/10/Millie-Brady-hihgd-240x300.jpg",
    },
    trainingPlan: {
      trainer: "kcereno",
      goal: "BODY RECOMPOSITION",
    },
  },
  {
    role: "CLIENT",
    info: {
      id: "tinnes",
      firstName: "Timothy",
      lastName: "Innes",
      birthday: new Date(1989, 11, 31),
      email: "client5@gmail.com",
      password: "password",
      profilePicture:
        "https://assets.mycast.io/actor_images/actor-timothy-innes-348914_large.jpg?1642667387",
    },
    trainingPlan: {
      trainer: "kcereno",
      goal: "SPORTS SPECIFIC",
    },
  },
];
