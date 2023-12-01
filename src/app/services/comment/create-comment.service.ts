import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CreateCommentService {
  userId!: any

  constructor(private http:HttpClient) {
    let user = localStorage.getItem('user')

    if(user){
      this.userId = JSON.parse(user).id
    }
   }

  createComment(formvalue: any, eventId: any): Observable<any> {
    let formData = {
      "author": this.userId,
      "body": formvalue.body,
      "event": eventId
    }

    return this.http.post(`${environment.apiBaseUrl}/event/${eventId}/comment/`, formData)    

  }
}
