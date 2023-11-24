import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AttendService } from 'src/app/services/event/attend.service';
import { EditEventComponent } from '../edit-event/edit-event.component';
import { DeleteEventService } from 'src/app/services/event/delete-event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent {

  @Input() event!: any 
  @Output() eventUpdated = new EventEmitter<boolean>()

  constructor(
    private router:Router, 
    private attendService:AttendService,
    private dialog:MatDialog,
    private deleteEventService: DeleteEventService){}

  viewEventDetails(){
    this.router.navigate([`/event/${this.event?.id}`])
  }  


  attendEvent(){
    this.attendService.attendEvent(this.event.id).subscribe((res) => {
      console.log(res)
      this.eventUpdated.emit(true)
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(EditEventComponent, {
           data: {
            event: this.event
           }
    });
  
  }

  deleteEvent(){
    this.deleteEventService.deleteEvent(this.event.id).subscribe((res) => {
      console.log(res)
      this.eventUpdated.emit(true)
    })
  }

}
