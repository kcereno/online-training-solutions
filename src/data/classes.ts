import { LoginCredentials, UserInfo } from "./interfaces";

export abstract class User {
  constructor(
    protected info: UserInfo,
    protected loginCredentials: LoginCredentials
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
    info: UserInfo,
    loginCredentials: LoginCredentials,
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
  // private trainedBy: Trainer;

  constructor(
    info: UserInfo,
    loginCredentials: LoginCredentials,
    // trainedBy: Trainer
  ) {
    super(info, loginCredentials);
    // this.trainedBy = trainedBy;
  }

  get clientInfo() {
    return this.userInfo;
  }
}
