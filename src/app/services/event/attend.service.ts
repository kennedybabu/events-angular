import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AttendService {

  constructor(private http:HttpClient) { }

  attendEvent(eventId: string){
    this.http.post(`${environment.apiBaseUrl}/event/${eventId}/attend`, {}).subscribe((res) => {
      console.log(res)
    })
  }
}
