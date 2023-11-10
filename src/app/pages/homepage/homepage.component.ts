import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/auth/auth.service';
import { CreateEventComponent } from 'src/app/components/create-event/create-event.component';
import { jwtDecode } from "jwt-decode";
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
  
  constructor(private dialog: MatDialog, private authService: AuthService, private http:HttpClient){
    let user = authService.userData 
    this.user_data = jwtDecode(user.access_token)


    this.user = localStorage.getItem('user') 

    if(this.user) {
      this.userId = JSON.parse(this.user).id   
      this.fetchUserDetails(this.userId)
    }    
  }
  
  fetchUserDetails(params:any){
    console.log(params)
    this.http.get(`${environment.apiBaseUrl}/user/${params}/`).subscribe((res) => {
      this.user = res
    })     
    
  }

  openDialog() {
    this.dialog.open(CreateEventComponent, {
      data: {
        animal: 'panda',
      },
    });
  }


  ngOnInit(): void {
    
  }
}
