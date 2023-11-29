import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditEventComponent } from '../edit-event/edit-event.component';

@Component({
  selector: 'app-event-draft',
  templateUrl: './event-draft.component.html',
  styleUrls: ['./event-draft.component.scss']
})
export class EventDraftComponent {

  @Input() event!: any

  constructor(private dialog:MatDialog){}

  openDialog() {
    const dialogRef = this.dialog.open(EditEventComponent, {
        data: {
          event: this.event
        }
    });  
  }

}
