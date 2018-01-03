import {AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {Post} from '../model/model.post';
import {Comment} from '../model/model.comment';
import {DatasourceService} from '../service/DatasourceService';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-postpage',
  templateUrl: './postpage.component.html',
  styleUrls: ['./postpage.component.scss']
})
export class PostpageComponent implements OnInit {

  private _post: Post = null;
  private _comments: Comment[] = [];
  @ViewChild('postNewComment')
  private newCommentText: ElementRef;
  constructor(private datasourceService: DatasourceService, private route: ActivatedRoute) { }

  ngOnInit() {
    const postId: number = this.route.snapshot.params['id'];
    this.datasourceService
      .loadPost(postId)
      .subscribe(post => {
        this._post = post;
      });
    this.datasourceService
      .loadPostComments(postId)
      .subscribe(comments => this._comments = comments);
  }

  submitComment(): boolean {
    const content = this.newCommentText.nativeElement.value;
    const author = 'unkonw';
    const parentId = null;
    this.newCommentText.nativeElement.value = '';
    this.datasourceService.submitNewComment(this.post.id, parentId, author, content)
      .subscribe(commentId => {
        const comment: Comment = new Comment(commentId, this.post.id, parentId, author, content, new Date());
        this.comments.push(comment);
        alert('提交成功');
      });
    return false;
  }

  get post(): Post {
    return this._post;
  }

  set post(value: Post) {
    this._post = value;
  }

  get comments(): Comment[] {
    return this._comments;
  }

  set comments(value: Comment[]) {
    this._comments = value;
  }
}
