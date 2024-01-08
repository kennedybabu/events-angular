import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class DeleteBlogService {

  constructor(private http:HttpClient) { }

  deleteBlog(id: string): Observable<any> {
    return this.http.delete(`${environment.apiBaseUrl}/blog/${id}`)
  }
}
