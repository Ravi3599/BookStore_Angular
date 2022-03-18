import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/Model/Order';
import { BookService } from 'src/app/MyService/book.service';
import { CartService } from 'src/app/MyService/cart.service';
import { OrderService } from 'src/app/MyService/order.service';
import { UserService } from 'src/app/MyService/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  title:string="Cart Details";
  token:any=this.route.snapshot.paramMap.get('token');
  submitted:boolean=false;
  cart:any;
  quantity:any;
  user:any;
  customerDetails=false;
  orderSummary=false;
  order:Order= new Order(0,'',0,0,0,true);
  search:any;
  constructor(private router:Router,private bookService:BookService,private service:CartService,private userService:UserService,private orderService:OrderService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getAllCartRecords().subscribe(getData=>{
      console.log("Cart Data Retrieved successfully",getData);
      this.cart=getData;
   });
    this.userService.getUserRecordByToken(this.token).subscribe(data=>{
     console.log("User data retrieved successfully for given token",data);
     this.user=data;
   });
  }

  deleteCart(cartId:any){
    this.service.deleteCartRecordById(cartId).subscribe(data=>{
      console.log("Cart record deleted successfully");
      window.location.reload();
    })
  }
  goToCart(){
    console.log(this.token);
    this.router.navigate(['cart',this.token]);
  }
  searchBook(){
    this.router.navigate(['dashboard',this.token]);
  }
  placeOrder(){
    //console.log(this.cart.data.book.bookID);
    this.customerDetails=true;
    this.order.userID=this.user.data.userID;
    this.order.bookID=this.cart.data.get(this.cart.cartID).book.bookID;
    this.order.quantity=this.cart.data.quantity;
    this.order.price=this.cart.data.price;
    this.order.address=this.user.data.address;
    this.order.cancel=true;
    this.orderService.postOrder(this.order).subscribe((getData:any)=>{
      console.log("Order Placed !",getData);
      this.order=getData.data;
    });
  }
  decreaseQuantity(Id:any){
    this.service.decreaseCartQuantity(Id).subscribe(data=>{
      console.log("Quantity decreased");
      window.location.reload();
    })
  }
  increaseQuantity(Id:any){
    this.service.increaseCartQuantity(Id).subscribe(data=>{
      console.log("Quantity decreased");
      window.location.reload();
    })
  }
  custDetails(){
    console.log(this.user);
    console.log(this.user.data.userID);
    this.userService.updateUserRecordById(this.user.data.userID,this.user.data).subscribe(data=>{
      console.log("Data updated successfully");
      this.user=data;
      this.orderSummary=true;
    })
  }
  onDashboard(){
    this.router.navigate(['dashboard',this.token]);
  }
  // addCart(){
  //   this.service.postCart(this.cart).subscribe(data=>{
  //     console.log("Cart Saved Successfully");
  //     this.router.navigate(['order']);
  //   })
  // }
  // signOut(){
  //   this.router.navigate(['login']);
  // }
}
