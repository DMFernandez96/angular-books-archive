import { Component, OnInit } from '@angular/core';
import { BookshopCarritoService } from '../bookshop-carrito.service';
import { BookshopCarritoComponent } from '../bookshop-carrito/bookshop-carrito.component';
import { BookshopLibrosComponent } from '../bookshop-libros/bookshop-libros.component';
import { Book } from './Book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: Book[] = [
    {
      titulo: "Tokio Blues",
      autor: "Haruki Murakami",
      genero: "Realismo",
      valoracion: 4.5,
      imagen: "assets/img/norwegianwood.jpg",
      nytimes: false,
      stock: 5,
      cantidad: 0,
    }, 
    {
      titulo: "Los juegos del hambre",
      autor: "Sussan Collins",
      genero: "Distopia",
      valoracion: 4,
      imagen: "assets/img/norwegianwood.jpg",
      nytimes: true,
      stock: 4,
      cantidad: 0,
    },
    {
      titulo: "La odisea",
      autor: "Homero",
      genero: "Poesia epica griega",
      valoracion: 0,
      imagen: "assets/img/norwegianwood.jpg",
      nytimes: false,
      stock: 2,
      cantidad: 0,
    },
  ];
  
  constructor(private carrito : BookshopCarritoService ) { 
    
  }

  ngOnInit(): void {
  }
  agregarAlCarrito(book): void{
    if(book.cantidad != 0){ //si es mas que 0 se puede agregar al carrito
      this.carrito.agregarAlCarrito(book);
      book.stock -= book.cantidad;
      book.cantidad= 0;
    }
    
  }

  maximoAlcanzado(mensaje : string){
    alert(mensaje);
    
  }

}
