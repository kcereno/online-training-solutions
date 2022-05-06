import { Trainer, Client } from "./classes";

export interface UserDataInterface {
  basicInfo: BasicInfoInterface;
}

export interface TrainerDataInterface extends UserDataInterface {
  clientList: any;
}

export interface ClientDataInterface extends UserDataInterface {
  trainingPlan: {
    trainer: string;
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
  email: string;
  password: string;
  profilePicture: string;
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

// Modal Context Interfaces




