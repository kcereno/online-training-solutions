interface UserInfoInterface {
  basicInfo: BasicInfoInterface;
  logInCredentials: LoginCredentialInterface;
}

interface TrainerInfoInterface extends UserInfoInterface {
  clients: Client[];
}

interface ClientInfoInterface extends UserInfoInterface {
  trainingPlan: {
    goal:
      | "BUILD MUSCLE"
      | "LOSE FAT"
      | "GAIN STRENGTH"
      | "BODY RECOMPOSITION"
      | "SPORTS SPECIFIC";
    trainingBlock?: TrainingBlockInterface[];
  };
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
  constructor(protected _info: TrainerInfoInterface) {
    super(_info);
    this._info.clients = _info.clients;
  }

  deleteClient(clientId: string): Client[] {
    const updatedClientList = this._info.clients.filter(
      (client) => client.info.id !== clientId
    );
    this._info.clients = updatedClientList;
    return this._info.clients;
  }

  get clients() {
    return this._info.clients;
  }
}

export class Client extends User {
  constructor(protected _info: ClientInfoInterface) {
    super(_info);
    this._info.trainingPlan = _info.trainingPlan;
  }

  get info() {
    return this._info.basicInfo;
  }

  get trainingPlan() {
    return this._info.trainingPlan;
  }

  // get clientTrainingPlan() {
  //   return this.trainingPlan;
  // }
}
