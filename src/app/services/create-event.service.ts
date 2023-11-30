import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CreateEventService {
  userId!: any

  constructor(private http:HttpClient) { 
    let user = localStorage.getItem('user')

    if(user){
      this.userId = JSON.parse(user).id
    }
  }

  createEvent(formValue: any, image: any): Observable<any> { 

    const formData = new FormData()

    formData.append('body', formValue.body)
    formData.append('date', formValue.date)
    formData.append('ticket_price', formValue.ticket_price)
    formData.append('age_limit', formValue.age_limit)
    formData.append('author', this.userId) 
    formData.append('banner', image )

    return this.http.post(`${environment.apiBaseUrl}/event/`, formData)
  }
}
