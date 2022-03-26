import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  private _teacherMessageSource = new Subject<Number>();
  teacherMessage$ = this._teacherMessageSource.asObservable();
  private _teacherMessage = new Subject<string>();
  teacher$ = this._teacherMessage.asObservable();
  constructor() { }

  sendMessage(message:number){
    this._teacherMessageSource.next(message);
  }
   sendToken(message:string){
    this._teacherMessage.next(message);
   }
}
