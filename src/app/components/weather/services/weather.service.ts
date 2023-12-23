import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class WeatherService implements OnInit {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    let apiKey = 'e9ea819bcdd52da846eff9cba84fb275'
    return this.http.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${1.2921}&lon=${36.8219}&exclude=${'daily'}&appid=${apiKey}`)
  }

  ngOnInit(): void {
  }
}
