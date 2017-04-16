import {Routes} from '@angular/router';
import {ManageComponent} from './manage.component';
import {DefaultPageComponent} from './default-page/default-page.component';
import {EditorPageComponent} from './editor-page/editor-page.component';
export const manageRoutes: Routes = [
  {
    path: '', component: ManageComponent,
    children: [
      {path: '', component: DefaultPageComponent},
      {path: 'editor', component: EditorPageComponent}
    ]
  }
];