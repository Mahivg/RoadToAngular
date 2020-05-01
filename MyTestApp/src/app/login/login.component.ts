import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  @ViewChild("txtUserName", { static: true }) txtUserName: ElementRef;

  @ViewChild("txtPassword", { static: true }) txtPassword: ElementRef;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  login() {
    let userName = this.txtUserName.nativeElement.value;
    let password = this.txtPassword.nativeElement.value;

    if (this.authService.validateUser(userName, password)) {
      this.authService.setUserLogggdIn(true);
      alert("User logged In");
      //this.router.navigate(["products"]);
    } else {
      this.authService.setUserLogggdIn(false);
      alert("Invalid credentials..!!");
    }
  }
}
