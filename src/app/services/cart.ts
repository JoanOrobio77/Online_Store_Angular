import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: { producto: Product, cantidad: number }[] = [];

  getCart() {
    return this.items;
  }

  addToCart(producto: Product) {
    const item = this.items.find(i => i.producto.id === producto.id);
    if (item) {
      item.cantidad++;
    } else {
      this.items.push({ producto, cantidad: 1 });
    }
  }

  removeFromCart(producto: Product) {
    const index = this.items.findIndex(i => i.producto.id === producto.id);
    if (index > -1) {
      if (this.items[index].cantidad > 1) {
        this.items[index].cantidad--;
      } else {
        this.items.splice(index, 1);
      }
    }
  }

  getTotalCount() {
    return this.items.reduce((acc, item) => acc + item.cantidad, 0);
  }

  getTotalPrice() {
    return this.items.reduce((acc, item) => acc + item.producto.precio * item.cantidad, 0);
  }

  clearCart() {
    this.items = [];
  }
} 