import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CreateBlogService } from 'src/app/services/blog/create-blog.service';
import { NotificationService } from 'src/app/services/shared/notification.service';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss']
})
export class CreateBlogComponent {

  constructor(
    private createBlogService:CreateBlogService,
    public dialogRef: MatDialogRef<CreateBlogComponent>,
    private notificatonService: NotificationService){
    
  }  

  blogBanner!: any | undefined

  blogForm = new FormGroup({
    title: new FormControl('', Validators.required),
    body: new FormControl('', Validators.required)
  })


  onFormSubmit(){
    this.createBlogService.createBlog(this.blogForm.value, this.blogBanner).subscribe((res) => {
      if(res.id) {
        this.dialogRef.close()
        this.notificatonService.sendSuccessNofification('Blog Created', 'success')
      }
    })
  }


  onImageSelect(event: any) {
    this.blogBanner = event.target.files[0]
  }

}
