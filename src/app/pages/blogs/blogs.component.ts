import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateBlogComponent } from 'src/app/components/create-blog/create-blog.component';
import { GetBlogsService } from 'src/app/services/blog/get-blogs.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent  implements OnInit { 

  blogs!: any []

  constructor(private getBlogService: GetBlogsService,
    private dialog: MatDialog){}

  ngOnInit(): void {
     this.fetchBlogs()
  }

  openDialog() {
    const dialogRef =  this.dialog.open(CreateBlogComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.fetchBlogs()
    })    
  }
  
  
  fetchBlogs(){
    this.getBlogService.getBlogs().subscribe((res) => {
      this.blogs = res.results
    })
  }

}
