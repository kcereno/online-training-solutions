export interface UserInterface {
  info: UserInfo;
}

export interface UserInfo {
  id: string;
  firstName: string;
  lastName: string;
  birthday: Date;
  email: string;
  password: string;
  profilePicture: string;
}

export interface Trainer extends UserInterface {
  role: "TRAINER";
}

export interface Client extends UserInterface {
  role: "CLIENT";
  trainingPlan: {
    trainer: string | null;
    goal: TrainingGoal;
    program: AssignedExercise[];
    log: LogEntry[];
    notes?: string;
  };
}
export interface LogEntry {
  date: Date;
  data: LogData[];
}
export interface LogData {
  exercise: string;
  sets: Set[];
}

export interface AssignedExercise {
  name: string;
  weight: number;
  reps: number;
  sets: number;
}

export interface Set {
  weight: number;
  reps: number;
}

export type TrainingGoal =
  | "BUILD MUSCLE"
  | "LOSE FAT"
  | "GAIN STRENGTH"
  | "BODY RECOMPOSITION"
  | "SPORTS SPECIFIC";
