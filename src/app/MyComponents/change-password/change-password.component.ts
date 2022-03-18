import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChangePassword } from 'src/app/Model/ChangePassword';
import { UserService } from 'src/app/MyService/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  changepassword:ChangePassword= new ChangePassword('','','');
  //mail:string=this.changepassword.email;
  constructor(private router:Router,private service:UserService) {
  }

  ngOnInit(): void {
  }

  returnBack(){
    this.router.navigate(['login']);
  }
  changePassword(){
    console.log(this.changepassword);
    this.service.changePassword(this.changepassword).subscribe(data=>{
      console.log("Password changed successfully");
      this.router.navigate(['login']);
    })

  }
   getToken(){
     console.log(this.changepassword.email);
      this.service.getToken(this.changepassword.email).subscribe(data=>{
       console.log("Token Sent successfully on email id");
    })
   }

}
