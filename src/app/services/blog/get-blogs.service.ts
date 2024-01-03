import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class GetBlogsService {

  constructor(private http:HttpClient) { }


  getBlogs(): Observable<any> {
    return this.http.get(`${environment.apiBaseUrl}/blog/`)
  }
}
