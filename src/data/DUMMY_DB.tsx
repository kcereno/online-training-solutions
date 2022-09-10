import { UserType } from "./types";

export let DUMMY_DATA: UserType[] = [
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
      trainer: "kcereno89",
      goal: "Gain strength",
      program: [
        { name: "Bench Press", weight: 225, reps: 10, sets: 4 },
        { name: "Deadlift", weight: 315, reps: 5, sets: 4 },
      ],
      history: [
        {
          date: new Date(2022, 8, 1),
          data: [
            {
              exercise: "Bench Press",
              sets: [
                { weight: 350, reps: 8 },
                { weight: 350, reps: 8 },
                { weight: 350, reps: 8 },
              ],
            },
            {
              exercise: "Deadlift",
              sets: [
                { weight: 350, reps: 8 },
                { weight: 350, reps: 8 },
                { weight: 350, reps: 8 },
              ],
            },
          ],
        },
        {
          date: new Date(2022, 8, 8),
          data: [
            {
              exercise: "Bench Press",
              sets: [
                { weight: 100, reps: 8 },
                { weight: 200, reps: 8 },
                { weight: 300, reps: 8 },
              ],
            },
            {
              exercise: "Deadlift",
              sets: [
                { weight: 315, reps: 8 },
                { weight: 325, reps: 8 },
                { weight: 250, reps: 8 },
              ],
            },
          ],
        },
      ],
      notes: "This is Ric Flairs notes",
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
      trainer: "kcereno89",
      goal: "Build muscle",
      program: [],
      history: [],
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
      trainer: "kcereno89",
      goal: "Lose fat",
      program: [],
      history: [],
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
      trainer: "kcereno89",
      goal: "Body recomposition",
      program: [],
      history: [],
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
      trainer: "kcereno89",
      goal: "Sports specific",
      program: [],
      history: [],
    },
  },
];
