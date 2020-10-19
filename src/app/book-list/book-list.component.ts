import { Component, OnInit } from '@angular/core';
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
      cantidad: 0,
    }, 
    {
      titulo: "Los juegos del hambre",
      autor: "Sussan Collins",
      genero: "Distopia",
      valoracion: 4,
      imagen: "assets/img/norwegianwood.jpg",
      nytimes: true,
      cantidad: 0,
    },
    {
      titulo: "La odisea",
      autor: "Homero",
      genero: "Poesia epica griega",
      valoracion: 0,
      imagen: "assets/img/norwegianwood.jpg",
      nytimes: false,
      cantidad: 0,
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  upCantidad(book: Book): void{ //a book le paso el tipo. es de tipo Book. Y va a devolver void pq no lo vamos a utilizar
    if(book.cantidad < book.valoracion)
      book.cantidad++;  
  }

  downCantidad(book: Book): void{ //a book le paso el tipo. es de tipo Book. Y va a devolver void pq no lo vamos a utilizar
    if(book.cantidad > 0)
      book.cantidad--;  
  }

  onChangeCantidad(event, book: Book): void { //seguirlo yo
    console.log(event.key);
  }

}
