import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/Model/Book';
import { BookService } from 'src/app/MyService/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  Id:any=this.route.snapshot.paramMap.get('Id');
  title:string="Book Details";
  submitted:boolean=false;
  book:Book= new Book('','','','',0,0);

  constructor(private router:Router,private route:ActivatedRoute,private service:BookService) { }

  ngOnInit(): void {
    this.service.getBookRecordById(this.Id).subscribe((getdata:any)=>{
      console.log("Book record retrieved for given Id");
      this.book=getdata;
    })
  }

  onDashboard(){
    this.router.navigate(['dashboard']);
  }
  addBook(){
    this.service.postBookData(this.book).subscribe(data =>{
      console.log("Book Record Inserted Successfully");
      this.router.navigate(['dashboard']);
    })
  }
  updateBook(){
      this.service.updateBookRecordById(this.Id,this.book).subscribe(data=>{
        console.log("Book Record updated successfully");
        this.router.navigate(['dashboard']);
      })
  }
  signOut(){
    this.router.navigate(['login']);
  }
}
