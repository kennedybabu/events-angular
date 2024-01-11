import { Component, Input, OnInit } from '@angular/core';
import {  Params, Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  @Input() blog!: any
  url!: string | undefined
  DJANGO_SERVER = 'http://127.0.0.1:8000'


  constructor(private router:Router){
  }
  
  viewBlogDetails(){
    this.router.navigate([`/blog-view/${this.blog?.id}`])
  }
  
  
  ngOnInit(): void {
    if(this.blog?.banner_image == 'https://images.pexels.com/photos/194098/pexels-photo-194098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1') {
      this.url = this.blog?.banner_image
    } else {
      this.url = `${this.DJANGO_SERVER}${this.blog?.banner_image}` 
      console.log(this.url)
    }
  }

}
