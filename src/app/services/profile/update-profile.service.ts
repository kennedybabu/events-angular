import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class UpdateProfileService {

  constructor(private http:HttpClient) { }


  updateEvent(formValue: any, avatar: any, bg: any, userId: any): Observable<any> {
    let formData = new FormData()

    formData.append('avatar', avatar)
    formData.append('profile_background_image', bg)
    formData.append('username', formValue.username)
    formData.append('first_name', formValue.first_name)
    formData.append('last_name', formValue.last_name)
    formData.append('email', formValue.email)
    formData.append('bio', formValue.bio)

    return this.http.patch(`${environment.apiBaseUrl}/user/${userId}/`, formData)
  }
}
