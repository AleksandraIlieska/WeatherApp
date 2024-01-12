import { Injectable } from "@angular/core";
import { UserModel } from "../../Models/user.model";
import { IndexedDbService } from "../indexed-db.service";
import { take } from "rxjs";

@Injectable({ providedIn: 'root' })
export class UserService {

    currentUser: UserModel = new UserModel();
   
    constructor(private IDBService: IndexedDbService,
    ) { }

    //Register new user to the database
    registerNewUser(newUser: UserModel): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            this.IDBService.AddData('User', newUser).pipe(take(1)).subscribe({
                next: (user: UserModel) => {
                    this.currentUser = user; //assign the entered data to the property currentUser
                    resolve(!!user); //only boolean value
                },
                error: (error) => {
                    this.currentUser = new UserModel(); //empty the data from the current user (filled by the user)
                    console.error(error);
                    reject(error);
                }
            });
        });
    }
}
