import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateEventComponent } from '../create-event/create-event.component';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(
    private dialog: MatDialog,
    private authService:AuthService,
    private router:Router){}
  
  @Output() toggleSidenav : EventEmitter<any> = new EventEmitter()

  openDialog() {
    this.dialog.open(CreateEventComponent);
  }


  toggle(){
    this.toggleSidenav.emit(null)
  }


  logout(){
    this.authService.logout()
    this.router.navigate(['/login'])
  }

}
