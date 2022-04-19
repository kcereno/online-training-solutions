import { Client } from "./classes";

const Steve = new Client(
  {
    id: "snash1989",
    firstName: "Steve",
    lastName: "Nash",
    birthday: new Date(1989, 11, 31),
    role: "CLIENT",
    profilePicture:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    email: "client@gmail.com",
    password: "password",
  }
);

const John = new Client(
  {
    id: "jconnelly89",
    firstName: "Jennifer",
    lastName: "Connelly",
    birthday: new Date(1989, 11, 31),
    role: "CLIENT",
    profilePicture:
      "https://t3.ftcdn.net/jpg/03/67/46/48/360_F_367464887_f0w1JrL8PddfuH3P2jSPlIGjKU2BI0rn.jpg",
  },
  {
    email: "client2@gmail.com",
    password: "password",
  }
);

const Dave = new Client(
  {
    id: "ddawson1989",
    firstName: "Dave",
    lastName: "Dawson",
    birthday: new Date(1989, 11, 31),
    role: "CLIENT",
    profilePicture:
      "https://media.istockphoto.com/photos/headshot-portrait-of-smiling-ethnic-businessman-in-office-picture-id1300512215?b=1&k=20&m=1300512215&s=170667a&w=0&h=LsZL_-vvAHB2A2sNLHu9Vpoib_3aLLkRamveVW3AGeQ=",
  },
  {
    email: "client3@gmail.com",
    password: "password",
  }
);

const Daniel = new Client(
  {
    id: "dkim1989",
    firstName: "Daniel",
    lastName: "Kim",
    birthday: new Date(1989, 11, 31),
    role: "CLIENT",
    profilePicture:
      "https://st.depositphotos.com/1597387/1984/i/950/depositphotos_19841901-stock-photo-asian-young-business-man-close.jpg",
  },
  {
    email: "client4@gmail.com",
    password: "password",
  }
);

const Kimberly = new Client(
  {
    id: "klee1989",
    firstName: "Kimberly",
    lastName: "Lee",
    birthday: new Date(1989, 11, 31),
    role: "CLIENT",
    profilePicture:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
  },
  {
    email: "client5@gmail.com",
    password: "password",
  }
);

export const CLIENTS: Client[] = [Steve, John ,Dave, Daniel, Kimberly] ;
