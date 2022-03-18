import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from 'src/app/Model/Cart';
import { BookService } from 'src/app/MyService/book.service';
import { CartService } from 'src/app/MyService/cart.service';
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
  constructor(private router:Router,private route:ActivatedRoute,private userService:UserService,private service:BookService,private cartService:CartService) { }

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
      console.log("Data retrieved successfully");
      this.user=getData.data;
    })
  }
  addToCart(Id:any){
      this.cart.bookID=Id;
      this.cart.userID=this.user.userID;
      this.cart.quantity=1;
      console.log(this.cart);
      this.cartService.postCart(this.cart).subscribe(data =>{
        console.log("Cart Added !");
      })
  }
  sortAsc(){
      this.service.sortAscedingByPrice().subscribe(data=>{
        console.log("data got sorted in asceding order of price");
        this.books=data;
      })
  }
  sortDesc(){
    this.service.sortDescendingByPrice().subscribe(data=>{
      console.log("data got sorted in desceding order of price");
      this.books=data;
    })
  }
  displayBook(){
    this.service.getBookRecordByBookName(this.search).subscribe((getData:any)=>{
      console.log("Book record retrieved");
      this.books=getData;
    });
  }
  goToCart(){
    console.log(this.token);
    this.router.navigate(['cart',this.token]);
  }
  onDashboard(){
    this.router.navigate(['dashboard',this.token]);
  }
  
  // getBook(){
  //   this.router.navigate(['book']);
  // }
  // getCart(){
  //   this.router.navigate(['cart']);
  // }
  // getOrder(){
  //   this.router.navigate(['order']);
  // }
  // signOut(){
  //   this.router.navigate(['login']);
  // }
  // getDetails(){
  //   this.router.navigate(['details']);
  // }

}
