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
  }

  deleteClient(clientId: string): void {
    const updatedClientList = this._userData.clientList.filter(
      (client: Client) => client.info.id !== clientId
    );
    this._userData.clientList = updatedClientList;
  }

  get clients() {
    return this._userData.clientList;
  }
}

export class Client extends User {
  constructor(protected _userData: ClientDataInterface) {
    super(_userData);
  }

  get trainingPlan() {
    return this._userData.trainingPlan;
  }
}
