import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { HeadingComponent } from './heading/heading.component';
import { ProductListComponent } from './product-list/product-list.component';
import { LoginComponent } from './login/login.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DiscountPipe } from './custom-pipe/discount.pipe';
import { ShoppingListService } from './services/shopping-list.service';
import { HighlighterDirective } from './custom-directives/highlighter.directive';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HeadingComponent,
    ProductListComponent,
    LoginComponent,
    ShoppingListComponent,
    DiscountPipe,
    HighlighterDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ShoppingListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
