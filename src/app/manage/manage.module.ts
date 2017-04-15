import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {ManageComponent} from './manage.component';
import {manageRoutes} from './manage.routes';
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(manageRoutes)
  ],
  declarations: [
    ManageComponent
  ]
})
export class ManageModule {

}