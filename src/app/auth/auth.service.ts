import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from "src/environment/environment";
import { map } from "rxjs/operators"
import { jwtDecode } from "jwt-decode";
import { HttpClient, HttpEvent } from '@angular/common/http';


@Injectable({
    providedIn:'root'
})


export class AuthService {

    ACCESS_TOKEN = 'access_token'
    REFRESH_TOKEN = 'refresh_token'

    private userDataSubject: BehaviorSubject<any> = new BehaviorSubject(null)
    userData$: Observable<any> = this.userDataSubject.asObservable()

    constructor(private http:HttpClient) {
        if(localStorage.getItem(this.ACCESS_TOKEN) && localStorage.getItem(this.REFRESH_TOKEN)) {
            const access_token = (<string>localStorage.getItem(this.ACCESS_TOKEN))
            const refresh_token = (<string>localStorage.getItem(this.REFRESH_TOKEN))
            this.userDataSubject.next({access_token, refresh_token})       

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
                return res
            })
        )
    }
}