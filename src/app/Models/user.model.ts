export class UserModel {
    Id?: number;
    FirstName?: string;
    LastName?: string;
    Email?: string;
    Password?: string;

    public constructor(init?: Partial<UserModel>) {
        Object.assign(this, init);
    }
}