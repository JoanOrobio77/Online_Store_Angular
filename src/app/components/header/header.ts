import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  constructor(public cartService: CartService) {}

  mostrarCarrito = false;

  get totalItems() {
    return this.cartService.getTotalCount();
  }

  pagar() {
    Swal.fire({
      icon: 'info',
      title: '¡Hola!',
      text: 'Para comprar debes ingresar a tu cuenta',
      confirmButtonText: 'Entendido'
    });
  }

  vaciarCarrito() {
    this.cartService.clearCart();
  }
}
