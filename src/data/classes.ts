interface UserInfoInterface {
  basicInfo: BasicInfoInterface;
  logInCredentials: LoginCredentialInterface;
}

interface TrainerInfoInterface extends UserInfoInterface {
  clientList: Client[];
}

export interface BasicInfoInterface {
  id: string;
  firstName: string;
  lastName: string;
  birthday: Date;
  role: "TRAINER" | "CLIENT";
  trainer?: Trainer;
  profilePicture: string;
}

export interface LoginCredentialInterface {
  email: string;
  password: string;
}

export interface TrainingBlockInterface {
  blockName: string;
  exercises: ExerciseInterface[];
}

interface ExerciseInterface {
  exerciseName: string;
  weight?: number;
  rpe?: number;
  reps: number;
  sets: number;
  rest: number;
}

export interface TrainingPlanInterface {
  trainingPlan: {
    goal?:
      | "BUILD MUSCLE"
      | "LOSE FAT"
      | "GAIN STRENGTH"
      | "BODY RECOMPOSITION"
      | "SPORTS SPECIFIC";
    trainingBlock?: TrainingBlockInterface[];
  };
}

// Classes
export abstract class User {
  constructor(protected userInfo: UserInfoInterface) {}

  get loginCredentials() {
    return this.userInfo.logInCredentials;
  }
  get info() {
    return this.userInfo.basicInfo;
  }
}

export class Trainer extends User {
  constructor(protected userInfo: TrainerInfoInterface) {
    super(userInfo);
    this.userInfo.clientList = userInfo.clientList;
  }

  deleteClient(clientId: string): Client[] {
    const updatedClientList = this.userInfo.clientList.filter(
      (client) => client.info.id !== clientId
    );
    this.userInfo.clientList = updatedClientList;
    return this.userInfo.clientList;
  }

  get clients() {
    return this.userInfo.clientList;
  }
}

export class Client extends User {
  private clientTrainingPlan: TrainingPlanInterface;

  constructor(
    userInfo: UserInfoInterface,
    clientTrainingPlan: TrainingPlanInterface
  ) {
    super(userInfo);
    this.clientTrainingPlan = clientTrainingPlan;
  }

  get info() {
    return this.userInfo.basicInfo;
  }

  get trainingPlan() {
    return this.clientTrainingPlan.trainingPlan;
  }

  // get clientTrainingPlan() {
  //   return this.trainingPlan;
  // }
}
