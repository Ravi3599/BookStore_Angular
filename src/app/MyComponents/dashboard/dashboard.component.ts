import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from 'src/app/Model/Cart';
import { Wishlist } from 'src/app/Model/Wishlist';
import { BookService } from 'src/app/MyService/book.service';
import { CartService } from 'src/app/MyService/cart.service';
import { InteractionService } from 'src/app/MyService/interaction.service';
import { UserService } from 'src/app/MyService/user.service';
import { WishlistService } from 'src/app/MyService/wishlist.service';

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
  tempProduct:any;
  selected:boolean=false;
  wishlist:Wishlist= new Wishlist(0,0);
  wishlists:any;
  tempWishlist:any;
  constructor(private router:Router,private route:ActivatedRoute,private userService:UserService,private service:BookService,private cartService:CartService,private iteraction:InteractionService,private wishlistService:WishlistService) { }

  ngOnInit(): void {
    this.service.getBookRecords().subscribe(data=>{
      console.log("Book Data retrieved successfully",data);
      this.books=data;
    });
    // this.cartService.getAllCartRecords().subscribe(data=>{
    //   console.log("cart data retrieved",data);
    //   this.carts=data;
    // });
     this.userService.getUserRecordByToken(this.token).subscribe((getData:any)=>{
       console.log("User record retrieved successfully");
        this.user=getData.data;
        this.cartService.getCartRecordByUserId(this.user.userID).subscribe(data=>{
          console.log("Cart Data Retrieved successfully",data);
          this.carts=data;
          this.wishlistService.getWishlistRecordByUserId(this.user.userID).subscribe(data=>{
            console.log("wishlist data retrieved successfully");
            this.wishlists=data;
          })
       });
      
     });
    //  this.wishlistService.getAllWishlistRecords().subscribe(data=>{
    //    console.log("wishlist data retrieved successfully");
    //    this.wishlists=data;
    //  })
     this.sort="Relevance";
    
    console.log("data",this.books.data.length);
    for (let i = 0; i < this.books.data.length; i++) {
      for (let index = 0; index < this.carts.data.length; index++) {
        if(this.carts.data[index].book.bookID==this.books.data[i].bookID){
          this.selected=true;
          console.log("Value",this.selected);
        }
      }  
    }
    //  console.log("Token from dashboard",this.token);
    //  this.iteraction.sendToken(this.token); 
  }

addToCart(Id:any){
  // console.log(this.carts.data.length);
    if(this.carts.data.length == 0){
      this.cart.bookID=Id;
      this.cart.userID=this.user.userID;
      this.cart.quantity=1;
      console.log(this.cart);
      this.cartService.postCart(this.cart).subscribe((getData:any) =>{
        console.log("Cart Added successfully !");
        this.cart=getData.data;
        window.location.reload();
      });
  }
  else{
    this.cartService.getCartRecordByBookId(Id).subscribe(data=>{
      this.tempProduct=data;
      console.log(this.tempProduct.data);
      if(this.tempProduct.data==null){
        this.cart.bookID=Id;
        this.cart.userID=this.user.userID;
        this.cart.quantity=1;
        //console.log(this.cart);
        this.cartService.postCart(this.cart).subscribe((getData:any) =>{
          console.log("Cart Added !");
          this.cart=getData.data;
          //window.location.reload();
        });
      }
      else{
        alert("Book Already added...Please check cart !!!");
      }
      window.location.reload();
    });
  } 

}
  alreadyAdded(){
    alert("Book is already added");
  }

sortAsc(){
    this.service.sortAscedingByPrice().subscribe(data=>{
      console.log("data got sorted in asceding order of price");
      this.books=data;
      console.log("data asc",data);
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


onChange(){
  if(this.sort=="Descending"){
    this.sortDesc()
  }
  if(this.sort=="Ascending"){
    this.sortAsc();
  }
  if(this.sort=="Relevance"){
    this.service.getBookRecords().subscribe(data=>{
      console.log("Book Data retrieved successfully");
      this.books=data;
    });
  }}
  moveToWishlist(Id:any){
    // console.log(Id);
    // this.iteraction.sendMessage(Id);
    //// this.router.navigate(["wishlist",Id]);
    if(this.wishlists.data.length==0){
      this.wishlist.userID=this.user.userID;
      this.wishlist.bookID=Id;
      this.wishlistService.insertWishList(this.wishlist).subscribe(data=>{
          console.log("Wishlist added successfully",data);
          window.location.reload();
      });
    }
    else{
      // this.wishlistService.getWishlistRecordByBookId(Id).subscribe(data=>{
        this.cartService.getCartRecordByUserAndBookId(this.user.userID,Id).subscribe(data=>{
        console.log("Wishlist retrieved for book id",data);
        this.tempWishlist=data;
        if(this.tempWishlist.data==null){
          this.wishlist.userID=this.user.userID;
          this.wishlist.bookID=Id;
          this.wishlistService.insertWishList(this.wishlist).subscribe(data=>{
          console.log("Wishlist added successfully",data);
        });
        }
        else{
            alert("Book already present...Please check wishlist !!!")
        }
        window.location.reload();
      }) 
    }
  }
  goToWishlist(){
    this.router.navigate(["wishlist",this.token]);
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
