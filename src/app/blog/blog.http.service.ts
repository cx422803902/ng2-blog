import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {RequestArgs} from '@angular/http/src/interfaces';
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
      .get(URLS.tags)
      .map(response => {
        if (response.ok) {
          /** it must return a array*/
          let blogTags: BlogTag[] = [];
          let items: any[] = response.json().data;
          for (let i = 0; i < items.length; i++) {
            let item: any = items[i];
            blogTags.push({tagId: item.tagId, tagContent: item.tagContent, tagCount: item.tagCount});
          }
          return blogTags;
        }
      })
      .toPromise();
  }

  loadBlogSummaries(): Promise<BlogSummary[]> {
    return this.http
      .get(URLS.sumarries)
      .map(response => {
        if (response.ok) {
          /** it must return a array*/
          let blogSummaries: BlogSummary[] = [];
          let items: any[] = response.json().data;
          for (let i = 0; i < items.length; i++) {
            let item: any = items[i];
            blogSummaries.push({
              postId: item.postId,
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
    let requestArgs: RequestArgs = {
      url: URLS.tagPosts,
      params: `tagId=${tagId}`
    };
    return this.http
      .get(URLS.tagPosts, requestArgs)
      .map(response => {
        if (response.ok) {
          /** it must return a array*/
          let blogSummaries: BlogSummary[] = [];
          let items: any[] = response.json().data;
          for (let i = 0; i < items.length; i++) {
            let item: any = items[i];
            blogSummaries.push({
              postId: item.postId,
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

  loadBlogDetail(postId: number): Promise<BlogDetail> {
    let requestArgs: RequestArgs = {
      url: URLS.detail,
      params: `postId=${postId}`
    };
    return this.http
      .get(URLS.detail, requestArgs)
      .map(response => {
        if (response.ok) {
          let item: any = response.json().data;
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
    let requestArgs: RequestArgs = {
      url: URLS.postComments,
      params: `postId=${postId}`
    };
    return this.http
      .get(URLS.postComments, requestArgs)
      .map(response => {
        if (response.ok) {
          /** it must return a array*/
          let blogComments: BlogComment[] = [];
          let items: any[] = response.json().data;
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
}