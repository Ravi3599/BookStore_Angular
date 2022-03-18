import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/Model/Order';
import { OrderService } from 'src/app/MyService/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  title:string="Order Details";
  submitted:boolean=false;
  order:Order=new Order(0,'',0,0,0,false);

  constructor(private router:Router,private service:OrderService) { }

  ngOnInit(): void {
  }

  onDashboard(){
    this.router.navigate(['dashboard']);
  }
  placeOrder(){
    this.service.postOrder(this.order).subscribe(data=>{
      console.log("Order Placed ! Hurray...");
      this.router.navigate(['dashboard']);
    })
  }
  signOut(){
    this.router.navigate(['login']);
  }
}
