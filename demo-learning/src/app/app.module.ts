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
import { DiscountPipe } from './discount.pipe';
import { HighlighterDirective } from './highlighter.directive';
import { ShoppingListService } from './shopping-list.service';
import { MyTestPipe } from './my-test.pipe';
import { MyTestDirDirective } from './my-test-dir.directive';

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
    MyTestPipe,
    MyTestDirDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ShoppingListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
