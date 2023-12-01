import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class GetCommentsService {

  constructor(private http: HttpClient) { }


  getComments(eventId: any): Observable<any>{
    return this.http.get(`${environment.apiBaseUrl}/event/${eventId}/comment/`)
  }
}
