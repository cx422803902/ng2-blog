import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Http, HttpModule} from '@angular/http';
import {Router} from '@angular/router';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDbServiceImpl} from '../mock/in-memory-db.service';
import {UserAuthService} from './user-auth.service';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDbServiceImpl)
  ],
  providers: [
    {provide: UserAuthService, useFactory: UserAuthService.getSingleton, deps: [Http, Router]}
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpModule
  ]
})
export class SharedModule {
}