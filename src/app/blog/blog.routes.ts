import {Routes} from '@angular/router';
import {BlogComponent} from './blog.component';
import {DefaultPageComponent} from './default-page/default-page.component';
import {PostPageComponent} from './post-page/post-page.component';
import {TagPageComponent} from './tag-page/tag-page.component';
export const blogRoutes: Routes = [
  {
    path: '', component: BlogComponent,
    children: [
      {path: '', component: DefaultPageComponent},
      {path: 'tag/:id', component: TagPageComponent},
      {path: 'post/:id', component: PostPageComponent}
    ]
  }
];