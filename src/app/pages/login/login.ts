import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, NgIf],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  username: string = '';
  password: string = '';
  error: string = '';

  onSubmit(event: Event) {
    event.preventDefault();
    if (!this.username || !this.password) {
      this.error = 'Por favor, completa todos los campos.';
      return;
    }
    // Simulación de autenticación
    if (this.username === 'admin' && this.password === 'admin') {
      this.error = '';
      alert('¡Login exitoso!');
      // Aquí podrías redirigir o guardar el estado de login
    } else {
      this.error = 'Usuario o contraseña incorrectos.';
    }
  }
}
