import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http:HttpClient) { }

  // signUp(formvalue: any){
  //   let userObject = {
  //     "first_name": formvalue.first_name,
  //     "last_name": formvalue.last_name,
  //     "email": formvalue.email,
  //     "bio": formvalue.bio,
  //     "username": formvalue.username,
  //     "password": formvalue.password
  //   }
  //   return this.http.post(`${environment.apiBaseUrl}/auth/register/`, userObject)
  //   .pipe(
  //     map((res:any) => {
  //       const access_token = res.access
  //       const refresh_token = res.refresh 
  //       const user = res.user

  //       this.userDataSubject.next({access_token, refresh_token, user})
  //       localStorage.setItem(this.ACCESS_TOKEN, access_token)
  //       localStorage.setItem(this.REFRESH_TOKEN, refresh_token)
  //       localStorage.setItem('user', JSON.stringify(user))
  //       return res
  //     })
  //   )
  // } 

  
}
