import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditEventComponent } from '../edit-event/edit-event.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-draft',
  templateUrl: './event-draft.component.html',
  styleUrls: ['./event-draft.component.scss']
})
export class EventDraftComponent implements OnInit {

  @Input() event!: any
  url!: any 
  userId!: string
  DJANGO_SERVER = 'http://127.0.0.1:8000'


  constructor(
    private dialog:MatDialog,
    private router:Router
    ){
      let user = localStorage.getItem('user')

      if(user){
        this.userId = JSON.parse(user).id
      }
    }

  openDialog() {
    const dialogRef = this.dialog.open(EditEventComponent, {
        data: {
          event: this.event
        }
    });  
  }


  ngOnInit(): void {
    if(this.event.banner == null) {
      this.url = this.event.banner
    } else {
      this.url = `${this.DJANGO_SERVER}${this.event.banner}`
    }
  }


  viewEvent(){
    this.router.navigate([`event/${this.event?.id}`])
  }

}
