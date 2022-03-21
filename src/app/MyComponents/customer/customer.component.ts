import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/MyService/user.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  title:string="Customer Details";
  user:any;
  token:any=this.route.snapshot.paramMap.get('token');
  constructor(private route:ActivatedRoute,private router:Router,private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getUserRecordByToken(this.token).subscribe((getData:any)=>{
      console.log("Data retrieved for user",getData);
      this.user=getData.data;
    })
  }

  updateUser(){
    this.userService.updateUserRecordById(this.user.userID,this.user).subscribe(data=>{
      console.log("User record got updated",data);
      this.router.navigate(['ordersummary']);
    })
  }
}
