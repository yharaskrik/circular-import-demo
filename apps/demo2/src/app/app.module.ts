import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Lib3Module } from '@circular-import-demo/lib3';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, Lib3Module],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
