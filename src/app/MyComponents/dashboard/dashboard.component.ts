import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from 'src/app/Model/Cart';
import { BookService } from 'src/app/MyService/book.service';
import { CartService } from 'src/app/MyService/cart.service';
import { InteractionService } from 'src/app/MyService/interaction.service';
import { UserService } from 'src/app/MyService/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  books:any;
  search:any;
  user:any;
  carts:any;
  cart:Cart =  new Cart(0,0,0);
  token:any=this.route.snapshot.paramMap.get('token');
  sort!:string;
  selected:boolean=false;
  constructor(private router:Router,private route:ActivatedRoute,private userService:UserService,private service:BookService,private cartService:CartService,private iteraction:InteractionService) { }

  ngOnInit(): void {
    this.service.getBookRecords().subscribe(data=>{
      console.log("Data retrieved successfully");
      this.books=data;
    });
    this.cartService.getAllCartRecords().subscribe(data=>{
      console.log("cart data retrieved",data);
      this.carts=data;
    });
    this.userService.getUserRecordByToken(this.token).subscribe((getData:any)=>{
      console.log("User record retrieved successfully");
      this.user=getData.data;
    });
    this.iteraction.teacherMessage$.subscribe(message=>{
      console.log("Search retrieved",message);
      this.search=message;
      this.service.getBookRecordByBookName(this.search).subscribe((getData:any)=>{
        console.log("Book record retrieved",getData);
        this.books=getData;
      });
    });
    //  console.log("Token from dashboard",this.token);
    //  this.iteraction.sendToken(this.token); 
  }
  addToCart(Id:any){
      this.cart.bookID=Id;
      this.cart.userID=this.user.userID;
      this.cart.quantity=1;
      console.log(this.cart);
      this.cartService.postCart(this.cart).subscribe((getData:any) =>{
        console.log("Cart Added !");
        this.cart=getData.data;
        window.location.reload();
      });
      this.selected=true;  
  }
  
  sendToken(){
    console.log("Token on dashboard",this.token);
    this.iteraction.sendMessage(this.token);
  }
  goToCart(){
    console.log(this.token);
    this.router.navigate(['cart',this.token]);
  }
  onDashboard(){
    this.router.navigate(['dashboard',this.token]);
  }
  
}
