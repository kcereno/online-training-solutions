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
}

export interface Client extends User {
  role: "CLIENT";
  trainingPlan: {
    trainer: string; // trainer id
    goal:
      | "BUILD MUSCLE"
      | "LOSE FAT"
      | "GAIN STRENGTH"
      | "BODY RECOMPOSITION"
      | "SPORTS SPECIFIC";
    // trainingBlock?: TrainingBlockInterface[];
  };
}

export interface ClientDataInterface extends User {
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
