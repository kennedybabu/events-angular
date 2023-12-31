import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from "src/environment/environment";
import { catchError, map } from "rxjs/operators"
import { jwtDecode } from "jwt-decode";
import { HttpClient, HttpEvent } from '@angular/common/http';


@Injectable({
    providedIn:'root'
})


export class AuthService {

    ACCESS_TOKEN = 'access_token'
    REFRESH_TOKEN = 'refresh_token'
    USER = 'user'

    private userDataSubject: BehaviorSubject<any> = new BehaviorSubject(null)
    userData$: Observable<any> = this.userDataSubject.asObservable()


    constructor(private http:HttpClient) {
        if(localStorage.getItem(this.ACCESS_TOKEN) && localStorage.getItem(this.REFRESH_TOKEN)) {
            const access_token = (<string>localStorage.getItem(this.ACCESS_TOKEN))
            const refresh_token = (<string>localStorage.getItem(this.REFRESH_TOKEN))
            const user = (<string>localStorage.getItem(this.USER))
            this.userDataSubject.next({access_token, refresh_token, user})
        }
    }


    get userData(): any {
        return this.userDataSubject.value
    }


    login(email: string, password: string): Observable<any> {
        return this.http.post(`${environment.apiBaseUrl}/auth/login/`, { email,password}).pipe(
            map((res: any) => {
                const access_token = res.access
                const refresh_token = res.refresh 
                const user = res.user

                this.userDataSubject.next({access_token, refresh_token, user})
                localStorage.setItem(this.ACCESS_TOKEN, access_token)
                localStorage.setItem(this.REFRESH_TOKEN, refresh_token)
                localStorage.setItem('user', JSON.stringify(user))
                return res
            })
        )
    }


    logout(): void {
        localStorage.removeItem(this.ACCESS_TOKEN)
        localStorage.removeItem('user')
        localStorage.removeItem(this.REFRESH_TOKEN)
        this.userDataSubject.next(null)
    }


    get isAuthenticated(): boolean {
        const refresh_token = this.userDataSubject.value?.refresh_token 
        if(!refresh_token) {
            return false
        }
        return this.isAuthTokenValid(refresh_token)
    }


    isAuthTokenValid(token: string): boolean {
        const decoded: any = jwtDecode(token)

        const expMilSecond: number = decoded?.exp * 1000 
        const currentTime = Date.now()
        if(expMilSecond < currentTime){
            return false
        }
        return true
    }
  

    generateNewTokens(): Observable<HttpEvent<any>> {
        const refresh_token = localStorage.getItem('refresh_token') 
        console.log('invalid token, called ---')
        return this.http.post(`${environment.apiBaseUrl}/auth/refresh/`, 
        { "refresh": refresh_token }).pipe(
            map((res: any) => {
                console.log('called inside tokens')
                const access_token = res.access 
                this.userDataSubject.next({access_token})
                localStorage.setItem(this.ACCESS_TOKEN, access_token)
                return res
            }),
            catchError((error) => {
                console.log(error)
                throw error
            })
        )
    }
    

    getUserDataFromToken(token: string): any {
        const decoded: any = jwtDecode(token)
        return decoded.data
    }


  signUp(formvalue: any){
    let userObject = {
      "first_name": formvalue.first_name,
      "last_name": formvalue.last_name,
      "email": formvalue.email,
      "bio": formvalue.bio,
      "username": formvalue.username,
      "password": formvalue.password
    }
    return this.http.post(`${environment.apiBaseUrl}/auth/register/`, userObject)
    .pipe(
      map((res:any) => {
        const access_token = res.token
        const refresh_token = res.refresh 
        const user = res.user

        this.userDataSubject.next({access_token, refresh_token, user})
        localStorage.setItem(this.ACCESS_TOKEN, access_token)
        localStorage.setItem(this.REFRESH_TOKEN, refresh_token)
        localStorage.setItem('user', JSON.stringify(user))
        return res
      })
    )
  }

}