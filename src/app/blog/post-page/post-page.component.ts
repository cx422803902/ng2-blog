import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {BlogComment} from '../../model/blog-comment.model';
import {BlogDetail, DEFAULT_BLOG_DETAIL} from '../../model/blog-detail.model';
import {BlogHttpService} from '../blog.http.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class PostPageComponent implements OnInit {
  blogDetail: BlogDetail = DEFAULT_BLOG_DETAIL;
  blogComments: BlogComment[] = [];
  commentText: string;

  constructor(private blogHttpService: BlogHttpService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.loadPostDetail(this.route.snapshot.params);
    this.route.params
      .subscribe(params => this.loadPostDetail(params));
  }

  private loadPostDetail(params: Params): void {
    this.blogHttpService.loadBlogDetail(params['id'])
      .then(detail => {
        this.blogDetail = detail;
        jQuery(".post-content").html(this.blogDetail.content);
      });
    this.blogHttpService.loadBlogCommentsByPost(params['id'])
      .then(comments => this.blogComments = comments);
  }

  doSubmitComment(): void {
    console.log('this is comment\' input');
    console.log(this.commentText);
    //TODO then send post to server
  }
}
