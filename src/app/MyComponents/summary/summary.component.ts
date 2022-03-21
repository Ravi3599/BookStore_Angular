import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/MyService/book.service';
import { CartService } from 'src/app/MyService/cart.service';
import { OrderService } from 'src/app/MyService/order.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  // cart:any;
  book:any;
  order:any;
  constructor(private bookService:BookService,private service:CartService,private router:Router,private orderService:OrderService) { }

  ngOnInit(): void {
  //   this.service.getAllCartRecords().subscribe(getData=>{
  //     console.log("Cart Data Retrieved successfully",getData);
  //     this.cart=getData;
  //  });
  //   this.bookService.getBookRecordById(this.cart.data.bookID).subscribe(data=>{
  //     console.log("Book data retrieved",data);
  //     this.book = data;
  //   })
  this.orderService.getAllOrders().subscribe(getData=>{
    console.log("order Data Retrieved successfully",getData);
    this.order=getData;
 });
  this.bookService.getBookRecordById(this.order.data[0].book.bookID).subscribe(data=>{
    console.log("Book data retrieved",data);
    this.book = data;
  })
  }

  orderDetails(Id:any){
    this.router.navigate(['order',Id]);
  }
}
