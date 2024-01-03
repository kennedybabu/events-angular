import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CreateBlogService {
  userId!: any

  constructor(private http:HttpClient) { 
    let user = localStorage.getItem('user')

    if(user) {
      this.userId = JSON.parse(user).id
    }
  }

  createBlog(formValue: any): Observable<any> {
    const data = {
      body: formValue.body,
      author: this.userId,
      title: formValue.title
    }
    return this.http.post(`${environment.apiBaseUrl}/blog/`, data)
  }
}
