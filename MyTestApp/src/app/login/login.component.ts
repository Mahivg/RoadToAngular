import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  AfterViewChecked,
} from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import {
  NgForm,
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  ValidatorFn,
} from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit, AfterViewInit {
  @ViewChild("txtUserName", { static: true }) txtUserName: ElementRef;

  @ViewChild("txtPassword", { static: true }) txtPassword: ElementRef;

  @ViewChild("loginForm", null) loginForm: NgForm;

  invalidEmails: string[] = ["test@gmail.com", "123@gmail.com"];

  loginFG: FormGroup;

  // defaultValue = { userName: "test", password: "test@123" };

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.loginFG = new FormGroup({
      userName: new FormControl("", [
        Validators.required,
        Validators.email,
        this.validateEMail.bind(this),
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(6),
      ]),
    });

    console.log(this.loginFG);
  }

  get fgc() {
    return this.loginFG.controls;
  }

  ngAfterViewInit() {
    // console.log(this.loginForm);
    // console.log(this.loginForm.value);
    // this.loginForm.setValue({
    //   userName: "test",
    //   password: "test@123",
    // // });
    // setTimeout(() => {
    //   // this.loginFG.setValue({
    //   //   userName: "test",
    //   //   password: "test@123",
    //   // });
    //   this.loginForm.form.patchValue({
    //     userName: "test",
    //   });
    // }, 100);
    // this.loginForm.form.patchValue({
    //   userName: "test",
    // });
  }

  login() {
    if (this.loginFG.valid) {
      let user = this.loginFG.value;

      if (this.authService.validateUser(user.userName, user.password)) {
        this.authService.setUserLogggdIn(true);
        alert("User logged In");
        //this.router.navigate(["products"]);
      } else {
        this.authService.setUserLogggdIn(false);
        alert("Invalid credentials..!!");
      }
    } else {
      console.log(this.loginFG);
      alert("Invalid Inputs!! ");
    }
  }
  resetForm() {
    this.loginFG.reset();
    this.loginFG.reset({
      userName: "test",
    });
  }

  validateEMail(contorl: AbstractControl) {
    // console.log("called");
    // console.log(this.invalidEmails);
    let index = this.invalidEmails.includes(contorl.value);

    if (index) {
      return { invalidEmail: true };
    }
  }
}
