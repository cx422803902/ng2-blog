import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {BlogComponent} from "./blog/blog.component";
import {HomeComponent, TagPostsComponent} from "./blog/home/home.component";
import {PostComponent} from "./blog/post/post.component";

const routes: Routes = [
  {
    path: '', component: BlogComponent,
    children: [
      {path: '', component: HomeComponent},
      {path: 'tag/:tagId', component: TagPostsComponent},
      {path: 'post/:postId', component: PostComponent}
    ]
  }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

