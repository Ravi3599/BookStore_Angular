import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from 'src/app/Model/Cart';
import { BookService } from 'src/app/MyService/book.service';
import { CartService } from 'src/app/MyService/cart.service';
import { InteractionService } from 'src/app/MyService/interaction.service';
import { UserService } from 'src/app/MyService/user.service';
import { WishlistService } from 'src/app/MyService/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  books:any;
  cart:Cart=new Cart(0,0,0);
  carts:any;
  user:any;
  wishlists:any;
  BookID:Number=0;
  tempProduct:any;
  token:any=this.route.snapshot.paramMap.get('token');
  constructor(private bookService:BookService,private userService:UserService,private cartService:CartService,private route:ActivatedRoute,private router:Router,private interaction:InteractionService,private wishlistService:WishlistService) { }

  ngOnInit(): void {
  //   // this.userService.getUserRecordByToken(this.token).subscribe(data=>{
  //   //   console.log("User data retrieved",data);
  //   //   this.user=data;
  //   // });
    
    // this.wishlistService.getAllWishlistRecords().subscribe(data=>{
    //   console.log("Wishlist data retrieved successfully",data);
    //   this.wishlists=data;
    // });
    this.userService.getUserRecordByToken(this.token).subscribe((getData:any)=>{
      console.log("User record retrieved successfully");
       this.user=getData.data;
       this.wishlistService.getWishlistRecordByUserId(this.user.userID).subscribe(data=>{
         console.log("Wishlists Data Retrieved successfully",data);
         this.wishlists=data;
      });
      this.cartService.getCartRecordByUserId(this.user.userID).subscribe(getData=>{
        console.log("Cart Data Retrieved successfully",getData);
        this.carts=getData;
     });
    });
    
  }

  removeWishlist(Id:any){
    this.wishlistService.deleteWishlistRecordById(Id).subscribe(data=>{
      console.log("Wishlist record deleted",data);
      window.location.reload();
    })
  }
  moveToCart(Id:any){
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
            //this.router.navigate(["cart",this.token])
          });
      }
      else{
        this.cartService.getCartRecordByUserAndBookId(this.user.userID,Id).subscribe(data=>{
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
         // window.location.reload();
        });
      } 
  }

}
