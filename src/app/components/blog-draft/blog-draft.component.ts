import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DeleteBlogService } from 'src/app/services/blog/delete-blog.service';
import { NotificationService } from 'src/app/services/shared/notification.service';

@Component({
  selector: 'app-blog-draft',
  templateUrl: './blog-draft.component.html',
  styleUrls: ['./blog-draft.component.scss']
})
export class BlogDraftComponent {

  constructor(
    private router: Router, 
    private deleteBlogService:DeleteBlogService,
    private notificationService:NotificationService) {}

  @Input() blog!: any
  @Output() blogsUpdated = new EventEmitter<boolean>()

  viewBlogDetails(){
    this.router.navigate([`blog-view/${this.blog?.id}`])
  }


  deleteBlog() {
    this.deleteBlogService.deleteBlog(this.blog.id).subscribe((res) => {
      this.blogsUpdated.emit(true)
      this.notificationService.sendSuccessNofification('blog deleted', 'success')
    })
  }

}
