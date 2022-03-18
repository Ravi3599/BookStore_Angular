import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  postUserData(user:any){
    return this.http.post("http://localhost:8080/userdetails/register",user);
  }
  getUserRecords(){
    return this.http.get("http://localhost:8080/userdetails/retrieveAll")
  }
  getUserRecordById(Id:any){
    return this.http.get("http://localhost:8080/userdetails/retrieve/"+Id)
  }
  deleteUserRecordById(Id:any){
    return this.http.delete("http://localhost:8080/userdetails/delete/"+Id);
  }
  updateUserRecordById(Id:any,user:any){
    return this.http.put("http://localhost:8080/userdetails/update/"+Id,user);
  }
  userLogin(loginData:any){
    return this.http.post("http://localhost:8080/userdetails/login",loginData);
  }
  changePassword(changePasswordData:any){
    return this.http.put("http://localhost:8080/userdetails/changepassword",changePasswordData,{responseType:"text" as "json"});
  }
  getToken(email:any){
    return this.http.get("http://localhost:8080/userdetails/getToken/"+email);
  }
  getUserRecordByEmail(mail:any){
    return this.http.get("http://localhost:8080/userdetails/retrievebyemail/"+mail)
  }
  getUserRecordByToken(token:any){
    return this.http.get("http://localhost:8080/userdetails/retrieveByToken/"+token)
  }
}
