import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostpageComponent } from './postpage/postpage.component';
import { SummariesPageComponent } from './summaries-page/summaries-page.component';
import {RouterModule} from '@angular/router';
import {routes} from './app.routing';
import {MdCard, MdCardAvatar, MdCardHeader, MdCardTitle} from '@angular/material';
import {DatasourceService} from 'app/service/DatasourceService';
import {ConstantService} from './service/ConstantService';
import {HtmlPreFilterPipe} from './pipe/html-pre-filter.pipe';
import {HttpModule, RequestOptions, BaseRequestOptions} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostpageComponent,
    HtmlPreFilterPipe,
    SummariesPageComponent,
    MdCard,
    MdCardHeader,
    MdCardTitle,
    MdCardAvatar
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule
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
export class AppModule { }
