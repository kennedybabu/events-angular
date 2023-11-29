import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditProfileComponent } from 'src/app/components/edit-profile/edit-profile.component';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  userObject!: any
  user!: any 
  events!: any


  constructor(
    private http:HttpClient,
    private dialog: MatDialog){
    let user = localStorage.getItem('user')
    if(user){
      let userObjeString = JSON.parse(user) 
      this.user = userObjeString
    }

  }


  ngOnInit(): void {
    this.http.get(`${environment.apiBaseUrl}/user/${this.user.id}`).subscribe((res) => {
      this.userObject = res
    })

    this.http.get(`${environment.apiBaseUrl}/event/?author__public_id=${this.user.id}`).subscribe((res: any) => {
      this.events = res.filter((event: any) => event.author.id === this.user.id)
    })

  }

  openDialog() {
    const dialogRef = this.dialog.open(EditProfileComponent, {
        data: {
          user: this.userObject
        }
    });  
  }

}
