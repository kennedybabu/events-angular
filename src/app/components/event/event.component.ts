import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AttendService } from 'src/app/services/event/attend.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent {

  @Input() event!: any 

  constructor(private router:Router, private attendService:AttendService){}

  viewEventDetails(){
    this.router.navigate([`/event/${this.event?.id}`])
  }  


  attendEvent(){
    this.attendService.attendEvent(this.event.id)
  }

}
