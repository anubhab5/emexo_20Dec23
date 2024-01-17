import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { DummyComponent } from './dummy/dummy.component';
import { HeadingComponent } from './heading/heading.component';
import { DemoDirectiveDirective } from './demo-directive.directive';

@NgModule({
  declarations: [AppComponent, CardComponent, DummyComponent, HeadingComponent, DemoDirectiveDirective],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
