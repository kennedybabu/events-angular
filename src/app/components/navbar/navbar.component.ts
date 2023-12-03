import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateEventComponent } from '../create-event/create-event.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private dialog: MatDialog){}
  
  @Output() toggleSidenav : EventEmitter<any> = new EventEmitter()

  openDialog() {
    this.dialog.open(CreateEventComponent);
  }


  toggle(){
    this.toggleSidenav.emit(null)
  }

}
