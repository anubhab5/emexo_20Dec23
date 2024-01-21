// modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { HeadingComponent } from './heading/heading.component';
import { ProductListComponent } from './product-list/product-list.component';
import { LoginComponent } from './login/login.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListService } from './services/shopping-list.service';
import { AddProductComponent } from './add-product/add-product.component';

// directive
import { HighlighterDirective } from './custom-directives/highlighter.directive';

// pipe
import { DiscountPipe } from './custom-pipe/discount.pipe';

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
    AddProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
