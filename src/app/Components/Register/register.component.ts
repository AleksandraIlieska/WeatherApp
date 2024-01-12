import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RoutingNavigationService } from '../../Services/routing-navigation.service';
import { passwordMatchValidator } from '../../Directives/password-match.directive';
import { UserService } from '../../Services/Auth/user.service';
import { UserModel } from '../../Models/user.model';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  // public registerForm!: FormGroup;
  confirmPassword: any;
  password: any;

  registerForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
  },
    { validators: passwordMatchValidator }
  )

  constructor(private formBuilder: FormBuilder,
    private routerNavigation: RoutingNavigationService,
    private toast: NgToastService,
    private userService: UserService,
    private router: Router) {
  }

  get RegisterFormControl() {
    return this.registerForm.controls;
  }

  onButtonClickNavigate(urlRedirect: string) {
    this.routerNavigation.navigateToURL(urlRedirect);
  }

  //Submit entered data from the register form to the database
  submitDetails() {
    const postData = { ...this.registerForm.value };
    delete postData.confirmPassword; //not posting confirm password
    //using then because we cannot use subscribe with Promises
    this.userService.registerNewUser(postData as UserModel).then(
      (response: any) => {
        console.log('Register successful');
        this.toast.success({ detail: "Success message", summary: 'You have successfully registered', duration: 5000, position: 'topRight' });
        this.router.navigate(['login']);
      },
      (error: any) => {
        console.log('Register failed');
        this.toast.error({ detail: "Error message", summary: 'Register failed', duration: 5000, position: 'topRight' });
      }
    )
  }
}


