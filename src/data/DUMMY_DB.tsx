import { User } from "./types";

// Add and remove Users from DUMMY_DATA
export const addUser = (user: User) => {
  const updatedData = [...DUMMY_DATA, user];
  DUMMY_DATA = updatedData;
  console.log(user, "added to DB");
  console.log("updated DB", DUMMY_DATA);
};

export const deleteUser = (userId: string) => {
  const updatedData = DUMMY_DATA.filter((user) => user.info.id !== userId);
  DUMMY_DATA = updatedData;
  console.log(userId, "removed from DB");
  console.log("updated DB", DUMMY_DATA);
};

export const updateUser = (updatedUser: User) => {
  const foundUserIndex = DUMMY_DATA.findIndex(
    (user) => user.info.id === updatedUser.info.id
  );

  DUMMY_DATA[foundUserIndex] = updatedUser;
  console.log("user in DB updated", DUMMY_DATA[foundUserIndex]);
};

export let DUMMY_DATA: User[] = [
  {
    role: "TRAINER",
    info: {
      id: "kcereno89",
      firstName: "Karl",
      lastName: "Cereno",
      email: "trainer@gmail.com",
      birthday: new Date(1989, 0o4, 18),
      password: "password",
      profilePicture:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    clients: ["rflair", "bhart", "rsavage", "hhogan", "smichaels"],
  },
  {
    role: "CLIENT",
    info: {
      id: "rflair",
      firstName: "Ric",
      lastName: "Flair",
      birthday: new Date(1989, 11, 31),
      email: "client@gmail.com",
      password: "password",
      profilePicture:
        "https://www.wwe.com/f/styles/gallery_img_l/public/all/2017/08/001_Flair_10--6e2ea2137b551b51f49670966ba5a72f.jpg",
    },
    trainingPlan: {
      goal: "GAIN STRENGTH",
      assignedExercises: [
        { name: "Bench Press", weight: 225, reps: 10, sets: 4 },
        { name: "Deadlifts", weight: 315, reps: 5, sets: 4 },
      ],
      log: [
        {
          date: new Date(2018, 11, 24, 10, 33, 30, 0),
          data: [
            {
              exercise: "Bench Press",
              data: [
                { set: 1, weight: 225, reps: 8 },
                { set: 2, weight: 225, reps: 8 },
                { set: 3, weight: 225, reps: 8 },
              ],
            },
            {
              exercise: "Deadlift",
              data: [
                { set: 1, weight: 315, reps: 8 },
                { set: 2, weight: 325, reps: 8 },
                { set: 3, weight: 250, reps: 8 },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    role: "CLIENT",
    info: {
      id: "bhart",
      firstName: "Bret",
      lastName: "Hart",
      birthday: new Date(1989, 11, 31),
      email: "client2@gmail.com",
      password: "password",
      profilePicture:
        "https://www.biography.com/.image/t_share/MTgxMTAzNDYwOTI0NTMyMDcy/bret-08_crop.jpg",
    },
    trainingPlan: {
      goal: "BUILD MUSCLE",
      assignedExercises: [],
      log: [],
    },
  },
  {
    role: "CLIENT",
    info: {
      id: "rsavage",
      firstName: "Randy",
      lastName: "Savage",
      birthday: new Date(1989, 11, 31),
      email: "client3@gmail.com",
      password: "password",
      profilePicture:
        "https://www.biography.com/.image/t_share/MTc5Mzk0NDcxNjk0MTgxNzA5/macho01_ba.jpg",
    },
    trainingPlan: {
      goal: "LOSE FAT",
      assignedExercises: [],
      log: [],
    },
  },
  {
    role: "CLIENT",
    info: {
      id: "smichaels",
      firstName: "Shawn",
      lastName: "Michaels",
      birthday: new Date(1989, 11, 31),
      email: "client4@gmail.com",
      password: "password",
      profilePicture:
        "https://www.biography.com/.image/t_share/MTc5NjQ1NTQ1MjgxNzU5MTky/hbk-studio-1-1.jpg",
    },
    trainingPlan: {
      goal: "BODY RECOMPOSITION",
      assignedExercises: [],
      log: [],
    },
  },
  {
    role: "CLIENT",
    info: {
      id: "hhogan",
      firstName: "Hulk",
      lastName: "Hogan",
      birthday: new Date(1989, 11, 31),
      email: "client5@gmail.com",
      password: "password",
      profilePicture:
        "http://i.dailymail.co.uk/i/pix/2014/02/23/article-2565879-1BC04B8200000578-367_634x641.jpg",
    },
    trainingPlan: {
      goal: "SPORTS SPECIFIC",
      assignedExercises: [],
      log: [],
    },
  },
];
