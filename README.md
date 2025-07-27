# Sistema de Registro de Usuarios

## Descripción del Proyecto
Este es un sistema web que permite registrar información de usuarios a través de un formulario. La aplicación utiliza Node.js y Express para manejar las peticiones HTTP y almacena los datos en un archivo JSON.

## Tecnologías Utilizadas
- Node.js
- Express.js
- JSON para almacenamiento de datos
- HTML/CSS/JavaScript para la interfaz de usuario

## Estructura de Carpetas
```
evaluacion-modulo4/
├── data/              # Contiene el archivo de datos
│   └── registros.json
├── node_modules/      # Dependencias del proyecto
├── public/           # Archivos estáticos (HTML, CSS, JS)
├── routes/           # Rutas de la aplicación
│   └── usuarios.js
├── package.json      # Configuración del proyecto
├── package-lock.json # Lockfile de dependencias
└── server.js         # Archivo principal de la aplicación
```

## Flujo de Datos
1. El usuario accede a la aplicación a través de la interfaz web
2. Se completa el formulario con los siguientes campos:
   - Nombre (obligatorio)
   - Edad (obligatoria, debe ser número positivo)
   - Ciudad (obligatoria)
3. Los datos se envían al servidor mediante una petición POST a `/usuarios`
4. El servidor valida los datos
5. Si los datos son válidos:
   - Se crea un objeto con la información
   - Se lee el archivo `registros.json`
   - Se agrega el nuevo registro al array existente
   - Se guarda el archivo actualizado
   - Se responde con un mensaje de confirmación
6. Si hay errores en los datos, se devuelve un mensaje de error

## Validaciones Implementadas
1. Validación de campos obligatorios:
   - Nombre es requerido
   - Edad es requerida
   - Ciudad es requerida
2. Validación de tipo de datos:
   - La edad debe ser un número
3. Validación de valores:
   - La edad debe ser un número positivo

## Aprendizajes
1. Implementación de una API REST con Express.js
2. Manejo de peticiones HTTP (POST y GET)
3. Validación de datos en el servidor
4. Almacenamiento de datos en formato JSON
5. Manejo de archivos en Node.js
6. Estructuración de una aplicación web

## Mejoras Posibles
1. Agregar más campos al formulario (email, teléfono, etc.)
2. Agregar logs más detallados
3. Agregar validación del lado del cliente
4. Usar una base de datos real