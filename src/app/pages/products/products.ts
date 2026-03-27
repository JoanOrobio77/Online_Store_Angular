import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../services/products';
import { Products as ProductsService } from '../../services/products';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
  providers: [ProductsService]
})
export class Products {
  productos: Product[] = [];
  mensaje: string = '';
  constructor(private productsService: ProductsService, private cartService: CartService) {
    this.productos = this.productsService.getProducts();
  }

  trackById(index: number, item: Product) {
    return item.id;
  }

  agregarAlCarrito(producto: Product) {
    this.cartService.addToCart(producto);
    this.mensaje = `Producto agregado al carrito: ${producto.nombre}`;
    setTimeout(() => this.mensaje = '', 2000);
  }
}
