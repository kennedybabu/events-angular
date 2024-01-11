import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class UpdateBlogService {
  userId: string | undefined
  constructor(private http:HttpClient) { 
    let user = localStorage.getItem('user')

    if(user) {
      this.userId = JSON.parse(user).id
    }
  }

  updateBlog(formValue: any, updatedImage: any, id: string): Observable<any> {
    let data = {
      "title": formValue.title,
      "body": formValue.body,  
      "author": this.userId   

    }
    
    return this.http.put(`${environment.apiBaseUrl}/blog/${id}/`, data)
  }
}
