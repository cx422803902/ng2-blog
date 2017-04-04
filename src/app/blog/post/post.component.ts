import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {BlogHttpSerivice} from "../../service/blog.http.service";
import {BlogDetail, DEFAULT_BLOG_DETAIL} from "../model/blog-detail.model";
import {BlogComment} from "../model/blog-comment.model";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.less']
})
export class PostComponent implements OnInit {
  private blogDetail: BlogDetail = DEFAULT_BLOG_DETAIL;
  private blogComments: BlogComment[] = [];

  constructor(private route: ActivatedRoute, private blogHttpService: BlogHttpSerivice) {
    this.loadPostDetail(this.route.snapshot.params);
  }

  ngOnInit() {
    console.log('this is the begin of ngInit');
    this.route.params
      .subscribe(params => {
        this.loadPostDetail(params);
      });
  }

  private loadPostDetail(params: Params): void {
    this.blogHttpService.getBlogDetail(params['postId'])
      .then(blogDetail => {
        this.blogDetail = blogDetail;
        console.log(this.blogDetail);
      });
    this.blogHttpService.getBlogPostComments(params['postId'])
      .then(blogComments => {
        this.blogComments = blogComments;
        console.log(blogComments);
      })
  }

}
