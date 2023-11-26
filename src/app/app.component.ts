import { Component } from '@angular/core';
import { NotificationService } from './services/shared/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'events';
  notification!: string
  type!: string

  constructor(private notificationService:NotificationService){
    this.notificationService.getSuccessNotification().subscribe((res) => {
      this.notification = res 
      this.type = 'success'

      this.clearAlert()
    })

    this.notificationService.getErrorNotification().subscribe((res) => {
      this.notification = res 
      this.type = 'error'

      this.clearAlert()   
    })
  }


  clearAlert(){
    setTimeout(() => {
      this.notification = ''
    }, 2000)
  }

  
}
