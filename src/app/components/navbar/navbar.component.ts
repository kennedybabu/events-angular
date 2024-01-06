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
  userId!: string

  constructor(
    private dialog: MatDialog,
    private authService:AuthService,
    private router:Router){
      let user = localStorage.getItem('user')

      if(user) {
        this.userId = JSON.parse(user).id
      }
      
    }
  
  @Output() toggleSidenav : EventEmitter<any> = new EventEmitter()
  

  openDialog() {
    const dialogRef =  this.dialog.open(CreateEventComponent);

    dialogRef.afterClosed().subscribe(result => {})    
  }


  toggle(){
    this.toggleSidenav.emit(null)
  }


  logout(){
    this.authService.logout()
    this.router.navigate(['/login'])
  }

  viewProfile(){
    this.router.navigate([`user-profile/${this.userId}`])
  }

}
