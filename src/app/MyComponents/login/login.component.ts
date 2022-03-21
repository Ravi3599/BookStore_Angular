import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/Model/Login';
import { InteractionService } from 'src/app/MyService/interaction.service';
import { UserService } from 'src/app/MyService/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  token:any;
  login:Login =  new Login('','');
  registerData=false;
  constructor(private router:Router,private service:UserService,private interaction:InteractionService) { }

  ngOnInit(): void {
   
  }

  register(){
    this.router.navigate(['user']);
  }
  signIn(){
    this.registerData=true;
     setTimeout (() => {
      this.service.userLogin(this.login).subscribe(data=>{
        this.service.getToken(this.login.email).subscribe((getData:any)=>{
          console.log("Token retrieved successfully",getData);
          this.token=getData;
          console.log("Token from login",this.token.data);
          this.interaction.sendToken(this.token.data);
          this.router.navigate(['dashboard',this.token.data]);
        });
        console.log("User Logged In Successfully",data); 
      },error=>{
        alert("Invalid username or password");
      });
    }, 3000);
    //this.router.navigate(['dashboard']);
  }
  
}
