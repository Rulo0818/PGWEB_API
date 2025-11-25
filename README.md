# PGWEB_API
proyecto api-crud-escalable-ts

## Estructura del Proyecto

```
api_ps/
├── src/
│   ├── app.ts                 # Configuración del servidor Express
│   ├── config/
│   │   └── db.ts             # Configuración de TypeORM
│   ├── controllers/
│   │   └── usercontroller.ts # Controladores de usuarios
│   ├── entities/
│   │   └── user.ts           # Entidad User
│   ├── routes/
│   │   ├── index.ts          # Rutas principales
│   │   └── userroutes.ts     # Rutas de usuarios
│   └── services/
│       └── userservice.ts    # Servicios de usuarios
├── package.json
└── tsconfig.json
```

## Configuración

1. Instalar dependencias:
```bash
npm install
```

2. Configurar variables de entorno:
   - Copiar `.env.example` a `.env`
   - Configurar las credenciales de la base de datos MySQL

3. Iniciar el servidor en modo desarrollo:
```bash
npm run dev
```

4. Compilar y ejecutar en producción:
```bash
npm run build
npm start
```

## Endpoints de la API

Base URL: `http://localhost:3000/api`

### Usuarios

- `GET /api/users` - Obtener todos los usuarios
- `GET /api/users/:id` - Obtener usuario por ID
- `POST /api/users` - Crear nuevo usuario
- `PUT /api/users/:id` - Actualizar usuario
- `DELETE /api/users/:id` - Eliminar usuario

### Ejemplo de uso con Postman

**Crear usuario (POST):**
```
POST http://localhost:3000/api/users
Content-Type: application/json

{
  "name": "Juan",
  "lastName": "Pérez",
  "age": 30
}
```

**Obtener todos los usuarios (GET):**
```
GET http://localhost:3000/api/users
```

**Obtener usuario por ID (GET):**
```
GET http://localhost:3000/api/users/1
```

**Actualizar usuario (PUT):**
```
PUT http://localhost:3000/api/users/1
Content-Type: application/json

{
  "name": "Juan",
  "lastName": "García",
  "age": 31
}
```

**Eliminar usuario (DELETE):**
```
DELETE http://localhost:3000/api/users/1
```

## Tecnologías Utilizadas

- Node.js
- Express.js
- TypeScript
- TypeORM
- MySQL2
