import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { DummyComponent } from './dummy/dummy.component';

@NgModule({
  declarations: [AppComponent, CardComponent, DummyComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [DummyComponent],
})
export class AppModule {}
