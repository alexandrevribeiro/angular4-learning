import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { PropBindingComponent } from './prop.binding/prop.binding.component';
import { SeparatorComponent } from './separator/separator.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { StylingComponent } from './styling/styling.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    PropBindingComponent,
    SeparatorComponent,
    EventBindingComponent,
    StylingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
