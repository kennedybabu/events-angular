import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  eventId!: any
  event!: any

  constructor(private route:ActivatedRoute, private http:HttpClient, private router:Router){
    this.route.params.subscribe(
      (params:Params) => {
        this.eventId = params['id']
      }
    )
  }


  ngOnInit(): void {
    this.http.get(`${environment.apiBaseUrl}/event/${this.eventId}`).subscribe(
      (res) => {
        this.event = res
        console.log(this.event)
      }
    )
  }


  viewEventAuthorProfile(){
    this.router.navigate([`user-profile/${this.event?.author?.id}`])
  }

}
