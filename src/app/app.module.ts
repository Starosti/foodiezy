import { NgModule, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FoodCardComponent } from './components/food-card/food-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SearchComponent } from './components/search/search.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SelectedTagDisplayComponent } from './components/selected-tag-display/selected-tag-display.component';
import { FoodPageComponent } from './components/food-page/food-page.component';
import { TagsComponent } from './components/tags/tags.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { CartItemHorizontalComponent } from './components/cart-item-horizontal/cart-item-horizontal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FoodCardComponent,
    FooterComponent,
    SearchComponent,
    NotFoundComponent,
    SelectedTagDisplayComponent,
    FoodPageComponent,
    TagsComponent,
    CartPageComponent,
    CartItemHorizontalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, FormsModule],
  providers: [
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'TRY',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
