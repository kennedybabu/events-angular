import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class UpdateEventService {
  userId!: any

  constructor(private http:HttpClient) { 
    let user = localStorage.getItem('user')

    if(user){
      this.userId = JSON.parse(user).id
    }
  }

  updateEvent(formValue: any, id: any): Observable<any> { 
    let object = {
      "body": formValue.body,
      "date": formValue.date,
      "ticket_price": formValue.ticket_price,
      "age_limit": formValue.age_limit,
      "author": this.userId
    }
    return this.http.put(`${environment.apiBaseUrl}/event/${id}/`, object)
  }
}
