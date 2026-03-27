import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
}

@Injectable({
  providedIn: 'root'
})
export class Products {
  private products: Product[] = [
    { id: 1, nombre: 'Shimano Urban', descripcion: 'Ideal para andar en la ciudad', precio: 1000000, imagen: 'bike3.jpg' },
    { id: 2, nombre: 'Shimano Urbana', descripcion: 'Ideal para andar en la ciudad', precio: 1000000, imagen: 'bike33.jpg' },
    { id: 3, nombre: 'Shimano Urbaa', descripcion: 'Ideal para andar en la ciudad', precio: 1000000, imagen: 'bike4.jpg' },
    { id: 4, nombre: 'Shimano Urna', descripcion: 'Ideal para andar en la ciudad', precio: 1000000, imagen: 'bike7.jpg' },
    { id: 5, nombre: 'Shimano bana', descripcion: 'Ideal para andar en la ciudad', precio: 100000, imagen: 'bike18.jpg' },
    { id: 6, nombre: 'Shimano Urana', descripcion: 'Ideal para andar en la ciudad', precio: 10000, imagen: 'bike9.jpg' },
    { id: 7, nombre: 'Shimano Ubana', descripcion: 'Ideal para andar en la ciudad', precio: 10000000, imagen: 'bike10.jpg' },
    { id: 8, nombre: 'Shimano Uana', descripcion: 'Ideal para andar en la ciudad', precio: 100000000, imagen: 'bike31.jpg' },
    { id: 9, nombre: 'Shimano Urb', descripcion: 'Ideal para andar en la ciudad', precio: 1000, imagen: 'bike22.jpg' },
    { id: 10, nombre: 'Shimano Ua', descripcion: 'Ideal para andar en la ciudad', precio: 10, imagen: 'bike13.jpg' },
    { id: 11, nombre: 'Shimano U', descripcion: 'Ideal para andar en la ciudad', precio: 1, imagen: 'bike11.jpg' }
  ];

  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }
} 