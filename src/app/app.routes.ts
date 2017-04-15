import {Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
export const routes: Routes = [
  {path: '', redirectTo: 'blog', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'blog', loadChildren: './blog/blog.module#BlogModule'},
  {path: 'manage', loadChildren: './manage/manage.module#ManageModule'}
];
