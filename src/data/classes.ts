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

  get clientList() {
    return this.clients;
  }
}

export class Client extends User {}
