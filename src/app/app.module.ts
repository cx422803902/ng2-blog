import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {routes} from './app.routes';
import {LoginComponent} from './login/login.component';
import {SharedModule} from './shared/shared.module';
@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    LoginComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
