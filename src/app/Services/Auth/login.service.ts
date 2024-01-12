import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { UserModel } from "../../Models/user.model";
import { IndexedDbService } from "../indexed-db.service";

@Injectable({ providedIn: 'root' })
export class LoginService {

  private isAuthenticatedSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(
    private dbService: IndexedDbService,
  ) { }

  getUserByEmail(email: string): Observable<UserModel> {
    return this.dbService.GetDataByIndex('User', 'email', email);
  }

  //Change the value of isAuthenticated when login 
  setAuthenticated(isAuthenticated: boolean): void {
    this.isAuthenticatedSubject.next(isAuthenticated);
  }
}












