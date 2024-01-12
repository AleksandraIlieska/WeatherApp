export class LoginModel {
    Email?: string;
    Password?: string;

    public constructor(init?: Partial<LoginModel>) {
        Object.assign(this, init)
    }
}