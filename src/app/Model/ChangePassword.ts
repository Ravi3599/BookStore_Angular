
export class ChangePassword{
    email:string;
    newPassword:string;
    token:string;

    constructor(email:string,newPassword:string,token:string){
        this.email=email;
        this.newPassword=newPassword;
        this.token=token;

    }
}