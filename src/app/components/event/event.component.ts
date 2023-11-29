import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AttendService } from 'src/app/services/event/attend.service';
import { EditEventComponent } from '../edit-event/edit-event.component';
import { DeleteEventService } from 'src/app/services/event/delete-event.service';
import { NotificationService } from 'src/app/services/shared/notification.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  @Input() event!: any 
  @Output() eventUpdated = new EventEmitter<boolean>()
  userId!: any
  DJANGO_SERVER = 'http://127.0.0.1:8000'
  url!:any

  constructor(
    private router:Router, 
    private attendService:AttendService,
    private dialog:MatDialog,
    private deleteEventService: DeleteEventService,
    private notificationService: NotificationService){
      let user = localStorage.getItem('user')

      if(user){
        this.userId = JSON.parse(user).id
      }
    
    }

  viewEventDetails(){
    this.router.navigate([`/event/${this.event?.id}`])
  }  

  ngOnInit(): void {
    if(this.event.banner == null) {
      this.url = this.event.banner
    } else {
      this.url = `${this.DJANGO_SERVER}${this.event.banner}`
    }
  }

  attendEvent(){
    this.attendService.attendEvent(this.event.id).subscribe((res) => {
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
      this.notificationService.sendSuccessNofification('Event deleted', 'success')
      this.eventUpdated.emit(true)
    })
  }

}
