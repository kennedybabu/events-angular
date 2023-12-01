import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CreateCommentService } from 'src/app/services/comment/create-comment.service';
import { GetCommentsService } from 'src/app/services/comment/get-comments.service';
import { environment } from 'src/environment/environment';
@Component({
  selector: 'app-eventpage',
  templateUrl: './eventpage.component.html',
  styleUrls: ['./eventpage.component.scss']
})
export class EventpageComponent implements OnInit {
  eventId!: any
  event!: any 
  eventDate!:any
  eventMonth!: any

 months = {
  0: 'Jan',
  1: 'Feb',
  2: "Mar",
  3: 'Apr',
  4: 'May',
  5: 'Jun',
  6: 'Jul',
  7: 'Aug',
  8: 'Sep',
  9: 'Oct',
  10: 'Nov',
  11: 'Dec'
 }

  constructor(
    private route:ActivatedRoute, 
    private http:HttpClient, 
    private router:Router,
    private createCommentService: CreateCommentService,
    private getCommentsService: GetCommentsService){
    this.route.params.subscribe(
      (params:Params) => {
        this.eventId = params['id']
      }
    )
  }


  ngOnInit(): void {
    this.http.get(`${environment.apiBaseUrl}/event/${this.eventId}`).subscribe(
      (res) => {
        this.event = res
        this.eventMonth = new Date(this.event.date).getMonth()
        this.eventDate = new Date(this.event.date).getDate()        
      }
    )


    this.getCommentsService.getComments(this.eventId).subscribe((res) => {
      console.log(res.results)
    })
  }


  viewEventAuthorProfile(){
    this.router.navigate([`user-profile/${this.event?.author?.id}`])
  }


  commentForm = new FormGroup({
    body: new FormControl('', Validators.required)
  })


  onCommentCreate(){
    this.createCommentService.createComment(this.commentForm.value, this.eventId).subscribe((res) => {
      console.log(res)
    })
  }

}
