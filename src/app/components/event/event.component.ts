import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent {

  @Input() event!: any 

  constructor(private router:Router){}

  viewEventDetails(){
    this.router.navigate([`/event/${this.event?.id}`])
  }  

}
