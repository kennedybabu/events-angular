import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateBlogService } from 'src/app/services/blog/create-blog.service';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss']
})
export class CreateBlogComponent {

  constructor(private createBlogService:CreateBlogService){
    
  }  

  blogBanner!: any | undefined

  blogForm = new FormGroup({
    title: new FormControl('', Validators.required),
    body: new FormControl('', Validators.required)
  })


  onFormSubmit(){
    this.createBlogService.createBlog(this.blogForm.value).subscribe((res) => {
      console.log(res)
    })
  }


  onImageSelect(event: any) {
    this.blogBanner = event.target.files[0]
  }

}
