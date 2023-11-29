import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CreateEventService } from 'src/app/services/create-event.service';
import { NotificationService } from 'src/app/services/shared/notification.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent {

  constructor(
    private createEventService:CreateEventService,
    public dialogRef: MatDialogRef<CreateEventComponent>,
    private notificatonService: NotificationService){}

  eventImage!: any

  eventForm = new FormGroup({
    body: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    ticket_price: new FormControl('', Validators.required),
    age_limit: new FormControl('',Validators.required)
  })

  onImageSelect(event: any) {
    this.eventImage = event.target.files[0]
  }


  onFormSubmit(){
    // console.log(this.eventForm.value, this.eventImage)
    this.createEventService.createEvent(this.eventForm.value, this.eventImage).subscribe(
      (res)=> {
        if(res?.id){
          this.notificatonService.sendSuccessNofification('Event created', 'success')
          this.dialogRef.close()
        }
      })    
  }

}
