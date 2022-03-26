import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }

  postCart(cart:any){
    return this.http.post("http://localhost:8080/cartdetails/insert",cart);
  }
  getAllCartRecords(){
    return this.http.get("http://localhost:8080/cartdetails/retrieveAllCarts");
  }
  getCartRecordById(Id:any){
    return this.http.get("http://localhost:8080/cartdetails/retrieveCart/"+Id);
  }
  updateCartRecordById(Id:any,cart:any){
    return this.http.put("http://localhost:8080/cartdetails/updateCart/"+Id,cart);
  }
  deleteCartRecordById(Id:any){
    return this.http.delete("http://localhost:8080/cartdetails/deleteCart/"+Id);
  }
  decreaseCartQuantity(Id:any){
    return this.http.get("http://localhost:8080/cartdetails/decreaseQuantity/"+Id);
  }
  increaseCartQuantity(Id:any){
    return this.http.get("http://localhost:8080/cartdetails/increaseQuantity/"+Id);
  }
  getCartRecordByBookId(Id:any){
    return this.http.get("http://localhost:8080/cartdetails/retrieveCartByBookId/"+Id);
  }
  getCartRecordByUserId(Id:any){
    return this.http.get("http://localhost:8080/cartdetails/retrieveCartByUserId/"+Id);
  }
  getCartRecordByUserAndBookId(userId:any,bookId:any){
    return this.http.get("http://localhost:8080/cartdetails/retrieveCartByUserAndBookId/"+userId+"/"+bookId);
  }
}
