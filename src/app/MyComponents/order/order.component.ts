import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/Model/Order';
import { OrderService } from 'src/app/MyService/order.service';
import { UserService } from 'src/app/MyService/user.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  title:string="Order Details";
  submitted:boolean=false;
  // order:Order=new Order(0,'',0,0,0,false);
  order:any;
  email:any;
  token:any;
  constructor(private router:Router,private service:OrderService,private userService:UserService) { }

  ngOnInit(): void {
    this.service.getAllOrders().subscribe(data=>{
      console.log("Orders retrieved successfully",data);
      this.order=data;
      this.email=this.order.data[0].user.email;
      console.log(this.email);
      this.userService.getToken(this.email).subscribe((getData:any)=>{
        console.log("Token retrieved successfully");
        this.token=getData.data;
      })
    })
    

  }

  goToDashboard(){
    for(let i=0;i<this.order.data.length;i++){
    this.service.deleteOrderRecordById(this.order.data[i].orderID).subscribe(data=>{
      console.log(data);
      
      // this.router.navigate(['dashboard',this.token]);
    });
  }
    this.router.navigate(['dashboard',this.token]);

  }
}
