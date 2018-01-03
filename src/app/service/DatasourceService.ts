import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Archive} from '../model/model.archive';
import {Category} from '../model/model.category';
import {Summary} from '../model/model.summary';
import {Tag} from '../model/model.tag';
import {Post} from '../model/model.post';
import {Comment} from '../model/model.comment';
import {Http} from '@angular/http';
import {Response, RequestOptionsArgs, RequestOptions, Headers} from '@angular/http';

/**
 * Created by chenxing on 2017/7/4.
 */
const demoContent = `
<p style="border: 0px; font-family: Lato, sans-serif; font-size: 16px; margin: 0px 0px 24px; outline: 0px; padding: 0px; vertical-align: baseline; color: #2b2b2b; line-height: 24px;">xml Schema是用来描述xml文档内元素的定义的一种标准格式，许多模式匹配器就是直接利用xml Schema来解析xml文档的，如spring。</p>
<p style="border: 0px; font-family: Lato, sans-serif; font-size: 16px; margin: 0px 0px 24px; outline: 0px; padding: 0px; vertical-align: baseline; color: #2b2b2b; line-height: 24px;">1.xsd本身也是xml文件,所以它也会使用xsd文件来定义xsd文件本身的元素，于是最终使用的则是http://www.w3.org/2001/XMLSchema-instance ，这个文件定义了最基本的document、annotation、import等元素。这就有些类似于各个编程语言中最底层暴露的基本接口了,所有的其他xsd文件都是基于这些基本的元素以及引用的xsd文件来定义的。</p>
<p style="border: 0px; font-family: Lato, sans-serif; font-size: 16px; margin: 0px 0px 24px; outline: 0px; padding: 0px; vertical-align: baseline; color: #2b2b2b; line-height: 24px;">2.xsd文件和xml文件一样，会在文档使用某些元素之前通过namespace的方式来引入xsd文件，一般会直接在文档的根目录引入xsd文件:</p>
<pre style="border: 1px solid rgba(0, 0, 0, 0.0980392); font-family: monospace, serif; font-size: 15px; margin-top: 0px; margin-bottom: 24px; outline: 0px; padding: 12px; vertical-align: baseline; line-height: 24px; box-sizing: border-box; max-width: 100%; overflow: auto; white-space: pre-wrap; word-wrap: break-word; color: #2b2b2b;">&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xmlns:mvc="http://www.springframework.org/schema/mvc"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
       http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context.xsd http://www.springframework.org/schema/mvc http://www.springframework.org/schema/mvc/spring-mvc.xsd"&gt;

    &lt;context:annotation-config/&gt;
    &lt;bean id="mvcConfiguration" class="org.goiot.spring.JBlogMVCConfiguration"/&gt;

    &lt;mvc:resources mapping="res/**" location="/res/"&gt;&lt;/mvc:resources&gt;
    &lt;mvc:interceptors&gt;
        &lt;bean id="globalAttrInterceptor" class="org.springframework.web.servlet.handler.WebRequestHandlerInterceptorAdapter"&gt;
            &lt;constructor-arg&gt;
                &lt;bean class="org.goiot.spring.interceptor.GlobalAttrInterceptor"/&gt;
            &lt;/constructor-arg&gt;
        &lt;/bean&gt;
        &lt;bean id="menuInterceptor" class="org.goiot.spring.interceptor.MenuInterceptor"&gt;&lt;/bean&gt;
    &lt;/mvc:interceptors&gt;
&lt;/beans&gt;</pre>
<p c="border: 0px; font-family: Lato, sans-serif; font-size: 16px; margin: 0px 0px 0px; outline: 0px; padding: 0px; vertical-align: baseline; color: #2b2b2b; line-height: 24px;">其中, xmlns:ns=&ldquo;&rdquo;表示xml文件中&lt;ns:sometag&gt;&lt;/ns:sometag&gt;的定义是在xmlns:ns中定义的。在根元素中除了声明xsd表示的命名空间，还需要指出xsd文件的位置，有两种方式来指出:</p>
<p c="border: 0px; font-family: Lato, sans-serif; font-size: 16px; margin: 0px 0px 24px; outline: 0px; padding: 0px; vertical-align: baseline; color: #2b2b2b; line-height: 24px;">a.&nbsp;xsi:schemaLocation=&rdquo;namespace1 location1 namespace2 location2 &hellip;&rdquo;</p>
<p c="border: 0px; font-family: Lato, sans-serif; font-size: 16px; margin: 0px 0px 24px; outline: 0px; padding: 0px; vertical-align: baseline; color: #2b2b2b; line-height: 24px;">b. xsi:noNamespaceSchemaLocation=&rdquo;location1 location2&Prime;</p>
<p c="border: 0px; font-family: Lato, sans-serif; font-size: 16px; margin: 0px 0px 24px; outline: 0px; padding: 0px; vertical-align: baseline; color: #2b2b2b; line-height: 24px;">一般自己扩展的xsd都使用第二种方式如xsi:noNamespaceSchemaLocation=&rdquo;classpath:META-INF/&hellip;..xsd&rdquo;然后将xsd防止在类路径中提供给xml文件的模式匹配器使用。</p>
<p c="border: 0px; font-family: Lato, sans-serif; font-size: 16px; margin: 0px 0px 24px; outline: 0px; padding: 0px; vertical-align: baseline; color: #2b2b2b; line-height: 24px;">3.xsd文件和xml文件的元素中(一般是根元素)有targetNamespace属性来声明该xsd文件所表示的命名空间,如下:</p>
<pre c="border: 1px solid rgba(0, 0, 0, 0.0980392); font-family: monospace, serif; font-size: 15px; margin-top: 0px; margin-bottom: 24px; outline: 0px; padding: 12px; vertical-align: baseline; line-height: 24px; box-sizing: border-box; max-width: 100%; overflow: auto; white-space: pre-wrap; word-wrap: break-word; color: #2b2b2b;">&lt;xsd:schema xmlns="http://www.springframework.org/schema/beans"
      xmlns:xsd="http://www.w3.org/2001/XMLSchema"
      targetNamespace="http://www.springframework.org/schema/beans"&gt;
&lt;/xsd:schema&gt;</pre>
<p>&nbsp;</p>
<p c="border: 0px; font-family: Lato, sans-serif; font-size: 16px; margin: 0px 0px 24px; outline: 0px; padding: 0px; vertical-align: baseline; color: #2b2b2b; line-height: 24px;">targetNamespace就是我们平常定义xml文件时所声明的namespace了，xml文件的xmlns和schemaLocation共同确定了xsd文件的所在位置和具体的定义。</p>
  `;

@Injectable()
export class DatasourceService {

  constructor(private http: Http) { }
  loadAllCategories(): Observable<Category[]> {
    return this.http.post('/api/category/loadAllCategories.do', null)
      .map<Response, Category[]>(response => {
        const items: any[] = response.json()['categories'];
        const categories: Category[] = [];
        for (let i = 0; i < items.length; i++) {
          const item: any = items[i];
          const category: Category = new Category(item.id, item.name, item.count);
          categories.push(category);
        }
        return categories;
      });
  }

  loadAllTags(): Observable<Tag[]> {
    return this.http.post('/api/tag/loadAllTags.do', null)
      .map<Response, Tag[]>(response => {
        const items: any[] = response.json()['tags'];
        const tags: Tag[] = [];
        for (let i = 0; i < items.length; i++) {
          const item: any = items[i];
          const tag: Tag = new Tag(item.id, item.name, item.count);
          tags.push(tag);
        }
        return tags;
      });
  }

  loadAllArchives(): Observable<Archive[]> {
    return this.http.post('/api/archive/loadAllArchives.do', null)
      .map<Response, Archive[]>(response => {
        const items: any[] = response.json()['archives'];
        const archives: Archive[] = [];
        for (let i = 0; i < items.length; i++) {
          const item: any = items[i];
          const archive: Archive = new Archive(item.date, item.count);
          archives.push(archive);
        }
        return archives;
      });
  }

  loadAllSummaries(): Observable<Summary[]> {
    return this.http.post('/api/post/loadAllSummaries.do', null)
      .map<Response, Summary[]>(response => {
        const items: any[] = response.json()['summaries'];
        const summaries: Summary[] = [];
        for (let i = 0; i < items.length; i++) {
          const item: any = items[i];
          const summary: Summary = new Summary(item.id, item.title, item.summary, item.postDate, item.viewCount, item.categories, item.tags);
          summaries.push(summary);
        }
        return summaries;
      });
  }
  loadCategorySummaries(key: string): Observable<Summary[]> {
    return this.http.post('/api/post/loadCategorySummaries.do', {key: key})
      .map<Response, Summary[]>(response => {
        const items: any[] = response.json()['summaries'];
        const summaries: Summary[] = [];
        for (let i = 0; i < items.length; i++) {
          const item: any = items[i];
          const summary: Summary = new Summary(item.id, item.title, item.summary, item.postDate, item.viewCount, item.categories, item.tags);
          summaries.push(summary);
        }
        return summaries;
      });
  }
  loadTagSummaries(key: string): Observable<Summary[]> {
    return this.http.post('/api/post/loadTagSummaries.do', {key: key})
      .map<Response, Summary[]>(response => {
        const items: any[] = response.json()['summaries'];
        const summaries: Summary[] = [];
        for (let i = 0; i < items.length; i++) {
          const item: any = items[i];
          const summary: Summary = new Summary(item.id, item.title, item.summary, item.postDate, item.viewCount, item.categories, item.tags);
          summaries.push(summary);
        }
        return summaries;
      });
  }
  loadArchiveSummaries(key: string): Observable<Summary[]> {
    return this.http.post('/api/post/loadArchiveSummaries.do', {key: key})
      .map<Response, Summary[]>(response => {
        const items: any[] = response.json()['summaries'];
        const summaries: Summary[] = [];
        for (let i = 0; i < items.length; i++) {
          const item: any = items[i];
          const summary: Summary = new Summary(item.id, item.title, item.summary, item.postDate, item.viewCount, item.categories, item.tags);
          summaries.push(summary);
        }
        return summaries;
      });
  }
  loadPost(postId: number): Observable<Post> {
    return this.http.post('/api/post/loadPost.do', {postId: postId})
      .map<Response, Post>(response => {
        const item: any = response.json()['post'];
        return new Post(item.id, item.title, item.content, item.postDate, item.categories, item.tags);
      });
  }
  loadPostComments(postId: number): Observable<Comment[]> {
    return this.http.post('/api/comment/loadPostComments.do', {postId: postId})
      .map<Response, Comment[]>(response => {
        const items: any[] = response.json()['comments'];
        const comments: Comment[] = [];
        for (let i = 0; i < items.length; i++) {
          const  item: any = items[i];
          const comment: Comment = new Comment(item.id, item.postId, item.parentId, item.author, item.content, item.createTime);
          comments.push(comment);
        }
        return comments;
      });
  }

  /**
   * @param postId
   * @param parentId
   * @param author
   * @param content
   * @returns {commentId}
   */
  submitNewComment(postId: number, parentId: number, author: string, content: string): Observable<number> {
    const headers = new Headers({'Content-Type': 'application/json;charset=UTF-8'});
    return this.http.post('/api/comment/submitNewComment.do', {
      postId: postId,
      parentId: parentId,
      author: author,
      content: content
    }, {
      headers: headers
    })
      .map<Response, number>(response => {
        const item = response.json()['id'];
        return parseInt(item, 10);
      });
  }
}
