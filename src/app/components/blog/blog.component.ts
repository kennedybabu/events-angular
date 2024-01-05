import { Component, Input, OnInit } from '@angular/core';
import {  Params, Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent  {
  @Input() blog!: any

  constructor(private router:Router){
    
  }

  viewBlogDetails(){
    this.router.navigate([`/blog-view/${this.blog?.id}`])
  }

}
