import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../Services/Auth/login.service';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  IsAuthenticated: boolean = false;

  constructor(private loginService: LoginService,
    private toast: NgToastService,
    private router: Router) { }

  ngOnInit() {
    //Get the authentication status, to decide which tabs to show
    this.loginService.isAuthenticated$.subscribe((isAuthenticatedStatus: boolean) => {
      this.IsAuthenticated = isAuthenticatedStatus;
    });
  }

  logoutUser() {
    this.loginService.setAuthenticated(false);
    this.toast.success({ detail: "Success message", summary: 'You have successfully logged out. Have a nice day!', duration: 5000, position: 'topRight' });
    this.router.navigate(['/home']);
  }
}


