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
  commentAuthor: string;

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
    let comment: BlogComment = {
      id: undefined,
      postId: this.blogDetail.id,
      author: this.commentAuthor,
      content: this.commentText,
    };
    this.blogHttpService.commitBlogComment(comment)
      .then(response => {
        if(response.ok) {
          let data = response.json();
          comment.id = data.id;
          comment.postDate = data.postData;
          this.blogComments.push(comment);
          this.commentText = "";
          this.commentAuthor = "";
          alert('commit comment success!');
        }else {
          console.log('commit comment failed with code' + response.status);
        }
      })
      .catch(message => console.log('commit comment failed cause of' + message));
  }
}
