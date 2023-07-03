import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductsPieComponent } from './views/products-pie/products-pie.component';
import { ProductsListComponent } from './views/products-list/products-list.component';
import { SelectFormComponent } from './components/select-form/select-form.component';

const appRoutes: Routes = [
  { path: '', component: ProductsListComponent },
  { path: 'products-list', component: ProductsListComponent },
  { path: 'products-pie', component: ProductsPieComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ProductItemComponent,
    ProductsPieComponent,
    ProductsListComponent,
    SelectFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
