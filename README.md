# varias-kosas — Frontend

Interfaz web de **varias-kosas**, una plataforma de compra y venta de artículos de segunda mano en excelente calidad (ropa, tecnología, hogar, deportes, libros, accesorios y más), diseñada con una estética **brutalista en amarillo y negro**.

---

## Propósito

Ofrecer una interfaz directa, clara y de alto contraste para que los usuarios puedan explorar artículos publicados por la comunidad, gestionar sus propias publicaciones y acceder a flujos de registro e inicio de sesión, conectándose posteriormente con la API REST de `back-varias-kosas`.

---

## Alcance

En esta **primera fase**, el proyecto cubre únicamente la **maquetación y componentización visual** en JSX estático (sin hooks, sin props y sin lógica funcional aún), con datos de ejemplo en pantalla y diseño **100% responsive** (incluyendo menú hamburguesa en dispositivos móviles).

En la siguiente fase se integrará el consumo real de los endpoints de autenticación y CRUD de publicaciones desplegados en Render (`https://back-varias-kosas.onrender.com/api`).

---

## Funcionalidad (vistas y navegación)

| Ruta | Vista | Descripción visual |
| --- | --- | --- |
| `/` | `HomePage` | Banner principal, barra de filtros por categoría, buscador y catálogo general de publicaciones |
| `/mis-publicaciones` | `MyPublicationsPage` | Perfil del usuario y grilla de publicaciones propias con acciones de editar y eliminar |
| `/publicacion` | `PublicationDetailPage` | Vista de detalle del artículo con información del vendedor |
| `/publicar` | `CreatePublicationPage` | Formulario para crear una nueva publicación |
| `/editar` | `EditPublicationPage` | Formulario para editar título, descripción, precio, estado, categoría e imagen |
| `/login` | `LoginPage` | Formulario de inicio de sesión |
| `/register` | `RegisterPage` | Formulario de registro de usuario |

Además, el encabezado (`Navbar`) incluye:
- Menú hamburguesa responsive en pantallas móviles (`<= 768px`) hecho únicamente con HTML + CSS.
- Indicador del usuario en sesión con sus iniciales y nombre completo.

---

## Estructura del proyecto

```text
front-varias-kosas/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── api/           # Datos de ejemplo y configuración base de API
    ├── components/    # Componentes visuales reutilizables (Navbar, HeroBanner, FilterBar, Grids, Footer)
    ├── pages/         # Vistas principales de la aplicación
    ├── router/        # Configuración de rutas con React Router
    ├── utils/         # Constantes de dominio (categorías, estados, URL base)
    ├── App.jsx
    ├── main.jsx
    └── index.css      # Sistema de diseño brutalista amarillo y negro
```

---

## Tecnologías utilizadas

- **React** `^19.0.0`
- **Vite** `^6.2.0`
- **React Router DOM** `^7.5.0`
- **CSS3** (diseño brutalista, Flexbox, CSS Grid y media queries responsive)
- **Google Fonts** (`Space Grotesk` y `Space Mono`)

---

## Instalación y ejecución

```bash
npm install
npm run dev
```

Para generar el build de producción:

```bash
npm run build
```

---

## Autor

**Jaime Zapata** — Proyecto SENA (`varias-kosas`).
