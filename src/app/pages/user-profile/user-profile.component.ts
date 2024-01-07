import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditProfileComponent } from 'src/app/components/edit-profile/edit-profile.component';
import { GetBlogsService } from 'src/app/services/blog/get-blogs.service';
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
  currentTile = 'dashboard'
  blogs!: any 


  constructor(
    private http:HttpClient,
    private dialog: MatDialog,
    private getBlogsService: GetBlogsService){

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

    this.http.get(`${environment.apiBaseUrl}/blog/?author__public_id=${this.user.id}`).subscribe((res: any) => {    
      this.blogs = res.results
    })

  }

  openDialog() {
    const dialogRef = this.dialog.open(EditProfileComponent, {
        data: {
          user: this.userObject
        }
    });  
  }


  updateTile(event: any) {
    this.currentTile = event
  }

}
