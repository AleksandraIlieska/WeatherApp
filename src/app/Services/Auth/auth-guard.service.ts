import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { Observable, map, take } from "rxjs";
import { LoginService } from "./login.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) { }

  canActivate(): Observable<boolean> {
    return this.loginService.isAuthenticated$.pipe(
      take(1),
      //Transform the boolean value emitted by isAuthenticated$
      map((isAuthenticated: boolean) => {
        if (!isAuthenticated) {
          this.router.navigate(['home']).then(() => {
            console.log('User not authenticated. Redirecting to home...');
          });
        }
        return isAuthenticated;
      })
    );
  }
}

