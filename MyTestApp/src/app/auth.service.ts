import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  isUserLoggedIn = false;

  users = [
    {
      uName: "Test1",
      password: "test@123",
    },
    {
      uName: "Test2",
      password: "test@123",
    },
  ];

  setUserLogggdIn(status: boolean) {
    this.isUserLoggedIn = status;
  }

  getUserLoggedIn() {
    return this.isUserLoggedIn;
  }

  validateUser(userName: string, password: string): boolean {
    let validUser = false;

    let user = this.users.filter((u) => u.uName == userName)[0];

    if (user) {
      if (user.password == password) {
        validUser = true;
      }
    }
    return validUser;
  }
}
