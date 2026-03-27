import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-registro',
  imports: [FormsModule, NgIf],
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class Registro {
  nombre: string = '';
  email: string = '';
  username: string = '';
  password: string = '';
  error: string = '';
  success: string = '';

  onSubmit(event: Event) {
    event.preventDefault();
    if (!this.nombre || !this.email || !this.username || !this.password) {
      this.error = 'Por favor, completa todos los campos.';
      this.success = '';
      return;
    }
    // Simulación de registro exitoso
    this.error = '';
    this.success = '¡Registro exitoso! Ahora puedes iniciar sesión.';
    // Aquí podrías guardar el usuario o redirigir
  }
}
