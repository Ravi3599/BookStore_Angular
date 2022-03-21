import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }

  postOrder(order:any){
    return this.http.post("http://localhost:8080/orderdetails/insert",order);
  }
  getAllOrders(){
    return this.http.get("http://localhost:8080/orderdetails/retrieveAllOrders");
  }
  getOrderRecordById(Id:any){
    return this.http.get("http://localhost:8080/orderdetails/retrieveOrder/"+Id);
  }
  updateOrderRecordById(Id:any,order:any){
    return this.http.put("http://localhost:8080/orderdetails/updateOrder/"+Id,order);
  }
  deleteOrderRecordById(Id:any){
    return this.http.delete("http://localhost:8080/orderdetails/deleteOrder/"+Id);
  }


}

