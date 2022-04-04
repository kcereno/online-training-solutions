import { LoginCredentials, UserInfo } from "./interfaces";

abstract class User {
  get userLoginCredentials() {
    return this.loginCredentials;
  }
  get userInfo() {
    return this.info;
  }

  constructor(
    protected info: UserInfo,
    protected loginCredentials: LoginCredentials
  ) {}
}

export class Trainer extends User {
  constructor(
    info: UserInfo,
    loginCredentials: LoginCredentials,
    private clients: Client[]
  ) {
    super(info, loginCredentials);
    this.clients = clients;
  }
}

export class Client extends User {}
