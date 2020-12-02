/* import { Tracing } from "trace_events"; */

export interface Book{
    titulo: string;
    autor: string;
    genero: string;
    precio: number;
    imagen: string; //pq es una url
    nytimes: boolean; //estuvo en la lista del new york times?
    stock: number;
    cantidad: number;
}