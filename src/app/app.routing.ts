import {Routes} from '@angular/router';
import {SummariesPageComponent} from './summaries-page/summaries-page.component';
import {PostpageComponent} from './postpage/postpage.component';
/**
 * Created by chenxing on 2017/7/2.
 */

export const routes: Routes = [
  {path: '', component: SummariesPageComponent},
  {path: 's/:type/:key', component: SummariesPageComponent},
  {path: 'p/:id', component: PostpageComponent}
];
