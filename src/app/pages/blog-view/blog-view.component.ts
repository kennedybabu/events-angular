import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GetBlogDetailsService } from 'src/app/services/blog/get-blog-details.service';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.scss']
})
export class BlogViewComponent implements OnInit {
  blogId!: string
  blog!: any


  constructor(private route:ActivatedRoute,
    private getBlogDetailsService: GetBlogDetailsService){}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params) => {
        this.blogId = params['id']
      }
    )

    this.getBlogDetailsService.getDetails(this.blogId).subscribe((res) => {
      this.blog = res
    })

  }

}
