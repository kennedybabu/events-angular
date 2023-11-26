import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  typeS!: any
  
  @Input() notification!: any
  type!: any 

  constructor(){
  }


  ngOnInit(): void {
    console.log(this.notification)
    this.type = this.notification?.type
  }
}
