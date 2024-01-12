import { Component } from '@angular/core';
import { RoutingNavigationService } from '../../Services/routing-navigation.service';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../../Services/Auth/login.service';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { UserService } from '../../Services/Auth/user.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  })

  constructor(
    private routerNavigation: RoutingNavigationService,
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private toast: NgToastService,
  ) { }

  get LoginFormControlEmail() {
    return this.loginForm.controls['email'];
  }

  get LoginFormControlPassword() {
    return this.loginForm.controls['password'];
  }

  onButtonClickNavigate(urlRedirect: string) {
    this.routerNavigation.navigateToURL(urlRedirect);
  }

  loginUser() {
    const { email, password } = this.loginForm.value;
    this.loginService.getUserByEmail(email as string).subscribe(
      {
        next: (response: any) => {
          if (response && response[0].password === password) {
            console.log('Login successful');
            this.loginService.setAuthenticated(true);
            this.toast.success({ detail: "Success message", summary: 'Successful login. Have a nice time!', duration: 5000, position: 'topRight' });
            this.router.navigate(['/home']);
          } else {
            console.log('Login failed');
            this.toast.error({ detail: "Error message", summary: 'Email or password is wrong', duration: 5000, position: 'topRight' });
          }
        },
        error: (error: any) => {
          this.toast.error({ detail: "Error message", summary: 'Login failed', duration: 5000, position: 'topRight' });
        }
      }
    )
  }
}


