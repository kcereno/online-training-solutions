export interface User {
  info: {
    id: string;
    firstName: string;
    lastName: string;
    birthday: Date;
    email: string;
    password: string;
    profilePicture: string;
  };
}

export interface Trainer extends User {
  role: "TRAINER";
  clients: string[];
}

export interface Client extends User {
  role: "CLIENT";
  trainingPlan: {
    goal: TrainingGoal;
    assignedExercises: AssignedExercises[];
    log: LogEntry[];
  };
}

interface AssignedExercises {
  exercise: string;
  weight: number;
  reps: number;
  sets: number;
}

interface LogEntry {
  date: Date;
  data: LogData[];
}

interface LogData {
  exercise: string;
  data: WorkloadData[];
}

interface WorkloadData {
  set: number;
  weight: number;
  reps: number;
}

export type TrainingGoal =
  | "BUILD MUSCLE"
  | "LOSE FAT"
  | "GAIN STRENGTH"
  | "BODY RECOMPOSITION"
  | "SPORTS SPECIFIC";
