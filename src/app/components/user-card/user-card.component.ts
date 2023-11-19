import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  @Input() user!: any
  userId!: any

  constructor(private router:Router){
  }

  viewUserProfile(){
    this.router.navigate([`user-profile/${this.userId}`])
  }


  ngOnInit(): void {
    this.userId = JSON.parse(this.user).id
    console.log(this.userId)
 
  }

}
