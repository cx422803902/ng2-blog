import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TestDirective} from "../directive/test.directive";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TestDirective
  ],
  exports: [
    CommonModule,
    TestDirective
  ]
})
export class SharedModule {
}
