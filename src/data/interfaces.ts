import { Trainer, Client } from "./classes";

export interface UserDataInterface {
  basicInfo: BasicInfoInterface;
}

export interface TrainerDataInterface extends UserDataInterface {
  clientList: Client[];
}

export interface ClientDataInterface extends UserDataInterface {
  trainer?: Trainer;
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
  email: string;
  password: string;
  role: "TRAINER" | "CLIENT";
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

export interface ModalContextInterface {
  showModal: (modalType: "DELETE_CLIENT" | "ADD_CLIENT") => void;
  showDeleteClientModal: (clientId: string) => void;
  hideModal: () => void;
  modalType: ModalTypeInterface;
  isShowing: boolean;
}

export interface ModalTypeInterface {
  type: "DELETE_CLIENT" | "ADD_CLIENT";
  clientId?: string;
}
