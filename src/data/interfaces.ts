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
  trainingDetails: {
    goal: TrainingGoal;
    program: AssignedExercises[];
    log: LogEntry[];
  };
}

interface AssignedExercises {
  name: string;
  weight: number;
  reps: number;
  sets: number;
}

interface LogEntry {
  date: Date;
  workload: WorkloadEntry[];
}

interface WorkloadEntry {
  exercise: string;
  data: [{ exercise: string; reps: number; sets: number }];
}

export type TrainingGoal =
  | "BUILD MUSCLE"
  | "LOSE FAT"
  | "GAIN STRENGTH"
  | "BODY RECOMPOSITION"
  | "SPORTS SPECIFIC";
