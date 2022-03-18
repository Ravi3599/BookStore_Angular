import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/MyService/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cart:any;
  search:any;
  loggedIn:boolean=false;
  token:any=this.route.snapshot.paramMap.get('token');
  constructor(private router:Router,private route:ActivatedRoute,private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getAllCartRecords().subscribe(data=>{
      console.log("cart data retrieved",data);
      this.cart=data;
    })
  }
  searchBook(){
    this.router.navigate(['dashboard',this.search]);
  }
  goToCart(){
    console.log(this.token);
    this.router.navigate(['cart',this.token]);
  }
  toLogin(){
    this.loggedIn=true;
    this.router.navigate(['login']);
  }
  // toUser(){
  //   this.router.navigate(['user']);
  // }
  // toBook(){
  //   this.router.navigate(['book']);
  // }
  // toCart(){
  //   this.router.navigate(['cart']);
  // }
  // toOrder(){
  //   this.router.navigate(['order']);
  // }
  // signOut(){
  //   this.loggedIn=false;
  //   this.router.navigate(['login']);
  // }

}
