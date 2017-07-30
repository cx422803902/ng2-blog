import {NgModule} from '@angular/core';
import {BaseRequestOptions, HttpModule, RequestOptions} from '@angular/http';
import {MdCardModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {DatasourceService} from 'app/service/DatasourceService';

import {AppComponent} from './app.component';
import {routes} from './app.routing';
import {NavbarComponent} from './navbar/navbar.component';
import {HtmlPreFilterPipe} from './pipe/html-pre-filter.pipe';
import {PostpageComponent} from './postpage/postpage.component';
import {ConstantService} from './service/ConstantService';
import {SummariesPageComponent} from './summaries-page/summaries-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostpageComponent,
    HtmlPreFilterPipe,
    SummariesPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    MdCardModule
  ],
  providers: [
    DatasourceService,
    ConstantService,
    // {provide: ConnectionBackend, useClass: MyMockBackend},
    {provide: RequestOptions, useClass: BaseRequestOptions}
  ],
  exports: [
    HttpModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
