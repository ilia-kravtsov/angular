import {NgModule} from "@angular/core";
import {Test_1Component} from "../app/test_1/test_1.component";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  declarations: [
    Test_1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  exports: [
    Test_1Component
  ],
  bootstrap: []
})

export class AppModule {}
