# Práctica 3: Autenticación con JWT y Roles

<<<<<<< HEAD
## Descripción
Este proyecto implementa una **API REST** en **Node.js + Express** para gestionar productos de **AutoZone**.  
Incluye:
=======
## Objetivo
Implementar un sistema de autenticación seguro con **JWT** y control de roles (`admin`, `user`).  
Se incluyen: registro, login, emisión de tokens, refresh token, middlewares de autorización y rutas protegidas.

---

## Tecnologías usadas
- Node.js + Express
- bcrypt (hash de contraseñas)
- jsonwebtoken (JWT)
- dotenv (variables de entorno)
- nodemon (desarrollo)
>>>>>>> f75f2a6 (Primer commit: proyecto JWT con roles)

---

## Estructura del proyecto
<<<<<<< HEAD
practica1-crud/
├─ src/
│ ├─ controllers/
│ │ └─ productos.js
│ ├─ models/
│ │ └─ productos.js
│ ├─ routes/
│ │ └─ productos.js
│ ├─ services/
│ │ └─ productos.js
│ └─ index.js
├─ package.json
└─ README.md

---

## Instalación

1. Clonar repositorio:
   ```bash
   git clone <https://github.com/Lisbeth-D/practica1-crud.git>
   cd practica1-crud

2. Instalar dependencias:
npm install
3. Ejecutar en modo desarrollo:
npm run dev
=======
practica3-jwt/
│── controllers/
│ ├── auth.controller.js
│ └── user.controller.js
│
│── middlewares/
│ ├── auth.middleware.js
│ └── role.middleware.js
│
│── models/
│ └── user.model.js
│
│── routes/
│ ├── auth.routes.js
│ └── user.routes.js
│
│── utils/
│ └── generateToken.js
│
│── .env
│── server.js
│── package.json
>>>>>>> f75f2a6 (Primer commit: proyecto JWT con roles)

## Endpoints
1. Registro de usuario
POST /auth/register
curl -X POST http://localhost:3000/auth/register -H "Content-Type: application/json" -d "{\"email\":\"admin@test.com\",\"password\":\"Admin123\",\"role\":\"admin\"}"

La contraseña debe ser fuerte:
-Mínimo 6 caracteres
-Al menos una mayúscula
-Al menos una minúscula
-Al menos un número

2. Login
POST /auth/login
curl -X POST http://localhost:3000/auth/login -H "Content-Type: application/json" -d "{\"email\":\"admin@test.com\",\"password\":\"Admin123\"}"

3. Refresh token
POST /auth/refresh
curl -X POST http://localhost:3000/auth/refresh -H "Content-Type: application/json" -d "{\"token\":\"PEGAR_AQUI_EL_REFRESH_TOKEN_DEL_LOGIN\"}"

4. Obtener usuarios (solo admin)
GET /users
curl http://localhost:3000/users -H "Authorization: Bearer PEGAR_AQUI_EL_ACCESS_TOKEN_NUEVO"

5. Obtener perfil propio (user o admin)
GET /users/me
curl http://localhost:3000/users/me -H "Authorization: Bearer PEGAR_ACCESS_TOKEN_AQUI"
"# practica3-jwt" 
