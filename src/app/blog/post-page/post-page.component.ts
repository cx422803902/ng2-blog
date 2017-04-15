import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {BlogComment} from '../../model/blog-comment.model';
import {BlogDetail, DEFAULT_BLOG_DETAIL} from '../../model/blog-detail.model';
import {BlogHttpService} from '../blog.http.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.less']
})
export class PostPageComponent implements OnInit {
  private blogDetail: BlogDetail = DEFAULT_BLOG_DETAIL;
  private blogComments: BlogComment[] = [];
  private commentText: string;

  constructor(private blogHttpService: BlogHttpService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.loadPostDetail(this.route.snapshot.params);
    this.route.params
      .subscribe(params => this.loadPostDetail(params));
  }

  private loadPostDetail(params: Params): void {
    this.blogHttpService.loadBlogDetail(params['postId'])
      .then(detail => this.blogDetail = detail);
    this.blogHttpService.loadBlogCommentsByPost(params['postId'])
      .then(comments => this.blogComments = comments);
  }

  doSubmitComment(): void {
  }
}
