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

  maximoAlcanzado(mensaje : string){
    alert(mensaje);
    
  }

}
