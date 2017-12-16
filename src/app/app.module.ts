import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { PropBindingComponent } from './prop.binding/prop.binding.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    PropBindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
