import {
  ClientDataInterface,
  TrainerDataInterface,
  UserDataInterface,
} from "./interfaces";

export abstract class User {
  constructor(protected _userData: UserDataInterface) {}

  get info() {
    return this._userData.basicInfo;
  }
}

export class Trainer extends User {
  constructor(protected _userData: TrainerDataInterface) {
    super(_userData);
    this._userData.clients = _userData.clients;
  }

  deleteClient(clientId: string): Client[] {
    const updatedClientList = this._userData.clients.filter(
      (client) => client.info.id !== clientId
    );
    this._userData.clients = updatedClientList;
    return this._userData.clients;
  }

  get clients() {
    return this._userData.clients;
  }
}

export class Client extends User {
  constructor(protected _userData: ClientDataInterface) {
    super(_userData);
    this._userData.trainingPlan = _userData.trainingPlan;
  }

  get info() {
    return this._userData.basicInfo;
  }

  get trainingPlan() {
    return this._userData.trainingPlan;
  }

  // get clientTrainingPlan() {
  //   return this.trainingPlan;
  // }
}
