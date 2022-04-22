export interface UserInfoInterface {
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
  reps?: number;
  rpe?: number;
  rest: number;
}

export interface TrainingPlanInterface {
  goal?:
    | "BUILD MUSCLE"
    | "LOSE FAT"
    | "GAIN STRENGTH"
    | "BODY RECOMPOSITION"
    | "SPORTS SPECIFIC";
  trainingBlock?: TrainingBlockInterface[];
}

// Classes
export abstract class User {
  constructor(
    protected info: UserInfoInterface,
    protected loginCredentials: LoginCredentialInterface
  ) {}

  get userLoginCredentials() {
    return this.loginCredentials;
  }
  get userInfo() {
    return this.info;
  }
}

export class Trainer extends User {
  private clients: Client[];

  constructor(
    info: UserInfoInterface,
    loginCredentials: LoginCredentialInterface,
    clients: Client[]
  ) {
    super(info, loginCredentials);
    this.clients = clients;
  }

  deleteClient(clientId: string): Client[] {
    const updatedClientList = this.clients.filter(
      (client) => client.userInfo.id !== clientId
    );
    this.clients = updatedClientList;
    return this.clients;
  }

  get clientList() {
    return this.clients;
  }
}

export class Client extends User {
  private trainingPlan: TrainingPlanInterface;

  constructor(
    info: UserInfoInterface,
    loginCredentials: LoginCredentialInterface,
    trainingPlan: TrainingPlanInterface
  ) {
    super(info, loginCredentials);
    this.trainingPlan = trainingPlan;
  }

  get clientInfo() {
    return this.userInfo;
  }

  get clientTrainingPlan() {
    return this.trainingPlan;
  }
}
