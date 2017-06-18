import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {URLS} from '../config/web-api.config';
import {BlogComment} from '../model/blog-comment.model';
import {BlogDetail} from '../model/blog-detail.model';
import {BlogSummary} from '../model/blog-summary.model';
import {BlogTag} from '../model/blog-tag.model';
@Injectable()
export class BlogHttpService {
  constructor(private http: Http) {
  }

  loadTags(): Promise<BlogTag[]> {
    return this.http
      .post(URLS.tags, {})
      .map(response => {
        if (response.ok) {
          /** it must return a array*/
          let blogTags: BlogTag[] = [];
          let items: any[] = response.json();
          for (let i = 0; i < items.length; i++) {
            let item: any = items[i];
            blogTags.push({id: item.id, name: item.name, blogCount: item.blogCount});
          }
          return blogTags;
        }
      })
      .toPromise();
  }

  loadBlogSummaries(): Promise<BlogSummary[]> {
    return this.http
      .post(URLS.sumarries, {})
      .map(response => {
        if (response.ok) {
          /** it must return a array*/
          let blogSummaries: BlogSummary[] = [];
          let items: any[] = response.json();
          for (let i = 0; i < items.length; i++) {
            let item: any = items[i];
            blogSummaries.push({
              id: item.id,
              title: item.title,
              info: item.info,
              infoImg: item.infoImg,
              tags: item.tags,
              postDate: item.postDate
            });
          }
          return blogSummaries;
        }
      })
      .toPromise();
  }

  loadBlogSummariesByTag(tagId: number): Promise<BlogSummary[]> {
    let body : any = {
      id: tagId
    };
    return this.http
      .post(URLS.tagPosts, body)
      .map(response => {
        if (response.ok) {
          /** it must return a array*/
          let blogSummaries: BlogSummary[] = [];
          let items: any[] = response.json();
          for (let i = 0; i < items.length; i++) {
            let item: any = items[i];
            blogSummaries.push({
              id: item.id,
              title: item.title,
              info: item.info,
              infoImg: item.infoImg,
              tags: item.tags,
              postDate: item.postDate
            });
          }
          return blogSummaries;
        }
      })
      .toPromise();
  }

  loadBlogDetail(id: number): Promise<BlogDetail> {
    let body: any = {
      id: id
    };
    return this.http
      .post(URLS.detail, body)
      .map(response => {
        if (response.ok) {
          let item: any = response.json();
          return {
            id: item.id,
            title: item.title,
            info: item.info,
            infoImg: item.infoImg,
            content: item.content,
            tags: item.tags,
            updateDate: item.updateDate,
            postDate: item.postDate
          };
        }
        return null;
      })
      .toPromise();
  }

  loadBlogCommentsByPost(postId: number): Promise<BlogComment[]> {
    let body: any = {
      postId: postId
    };
    return this.http
      .post(URLS.postComments, body)
      .map(response => {
        if (response.ok) {
          /** it must return a array*/
          let blogComments: BlogComment[] = [];
          let items: any[] = response.json();
          for (let i = 0; i < items.length; i++) {
            let item: any = items[i];
            blogComments.push({
              id: item.id,
              postId: item.postId,
              author: item.author,
              content: item.content,
              postDate: item.postDate,
              parentId: item.parentId
            });
          }
          return blogComments;
        }
      })
      .toPromise();
  }

  /**if success, must return the generator id*/
  commitBlogComment(comment: BlogComment): Promise<Response> {
    let body : any = {
      postId: comment.postId,
      author: comment.author,
      content: comment.content,
      parentId: comment.parentId
    };
    return this.http
      .post(URLS.commitComment, body).toPromise();
  }

  commitBlogPost(post: BlogDetail): Promise<Response> {
    let body: any = {
      info: post.info,
      infoImg: post.infoImg,
      content: post.content,
      tags: post.tags
    };
    return this.http
      .post(URLS.commitPost, body).toPromise();
  }
}