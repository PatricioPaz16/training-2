import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Producto{
  id?: number;
  nombre: string;
  precio: number;
  stock: number;
}

export interface Venta {
  id: number;
  fecha: string;
  total: number;
  producto: {
    id: number;
    nombre: string;
    precio: number;
  };
  cliente: {
    id: number;
    nombre: string;
    correo: string;
  };
}


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private apiURL = 'http://localhost:3000/productos'; //este es el url que le puse a JSON server para exponer los datos

  constructor(private http: HttpClient) { }

  getProductos(): Observable<Producto[]>{
    return this.http.get<Producto[]>(this.apiURL);
  }

  Buscar(): Observable<Venta>
  {
    return this.http.get<Venta>(`http://localhost:3000/ventas?_expand=producto&_expand=cliente`);
  }
}
