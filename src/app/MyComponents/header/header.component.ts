import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/MyService/cart.service';
import { InteractionService } from 'src/app/MyService/interaction.service';
import { UserService } from 'src/app/MyService/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cart:any;
  search:any;
  user:any;
  loggedIn:boolean=false;
  token:any=this.route.snapshot.paramMap.get('token');
 //token:string="";
 //token:any;
  constructor(private router:Router,private route:ActivatedRoute,private cartService:CartService,private userService:UserService,private interaction:InteractionService) { }

  ngOnInit(): void {
    this.cartService.getAllCartRecords().subscribe(data=>{
      console.log("cart data retrieved",data);
      this.cart=data;
    }); 
  }
  signOut(){
    this.router.navigate(["login"]);
  }
  searchBook(){
    this.interaction.sendMessage(this.search);
  }
  goToCart(){
    // this.interaction.teacher$.subscribe(message=>{
    //   console.log("token retrieved",message);
    //   this.token=message;
    //   console.log(this.token);
    //   this.router.navigate(['cart',this.token]);
    // });
     //this.token=this.route.snapshot.paramMap.get('token');
     console.log(this.token);
     this.router.navigate(['cart',this.token]);
  }
  toLogin(){
    this.loggedIn=true;
    this.router.navigate(['login']);
  }
}
