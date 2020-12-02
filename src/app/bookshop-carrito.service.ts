import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from './book-list/Book';

@Injectable({
  providedIn: 'root'
})
//maneja la logica del carrito
export class BookshopCarritoService {
  private _listaCompra: Book[] = [];
  listaCompra: BehaviorSubject<Book[]> = new BehaviorSubject ([]); 


  constructor() { }

  agregarAlCarrito(book : Book){
    let item : Book = this._listaCompra.find((v1)=>v1.titulo == book.titulo) //v1 es el iterador
    if(!item){ //si no lo encontro
      this._listaCompra.push({... book}); //previene hacer el mismo push 2 veces
    }else{ //si encontró el item
      item.cantidad += book.cantidad;
    }


    
    console.log(this._listaCompra);
    this.listaCompra.next(this._listaCompra); //equivalente al emitt de eventos
  }

  
}
