import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {AsideBarComponent} from './aside-bar/aside-bar.component';
import {DefaultPageComponent} from './default-page/default-page.component';
import {ManageComponent} from './manage.component';
import {manageRoutes} from './manage.routes';
import {TopBarComponent} from './top-bar/top-bar.component';
import { MenuItemComponent } from './aside-bar/menu-item/menu-item.component';
import { EditorPageComponent } from './editor-page/editor-page.component';
import {BlogHttpService} from '../blog/blog.http.service';
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(manageRoutes)
  ],
  declarations: [
    ManageComponent,
    DefaultPageComponent,
    AsideBarComponent,
    TopBarComponent,
    MenuItemComponent,
    EditorPageComponent
  ],
  providers: [
    BlogHttpService
  ]
})
export class ManageModule {

}