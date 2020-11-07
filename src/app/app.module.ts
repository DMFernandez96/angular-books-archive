import { BrowserModule } from '@angular/platform-browser';
/* import { NgModule } from '@angular/core'; */
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';

import { FormsModule } from '@angular/forms';
import { BookshopSucursalesComponent } from './bookshop-sucursales/bookshop-sucursales.component';
import { BookshopCarritoComponent } from './bookshop-carrito/bookshop-carrito.component';
import { BookshopLibrosComponent } from './bookshop-libros/bookshop-libros.component';
import { InputNumeroComponent } from './input-numero/input-numero.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookshopSucursalesComponent,
    BookshopCarritoComponent,
    BookshopLibrosComponent,
    InputNumeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
  
})
export class AppModule { }
