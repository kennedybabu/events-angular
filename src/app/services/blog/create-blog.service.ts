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

  createBlog(formValue: any, blogImage: any): Observable<any> {
    const formData = new FormData()

    formData.append('title', formValue.title)
    formData.append('body', formValue.body)
    formData.append('author', this.userId)
    formData.append('banner_image', blogImage)
      
    return this.http.post(`${environment.apiBaseUrl}/blog/`, formData)
  }
}


