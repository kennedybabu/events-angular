import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UpdateEventService } from 'src/app/services/event/update-event.service';
import { NotificationService } from 'src/app/services/shared/notification.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss']
})
export class EditEventComponent {
  event!: any

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  private updateEventService: UpdateEventService,
  public dialogRef: MatDialogRef<EditEventComponent>,
  private notificationService: NotificationService
   ){
    this.event = data.event

  }


  editForm = new FormGroup({
    body: new FormControl(''),
    date: new FormControl(''),
    price: new FormControl(''),
    age: new FormControl('')
  })


  onFormSubmit(form: any){
    this.updateEventService.updateEvent(form.value, this.event.id).subscribe((res) => {
      if(res.id){
        this.dialogRef.close()
        this.notificationService.sendSuccessNofification('Event Updated', 'success')
      }
    })
  }

}
