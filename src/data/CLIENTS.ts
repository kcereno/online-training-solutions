import { Client } from "./classes";
import { Karl } from "./TRAINERS";

const adraymon = new Client(
  {
    id: "adraymon",
    firstName: "Alexander",
    lastName: "Draymon",
    birthday: new Date(1989, 11, 31),
    role: "CLIENT",
    profilePicture:
      "https://m.media-amazon.com/images/M/MV5BMmIzMjc5Y2ItNTIyZi00YTEzLWI4NDAtODQ0MzBiNTZmMDMxXkEyXkFqcGdeQXVyMjQwMzc1MzI@._V1_.jpg",
  },
  {
    email: "client@gmail.com",
    password: "password",
  },
  {
    goal: "GAIN STRENGTH",
  }
);

const ddawson = new Client(
  {
    id: "ddawson",
    firstName: "David",
    lastName: "Dawson",
    birthday: new Date(1989, 11, 31),
    role: "CLIENT",
    profilePicture:
      "https://www.unitedagents.co.uk/sites/default/files/thumbnails/image/20210721daviddawson00197-1.jpg",
  },
  {
    email: "client2@gmail.com",
    password: "password",
  },
  {
    goal: "BUILD MUSCLE",
  }
);

const ebutterworth = new Client(
  {
    id: "ebutterworth",
    firstName: "Eliza",
    lastName: "Butterworth",
    birthday: new Date(1989, 11, 31),
    role: "CLIENT",
    profilePicture:
      "https://m.media-amazon.com/images/M/MV5BOTRmZTJmOWItZTNkNy00ZTcwLWIwYTctMzU0MGYyZmVkYWY5XkEyXkFqcGdeQXVyNzM3MDAzMTI@._V1_.jpg",
  },
  {
    email: "client3@gmail.com",
    password: "password",
  },
  {
    goal: "LOSE FAT",
  }
);

const mbrady = new Client(
  {
    id: "mbrady",
    firstName: "Millie",
    lastName: "Brady",
    birthday: new Date(1989, 11, 31),
    role: "CLIENT",
    profilePicture:
      "https://superstarsbio.com/wp-content/uploads/2019/10/Millie-Brady-hihgd-240x300.jpg",
  },
  {
    email: "client4@gmail.com",
    password: "password",
  },
  {
    goal: "BODY RECOMPOSITION",
  }
);

const tinnes = new Client(
  {
    id: "tinnes",
    firstName: "Timothy",
    lastName: "Innes",
    birthday: new Date(1989, 11, 31),
    role: "CLIENT",
    profilePicture:
      "https://assets.mycast.io/actor_images/actor-timothy-innes-348914_large.jpg?1642667387",
  },
  {
    email: "client5@gmail.com",
    password: "password",
  },
  {
    goal: "SPORTS SPECIFIC",
  }
);

export const CLIENTS: Client[] = [
  adraymon,
  ddawson,
  ebutterworth,
  mbrady,
  tinnes,
];
