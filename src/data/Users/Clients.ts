import { Client } from "../interfaces";

export const addToClientList = (newClient: Client) => {
  const updatedClientList = [...clients, newClient];
  clients = updatedClientList;
};

export const removeFromClientList = (clientId: string) => {
  const updatedClientList = clients.filter(
    (client) => client.info.id !== clientId
  );
  clients = updatedClientList;
};

export let clients: Client[] = [
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
    },
  },
];
