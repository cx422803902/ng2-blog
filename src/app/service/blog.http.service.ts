import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {BlogTag} from "../blog/model/blog-tag.model";
import {environment} from "../../environments/environment";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import {BlogRemark} from "../blog/model/blog-remark.model";
import {BlogDetail} from "../blog/model/blog-detail.model";
import {RequestArgs} from "@angular/http/src/interfaces";
import {BlogComment} from "../blog/model/blog-comment.model";

const urls = {
  production: {
    tags: 'api/blog/tags',
    remarks: 'api/blog/remarks',
    detail: 'api/blog/detail',
    postComments: 'api/blog/postComments',
    tagPosts: 'api/blog/tagPosts'
  },
  develop: {
    tags: 'api/blog/tags',
    remarks: 'api/blog/remarks',
    detail: 'api/blog/detail',
    postComments: 'api/blog/postComments',
    tagPosts: 'api/blog/tagPosts'
  }
};

@Injectable()
export class BlogHttpSerivice {
  private urlConfigs;

  constructor(private http: Http) {
    if (environment.production) {
      this.urlConfigs = urls.production;
    } else {
      this.urlConfigs = urls.develop;
    }
  }

  getTags(): Promise<BlogTag[]> {
    return this.http
      .get(this.urlConfigs.tags)
      .map(response => {
        if (response.ok) {
          /** it must return a array*/
          let blogTags: BlogTag[] = [];
          let items: any[] = response.json().data;
          for (let i = 0; i < items.length; i++) {
            let item: any = items[i];
            blogTags.push({tagId: item.tagId, tagContent: item.tagContent, tagCount: item.tagCount})
          }
          return blogTags;
        }
      })
      .toPromise();
  }

  getBlogRemarks(): Promise<BlogRemark[]> {
  return this.http
    .get(this.urlConfigs.remarks)
    .map(response => {
      if (response.ok) {
        /** it must return a array*/
        let blogRemarks: BlogRemark[] = [];
        let items: any[] = response.json().data;
        for (let i = 0; i < items.length; i++) {
          let item: any = items[i];
          blogRemarks.push({
            postId: item.postId,
            title: item.title,
            info: item.info,
            infoImg: item.infoImg,
            tags: item.tags,
            postDate: item.postDate
          })
        }
        return blogRemarks;
      }
    })
    .toPromise();
}

  getBlogRemarksByTag(tagId : string): Promise<BlogRemark[]> {
    let requestArgs: RequestArgs = {
      url: this.urlConfigs.tagPosts,
      params: `tagId=${tagId}`
    };
    return this.http
      .get(this.urlConfigs.tagPosts, requestArgs)
      .map(response => {
        if (response.ok) {
          /** it must return a array*/
          let blogRemarks: BlogRemark[] = [];
          let items: any[] = response.json().data;
          for (let i = 0; i < items.length; i++) {
            let item: any = items[i];
            blogRemarks.push({
              postId: item.postId,
              title: item.title,
              info: item.info,
              infoImg: item.infoImg,
              tags: item.tags,
              postDate: item.postDate
            })
          }
          return blogRemarks;
        }
      })
      .toPromise();
  }

  getBlogDetail(postId: number): Promise<BlogDetail> {
    let requestArgs: RequestArgs = {
      url: this.urlConfigs.detail,
      params: `postId=${postId}`
    };
    return this.http
      .get(this.urlConfigs.detail, requestArgs)
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

  getBlogPostComments(postId: number): Promise<BlogComment[]> {
    let requestArgs: RequestArgs = {
      url: this.urlConfigs.postComments,
      params: `postId=${postId}`
    };
    return this.http
      .get(this.urlConfigs.postComments, requestArgs)
      .map(response => {
        if(response.ok) {
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