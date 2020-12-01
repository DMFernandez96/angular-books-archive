import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../book-list/Book';
import { BookshopCarritoService } from '../bookshop-carrito.service';

@Component({
  selector: 'app-bookshop-carrito',
  templateUrl: './bookshop-carrito.component.html',
  styleUrls: ['./bookshop-carrito.component.scss']
})
export class BookshopCarritoComponent implements OnInit {

  listaCompra$: Observable <Book[]>;

  constructor(private carrito : BookshopCarritoService) {
    this.listaCompra$ = carrito.listaCompra.asObservable();
   }

  ngOnInit(): void {
  }
  
  

}
