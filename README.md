# Bikes - Tienda de Bicicletas

![Logo o Imagen del Proyecto](https://via.placeholder.com/800x200?text=Bikes+Store) <!-- Reemplaza con una imagen real si tienes una -->

## Descripción

**Bikes** es una aplicación web moderna desarrollada con Angular para una tienda de bicicletas. Ofrece una experiencia de usuario intuitiva para explorar productos, gestionar un carrito de compras, iniciar sesión y registrarse. La aplicación incluye renderizado del lado del servidor (SSR) para un mejor rendimiento y SEO.

## Características

- **Página de Inicio**: Bienvenida y navegación principal.
- **Productos**: Catálogo de bicicletas con imágenes y detalles.
- **Carrito de Compras**: Gestión de productos seleccionados.
- **Autenticación**: Páginas de login y registro.
- **Información**: Páginas de "Acerca de" y "Contacto".
- **Responsive**: Diseño adaptable a diferentes dispositivos.
- **SSR**: Renderizado del lado del servidor para optimización.

## Tecnologías Utilizadas

- **Framework**: Angular 20
- **Lenguaje**: TypeScript
- **Estilos**: CSS
- **Librerías**:
  - RxJS para manejo de observables
  - SweetAlert2 para alertas y modales
  - Angular SSR para renderizado del lado del servidor
- **Herramientas de Desarrollo**:
  - Angular CLI
  - Jasmine y Karma para pruebas
  - Esbuild para construcción

## Instalación

Sigue estos pasos para configurar el proyecto en tu máquina local:

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/bikes.git
   cd bikes
   ```

2. **Instala las dependencias**:
   ```bash
   npm install
   ```

3. **Ejecuta la aplicación en modo desarrollo**:
   ```bash
   npm start
   ```
   La aplicación estará disponible en `http://localhost:4200`.

4. **Construye para producción**:
   ```bash
   npm run build
   ```

5. **Ejecuta en modo SSR**:
   ```bash
   npm run serve:ssr:bikes
   ```

## Uso

- Navega por las páginas usando el menú de navegación.
- Agrega productos al carrito desde la página de productos.
- Inicia sesión o regístrate para acceder a funciones adicionales.
- La aplicación es responsive y funciona en móviles y escritorio.

## Pruebas

Ejecuta las pruebas unitarias con:
```bash
npm test
```

## Contribución

¡Las contribuciones son bienvenidas! Para contribuir:

1. Haz un fork del proyecto.
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y confirma (`git commit -am 'Agrega nueva funcionalidad'`).
4. Empuja a la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia

Este proyecto es privado y no tiene una licencia pública especificada.

## Contacto

Para preguntas o soporte, contacta al equipo de desarrollo.

---

*Desarrollado con ❤️ usando Angular.*