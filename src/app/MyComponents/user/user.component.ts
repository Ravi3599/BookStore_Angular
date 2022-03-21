import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Model/User';
import { UserService } from 'src/app/MyService/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  Id:any=this.route.snapshot.paramMap.get('Id');
  title:string="User Details";
  submitted:boolean=false;
  user:User= new User('','','','','');

  constructor(private router:Router,private route:ActivatedRoute,private service:UserService) { }

  ngOnInit(): void {
    this.service.getUserRecordById(this.Id).subscribe((getData:any)=>{
      console.log("User Record for given token retrieved successfully",getData);
      this.user=getData;
    })
  }
  returnLogin(){
    this.router.navigate(['login']);
  }
  returnDashboard(){
    this.router.navigate(['dashboard',this.user.email]);
  }
  registerUser(){
    this.service.postUserData(this.user).subscribe(data=>{
      console.log("User Registered Successfully");
      this.router.navigate(['login']);
    });
  }
  updateUser(){
    this.service.updateUserRecordById(this.Id,this.user).subscribe(data=>{
      console.log("Data Updated Successfully");
      this.router.navigate(['login']);
    })
  }
  signOut(){
    this.router.navigate(['login']);
  }

}
