import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: any = { username: 'admin', password: 'admin' };

  constructor() { }

  getUserInfo() {
    return this.user;
  }

  changeUsername(newUsername: string) {
    this.user.username = newUsername;
  }

  changePassword(newPassword: string) {
    this.user.password = newPassword;
  }
}
