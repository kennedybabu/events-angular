import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-draft',
  templateUrl: './blog-draft.component.html',
  styleUrls: ['./blog-draft.component.scss']
})
export class BlogDraftComponent {

  constructor(private router: Router) {}

  @Input() blog!: any

  viewBlogDetails(){
    this.router.navigate([`blog-view/${this.blog?.id}`])
  }

}
