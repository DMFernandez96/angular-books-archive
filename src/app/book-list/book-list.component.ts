import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  book = {
    "titulo": "Tokio Blues",
    "autor": "Haruki Murakami",
    "genero": "Realismo",
    "valoracion": 4.5,
    "imagen": "assets/img/norwegianwood.jpg"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
