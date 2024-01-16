import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/auth/auth.service';
import { CreateEventComponent } from 'src/app/components/create-event/create-event.component';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  user_data!: any
  user!: any 
  userId!: number
  events!: any
  
  constructor(private dialog: MatDialog, private authService: AuthService, private http:HttpClient){

    this.user = localStorage.getItem('user') 

    if(this.user) {
      this.userId = JSON.parse(this.user).id  
      this.fetchUserDetails(this.userId)
      this.fetchEvents()
    }    
  }
  
  fetchUserDetails(params:any){
    this.http.get(`${environment.apiBaseUrl}/user/${params}/`).subscribe((res) => {
      this.user = res
    })  
    
  }


  fetchEvents(){
    this.http.get(`${environment.apiBaseUrl}/event/`).subscribe((res) => {
      this.events = res 
      console.log(this.events)
    })


    // this.http.get(`${environment.apiBaseUrl}/event/?due=false`).subscribe((res) => {
    //   console.log(res, '...')
    // })
  }

  openDialog() {
    const dialogRef = this.dialog.open(CreateEventComponent, {
           
    });

    dialogRef.afterClosed().subscribe(result => {
      this.fetchEvents()
    })
  }


  ngOnInit(): void {
    // console.log(navigator.geolocation.getCurrentPosition())
  }

  onEventUpdate(){
    this.fetchEvents()
  }
}
