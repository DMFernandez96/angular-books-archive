import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../book-list/Book';

@Component({
  selector: 'app-input-numero',
  templateUrl: './input-numero.component.html',
  styleUrls: ['./input-numero.component.scss']
})
export class InputNumeroComponent implements OnInit {

  constructor() { }

  @Input()
  cantidad : number;

  @Input()
  max: number;

  @Output()
  cantidadChange: EventEmitter<number> = new EventEmitter<number>(); //le paso el tipo de objeto que va a estar emitiendo

  @Output() //es un evento de salida
  maxAlcanzado: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }

  upCantidad(): void{ //a book le paso el tipo. es de tipo Book. Y va a devolver void pq no lo vamos a utilizar
    if(this.cantidad < this.max){
      this.cantidad++;
      this.cantidadChange.emit(this.cantidad); //asi emito este evento
    }else{
      this.maxAlcanzado.emit("Se alcanzo el maximo de libros que poseemos");
    }
        

  }

  downCantidad(): void{ //a book le paso el tipo. es de tipo Book. Y va a devolver void pq no lo vamos a utilizar
    if(this.cantidad > 0){
      this.cantidad--;
      this.cantidadChange.emit(this.cantidad); //asi emito este evento

    }  
  }

  onChangeCantidad(event): void { //seguirlo yo
    console.log(event.key);
    this.cantidadChange.emit(this.cantidad); //asi emito este evento. Le paso x param el nuevo valor que va a tomar
  }

  

}
