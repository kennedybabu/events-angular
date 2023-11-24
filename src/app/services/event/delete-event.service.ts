import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class DeleteEventService {

  constructor(private http:HttpClient) { }

  deleteEvent(id: any): Observable<any> {
    return this.http.delete(`${environment.apiBaseUrl}/event/${id}/`)
  }
}
