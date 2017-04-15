import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MasonryModule} from 'angular2-masonry/angular2-masonry';
import {SharedModule} from '../shared/shared.module';
import {BlogSummaryComponent} from './blog-summary/blog-summary.component';
import {BlogTagComponent} from './blog-tag/blog-tag.component';
import {BlogComponent} from './blog.component';
import {BlogHttpService} from './blog.http.service';
import {blogRoutes} from './blog.routes';
import {DefaultPageComponent} from './default-page/default-page.component';
import {PostPageComponent} from './post-page/post-page.component';
import {TagPageComponent} from './tag-page/tag-page.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(blogRoutes),
    MasonryModule
  ],
  declarations: [
    BlogComponent,
    BlogTagComponent,
    BlogSummaryComponent,
    DefaultPageComponent,
    PostPageComponent,
    TagPageComponent
  ],
  providers: [
    BlogHttpService
  ]
})
export class BlogModule {

}