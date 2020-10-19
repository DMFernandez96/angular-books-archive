/* import { Tracing } from "trace_events"; */

export interface Book{
    titulo: string;
    autor: string;
    genero: string;
    valoracion: number;
    imagen: string; //pq es una url
    nytimes: boolean; //estuvo en la lista del new york times?
    cantidad: number;
}