import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-obj',
  templateUrl: './comment-obj.component.html',
  styleUrls: ['./comment-obj.component.scss']
})
export class CommentObjComponent implements OnInit {
  @Input() comment!: any
  url!: any
  DJANGO_SERVER = 'http://127.0.0.1:8000'

  ngOnInit(): void {
    if(this.comment == null) {
      this.url = this.comment?.author?.avatar
    } else {
      this.url = `${this.DJANGO_SERVER}${this.comment?.author?.avatar}`
    }
  }
  

}
