# API REST – CRUD de Productos (AutoZone)

## Descripción
Este proyecto implementa una API REST en **Node.js + Express** para gestionar productos de **AutoZone**.  
Incluye validaciones con **Zod**, manejo de errores estandarizados y paginación/ordenamiento básico.

---

## Estructura del proyecto
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
   git clone <URL_DEL_REPO>
   cd practica1-crud

2. Instalar dependencias:
npm install
3. Ejecutar en modo desarrollo:
npm run dev

Endpoints
1. Listar productos
GET /productos?page=1&limit=10&sort=precio,desc

2. Obtener producto por ID
GET /productos/:id
3. Crear producto
POST /productos
4. Actualizar producto
PUT /productos/:id
5. Eliminar producto
DELETE /productos/:id

Validaciones
nombre → obligatorio

precio → mayor que 0

stock → mayor o igual a 0

Ejemplos de Prueba (cURL – AutoZone)
1. Crear producto – Batería LTH 12V
curl -X POST http://localhost:3000/productos \
-H "Content-Type: application/json" \
-d '{"nombre": "Batería LTH 12V", "precio": 2500, "stock": 12}'

2. Crear producto – Aceite Mobil 5W-30
curl -X POST http://localhost:3000/productos \
-H "Content-Type: application/json" \
-d '{"nombre": "Aceite Mobil 5W-30", "precio": 550, "stock": 40}'

3. Crear producto – Balatas delanteras Nissan Sentra
curl -X POST http://localhost:3000/productos \
-H "Content-Type: application/json" \
-d '{"nombre": "Balatas delanteras Nissan Sentra", "precio": 1200, "stock": 20}'

4. Crear producto – Filtro de aire Toyota Corolla
curl -X POST http://localhost:3000/productos \
-H "Content-Type: application/json" \
-d '{"nombre": "Filtro de aire Toyota Corolla", "precio": 350, "stock": 35}'

5. Crear producto – Líquido de frenos DOT 4
curl -X POST http://localhost:3000/productos \
-H "Content-Type: application/json" \
-d '{"nombre": "Líquido de frenos DOT 4", "precio": 180, "stock": 50}'

6. Listar todos los productos
curl "http://localhost:3000/productos"

7. Listar productos – Página 1, límite 3
curl "http://localhost:3000/productos?page=1&limit=3"

8. Listar productos – Ordenados por precio ascendente
curl "http://localhost:3000/productos?sort=precio,asc"

9. Listar productos – Ordenados por precio descendente
curl "http://localhost:3000/productos?sort=precio,desc"

10. Obtener producto por ID (ejemplo ID = 1)
curl "http://localhost:3000/productos/1"

11. Obtener producto por ID inexistente (ejemplo ID = 999)
curl "http://localhost:3000/productos/999"

12. Actualizar producto – Cambiar stock del ID 2 (Aceite Mobil)
curl -X PUT http://localhost:3000/productos/2 \
-H "Content-Type: application/json" \
-d '{"stock": 60}'

13. Actualizar producto – Cambiar precio y nombre del ID 3
curl -X PUT http://localhost:3000/productos/3 \
-H "Content-Type: application/json" \
-d '{"nombre": "Balatas delanteras Chevrolet Aveo", "precio": 950}'

14. Eliminar producto (ejemplo ID = 4 – Filtro de aire Corolla)
curl -X DELETE http://localhost:3000/productos/4

15. Intentar eliminar un producto inexistente (ejemplo ID = 500)
curl -X DELETE http://localhost:3000/productos/500
