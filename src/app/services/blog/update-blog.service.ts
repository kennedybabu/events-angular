import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class UpdateBlogService {

  constructor(private http:HttpClient) { }

  updateBlog(formValue: any, updatedImage: any): Observable<any> {
    let data = {

    }
    
    return this.http.put(`${environment.apiBaseUrl}/blog/`, data)
  }
}
