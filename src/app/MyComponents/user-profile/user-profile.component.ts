import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/MyService/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  email:any=this.route.snapshot.paramMap.get('email');
  user:any;
  constructor(private router:Router,private route:ActivatedRoute,private service:UserService) { }

  ngOnInit(): void {
    this.service.getUserRecordByEmail(this.email).subscribe(data=>{
      console.log("User Record for given mail retrieved successfully",data);
      this.user=data;
    })
  }
  editProfile(Id:any){
    this.router.navigate(['update',Id]);
  }
  returnDashboard(){
    this.router.navigate(['dashboard',this.user.data.id]);
  }

}
