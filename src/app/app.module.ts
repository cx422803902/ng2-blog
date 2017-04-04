import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {routing} from "./app.routes";
import {AppComponent} from "./app.component";
import {HomeComponent, TagPostsComponent} from "./blog/home/home.component";
import {PostComponent} from "./blog/post/post.component";
import {SharedModule} from "./shared/shared.module";
import {BlogComponent} from "./blog/blog.component";
import {BlogTagComponent} from "./blog/common/blog-tag/blog-tag.component";
import {BlogRemarkComponent} from "./blog/common/blog-remark/blog-remark.component";
import {HttpModule} from "@angular/http";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryWebService} from "./service/in-memory-web-api.service";
import {BlogHttpSerivice} from "./service/blog.http.service";

import {MasonryModule} from "angular2-masonry/angular2-masonry";


@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    HomeComponent,
    PostComponent,
    BlogTagComponent,
    TagPostsComponent,
    BlogRemarkComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    routing,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryWebService),
    MasonryModule
  ],
  providers: [
    BlogHttpSerivice
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
