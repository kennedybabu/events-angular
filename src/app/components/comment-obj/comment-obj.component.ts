import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comment-obj',
  templateUrl: './comment-obj.component.html',
  styleUrls: ['./comment-obj.component.scss']
})
export class CommentObjComponent {
  @Input() comment!: any

}
