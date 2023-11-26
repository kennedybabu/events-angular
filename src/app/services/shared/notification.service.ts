import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

  private errorNotification = new Subject<any>()
  private successNotification = new Subject<any>()

  sendErrorNofification(message: string, type:string){
    this.errorNotification.next({message, type })
  }

  sendSuccessNofification(message: string, type: string){
    this.successNotification.next({message, type})
  }

  getSuccessNotification(){
    return this.successNotification.asObservable()
  }

  getErrorNotification(){
    return this.errorNotification.asObservable()
  }

}
