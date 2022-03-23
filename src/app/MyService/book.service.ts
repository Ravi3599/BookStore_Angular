import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }

  postBookData(user:any){
    return this.http.post("http://localhost:8080/bookdetails/insert",user);
  }
  getBookRecords(){
    return this.http.get("http://localhost:8080/bookdetails/retrieveAllBooks")
  }
  getBookRecordById(Id:any){
    return this.http.get("http://localhost:8080/bookdetails/retrieveBook/"+Id)
  }
  deleteBookRecordById(Id:any){
    return this.http.delete("http://localhost:8080/bookdetails/deleteBook/"+Id);
  }
  updateBookRecordById(Id:any,user:any){
    return this.http.put("http://localhost:8080/bookdetails/updateBook/"+Id,user);
  }
  getBookRecordByBookName(name:any){
    return this.http.get("http://localhost:8080/bookdetails/retrieve/"+name)
  }
  sortAscedingByPrice(){
    return this.http.get("http://localhost:8080/bookdetails/sortAsc");
  }
  sortDescendingByPrice(){
    return this.http.get("http://localhost:8080/bookdetails/sortDesc");
  }
}
