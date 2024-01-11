import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UpdateBlogService } from 'src/app/services/blog/update-blog.service';
import { NotificationService } from 'src/app/services/shared/notification.service';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.scss']
})
export class EditBlogComponent {
  blog!: any
  blogBanner!: any
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<EditBlogComponent>,
    private notificaionService: NotificationService,
    private updateBlogService: UpdateBlogService  ){
      this.blog = data.blog
    }

  editForm = new FormGroup({
    title: new FormControl(''),
    body: new FormControl('')
  })

  onFormSubmit(form: any){
    this.updateBlogService.updateBlog(form.value, this.blogBanner, this.blog.id).subscribe((res) => {
      if(res.id) {
        this.dialogRef.close()
        this.notificaionService.sendSuccessNofification('Blog Updated', 'success')
      }
    })
  }

  closeDialog(){
    this.dialogRef.close()
  }
}
