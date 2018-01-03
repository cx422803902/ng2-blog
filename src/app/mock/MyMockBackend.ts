import {MockBackend, MockConnection} from '@angular/http/testing';
import {Response, ResponseOptions} from '@angular/http';
import {Category} from '../model/model.category';
import {Tag} from '../model/model.tag';
import {Archive} from '../model/model.archive';
import {Summary} from '../model/model.summary';
import {Post} from '../model/model.post';
import {Comment} from '../model/model.comment';
/**
 * Created by chenxing on 2017/7/30.
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
export class MyMockBackend extends MockBackend {

  private static mockData: Map<string, any> = new Map<string, any>();

  constructor() {
    super();
    this.loadAllCategories();
    this.loadAllTags();
    this.loadAllArchives();
    this.loadAllSummaries();
    this.loadCategorySummaries();
    this.loadTagSummaries();
    this.loadArchiveSummaries();
    this.loadPost();
    this.loadPostComments();
    this.submitNewComment();
    this.connections.subscribe(connect => {
      const mockCon: MockConnection = connect;
      let url = mockCon.request.url;
      if (url.indexOf('.do?') !== -1) {
        url = url.substring(0, url.indexOf('.do?') + 3);
      }
      const data = MyMockBackend.mockData.get(url);
      if (data != null) {
        mockCon.mockRespond(new Response(new ResponseOptions({
          status: 200,
          body: data
        })));
      }else {
        mockCon.mockRespond(new Response(new ResponseOptions({
          status: 404,
          statusText: 'URL not Found',
        })));
      }

    });
  }

  loadAllCategories(): void {
    const categories: Category[] = [];
    for (let i = 0; i < 100; i++) {
      categories.push(new Category(i, 'category' + i, i));
    }
    MyMockBackend.mockData.set('/api/category/loadAllCategories.do', {categories: categories});
  }

  loadAllTags(): void {
    const tags: Tag[] = [];
    for (let i = 0; i < 10; i++) {
      tags.push(new Tag(i, 'tag' + i, i));
    }
    MyMockBackend.mockData.set('/api/tag/loadAllTags.do', {tags: tags});
  }

  loadAllArchives(): void {
    const archives: Archive[] = [];
    for (let i = 0; i < 10; i++) {
      archives.push(new Archive(new Date(), i));
    }
    MyMockBackend.mockData.set('/api/archive/loadAllArchives.do', {archives: archives});
  }

  loadAllSummaries(): void {
    const summaries: Summary[] = [];
    for (let i = 0; i < 10; i++) {
      const categories: Category[] = [];
      for (let j = 0; j < 5; j++) {
        categories.push(new Category(j, 'category' + j, j));
      }
      const tags: Tag[] = [];
      for (let j = 0; j < 10; j++) {
        tags.push(new Tag(j, 'tag' + j, j));
      }
      summaries.push(new Summary(i, 'this is title' + i, 'default:fdsafdasfdaslfjlkdsafsdjflkdsajflsdkajfdkljlkjfdslkfjsd' + i, new Date(), i, categories, tags));
    }
    MyMockBackend.mockData.set('/api/post/loadAllSummaries.do', {summaries: summaries});
  }
  loadCategorySummaries(): void {
    const summaries: Summary[] = [];
    for (let i = 0; i < 10; i++) {
      const categories: Category[] = [];
      for (let j = 0; j < 5; j++) {
        categories.push(new Category(j, 'category' + j, j));
      }
      const tags: Tag[] = [];
      for (let j = 0; j < 10; j++) {
        tags.push(new Tag(j, 'tag' + j, j));
      }
      summaries.push(new Summary(i, 'this is title' + i, 'category:fdsafdasfdaslfjlkdsafsdjflkdsajflsdkajfdkljlkjfdslkfjsd' + i, new Date(), i, categories, tags));
    }
    MyMockBackend.mockData.set('/api/post/loadCategorySummaries.do', {summaries: summaries});
  }
  loadTagSummaries(): void {
    const summaries: Summary[] = [];
    for (let i = 0; i < 10; i++) {
      const categories: Category[] = [];
      for (let j = 0; j < 5; j++) {
        categories.push(new Category(j, 'category' + j, j));
      }
      const tags: Tag[] = [];
      for (let j = 0; j < 10; j++) {
        tags.push(new Tag(j, 'tag' + j, j));
      }
      summaries.push(new Summary(i, 'this is title' + i, 'tag:fdsafdasfdaslfjlkdsafsdjflkdsajflsdkajfdkljlkjfdslkfjsd' + i, new Date(), i, categories, tags));
    }
    MyMockBackend.mockData.set('/api/post/loadTagSummaries.do', {summaries: summaries});
  }
  loadArchiveSummaries(): void {
    const summaries: Summary[] = [];
    for (let i = 0; i < 10; i++) {
      const categories: Category[] = [];
      for (let j = 0; j < 5; j++) {
        categories.push(new Category(j, 'category' + j, j));
      }
      const tags: Tag[] = [];
      for (let j = 0; j < 10; j++) {
        tags.push(new Tag(j, 'tag' + j, j));
      }
      summaries.push(new Summary(i, 'this is title' + i, 'archive:fdsafdasfdaslfjlkdsafsdjflkdsajflsdkajfdkljlkjfdslkfjsd' + i, new Date(), i, categories, tags));
    }
    MyMockBackend.mockData.set('/api/post/loadArchiveSummaries.do', {summaries: summaries});
  }
  loadPost(): void {
    const categories: Category[] = [];
    for (let j = 0; j < 5; j++) {
      categories.push(new Category(j, 'category' + j, j));
    }
    const tags: Tag[] = [];
    for (let j = 0; j < 10; j++) {
      tags.push(new Tag(j, 'tag' + j, j));
    }
    MyMockBackend.mockData.set('/api/post/loadPost.do', {post: new Post(1, 'this is title' + 1, demoContent, new Date(), categories, tags)});
  }
  loadPostComments(): void {
    const comments: Comment[] = [];
    for (let i = 0; i < 10; i++) {
      comments.push(new Comment(i, 0, 0, 'chenxing' + i, 'aflekajfldkajfads' + i, new Date()));
    }
    MyMockBackend.mockData.set('/api/comment/loadPostComments.do', {comments: comments});
  }

  submitNewComment(): void {
    MyMockBackend.mockData.set('/api/comment/submitNewComment.do', {id: 0});
  }
}
