import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Products } from './pages/products/products';
import { Login } from './pages/login/login';
import { Registro } from './pages/registro/registro';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'productos', component: Products},
    {path: 'nosotros', component: About},
    {path: 'contacto', component: Contact},
    {path: 'login', component: Login},
    {path: 'registro', component: Registro},
    {path: '**', redirectTo: ''}
];
