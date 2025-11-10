Sistema de Compra y Venta – Angular 19

Este proyecto es un sistema de compra y venta desarrollado con Angular 19.
Incluye interfaz moderna con Tailwind CSS y PrimeNG, notificaciones con SweetAlert2, y persistencia de datos simulada mediante JSON Server.
Está preparado para desplegarse en Firebase Hosting.

Tecnologías principales
Angular 19	Framework base del frontend (standalone components).
Tailwind CSS	Estilos rápidos y personalizables.
PrimeNG 19	Componentes de UI (botones, tablas, formularios, etc.).
SweetAlert2	Alertas visuales y confirmaciones.
JSON Server	API REST fake para simular backend.
Firebase Hosting	Deploy y hosting del proyecto.

Estructura del proyecto
proyecto-angular/
 ┣ src/
 ┃ ┣ app/
 ┃ ┃ ┣ core/          → servicios globales (ej. autenticación, api)
 ┃ ┃ ┣ shared/        → componentes reutilizables
 ┃ ┃ ┣ features/
 ┃ ┃ ┃ ┣ productos/   → CRUD de productos
 ┃ ┃ ┃ ┣ clientes/    → gestión de clientes
 ┃ ┃ ┃ ┣ ventas/      → registro de ventas
 ┃ ┃ ┃ ┗ compras/     → registro de compras
 ┃ ┃ ┗ app.routes.ts  → rutas principales
 ┃ ┗ styles.css       → configuración Tailwind
 ┣ db.json            → base de datos local para JSON Server
 ┣ angular.json
 ┗ README.md

Instalación y ejecución

Clonar el repositorio
git clone https://github.com/tuusuario/proyecto-angular.git
cd proyecto-angular


Instalar dependencias
npm install


Iniciar el servidor Angular
ng serve


Aplicación disponible en http://localhost:4200
Iniciar el backend simulado (JSON Server)
npm run json-server


Backend disponible en http://localhost:3000

🔗 Endpoints de ejemplo (JSON Server)
Entidad	Endpoint
Productos	http://localhost:3000/productos
Clientes	http://localhost:3000/clientes
Ventas	http://localhost:3000/ventas 

Estilos y UI
Tailwind: utilidades en src/styles.css
PrimeNG: tema lara-light-blue configurado en angular.json
SweetAlert2: usado en componentes para confirmaciones y mensajes

Deploy en Firebase Hosting
Compilar el proyecto:
ng build --configuration production
Desplegar:
firebase deploy


El sitio quedará disponible en tu URL de Firebase.

Autor
Dana Perelmuter
Proyecto de práctica – Sistema de Compra y Venta con Angular 19
