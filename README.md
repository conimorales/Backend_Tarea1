# Evaluación 1 – Libertadores (Backend)

Proyecto backend desarrollado con **Node.js** y **Express**, creado como parte de la Evaluación 1 del curso de Backend. El servidor utiliza **CORS** para permitir peticiones desde otros orígenes (por ejemplo, un frontend) y se ejecuta en modo desarrollo con recarga automática gracias a `node --watch`.

## Tecnologías utilizadas

| Herramienta | Uso |
|---|---|
| [Node.js](https://nodejs.org/) | Entorno de ejecución de JavaScript |
| [Yarn](https://yarnpkg.com/) | Gestor de paquetes |
| [Express](https://expressjs.com/) `^5.3.0` | Framework para crear el servidor y las rutas |
| [CORS](https://www.npmjs.com/package/cors) `^2.8.6` | Middleware para habilitar peticiones entre distintos orígenes |

## Requisitos previos

- Node.js versión 18.11 o superior (necesario para usar `node --watch`)
- Yarn instalado de forma global
- Git

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/conimorales/Backend_Tarea1.git
   cd Backend_Tarea1
   ```

2. Instala las dependencias:

   ```bash
   yarn install
   ```

## Ejecución

Para levantar el servidor en modo desarrollo:

```bash
yarn dev
```

Este comando ejecuta `node --watch server.js`, por lo que el servidor se reinicia automáticamente cada vez que se guarda un cambio en el código, sin necesidad de herramientas externas como `nodemon`.

## Cómo levantar la web

1. Abre la carpeta del proyecto en VS Code y abre una terminal (`Ctrl + ñ` o menú **Terminal → New Terminal**).

2. Si es la primera vez, instala las dependencias:

   ```bash
   yarn install
   ```

3. Levanta el servidor:

   ```bash
   yarn dev
   ```

   También se puede ejecutar directamente con Node:

   ```bash
   node server.js
   ```

4. Si todo funciona, la terminal mostrará el mensaje definido en `server.js` indicando que el servidor está corriendo.

5. Abre el navegador y entra a:

   ```
   http://localhost:3000
   ```

   > El puerto depende de lo configurado en `server.js` (por ejemplo, `app.listen(3000, ...)`). Si usaste otro puerto, reemplaza `3000` por ese número.

6. Para detener el servidor, vuelve a la terminal y presiona `Ctrl + C`.

### Problemas comunes

- **`yarn` no se reconoce como comando**: instala Yarn con `npm install -g yarn` y vuelve a abrir la terminal.
- **`Cannot find module 'express'`**: faltan las dependencias; ejecuta `yarn install`.
- **`EADDRINUSE: address already in use`**: el puerto ya está ocupado por otro proceso (por ejemplo, otra terminal con el servidor corriendo). Detén ese proceso con `Ctrl + C` o cambia el puerto en `server.js`.
- **`Cannot use import statement outside a module`**: revisa que el `package.json` tenga `"type": "module"`.

## Estructura del proyecto

```
evaluacion-1-libertadores/
├── node_modules/      # Dependencias (ignoradas por Git)
├── .gitignore         # Archivos y carpetas excluidos del repositorio
├── package.json       # Configuración del proyecto y scripts
├── yarn.lock          # Versiones exactas de las dependencias
├── server.js          # Punto de entrada del servidor
└── README.md
```

## Configuración del proyecto

El archivo `package.json` quedó configurado de la siguiente manera:

```json
{
  "name": "evaluacion-1-libertadores",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "type": "module",
  "scripts": {
    "dev": "node --watch server.js"
  },
  "dependencies": {
    "cors": "^2.8.6",
    "express": "^5.3.0"
  }
}
```

Puntos importantes:

- **`"type": "module"`** permite usar la sintaxis moderna de módulos ES (`import` / `export`) en lugar de `require`.
- **`"dev"`** es el script que levanta el servidor con recarga automática.

## Paso a paso de cómo se creó el proyecto

### 1. Creación de la carpeta y apertura en VS Code

```bash
mkdir evaluacion-1-libertadores
cd evaluacion-1-libertadores
code .
```

### 2. Instalación de Yarn e inicialización del proyecto

```bash
npm install -g yarn     # Instala Yarn de forma global
yarn -v                 # Verifica la versión instalada
yarn init -y            # Crea el package.json con valores por defecto
yarn add express cors   # Instala las dependencias del proyecto
```

### 3. Configuración del `package.json`

Se agregó `"type": "module"` y el script `dev` con `node --watch server.js` (ver sección anterior).

### 4. Creación del `.gitignore`

Para evitar subir al repositorio las dependencias y las variables de entorno, se creó el archivo `.gitignore` desde la terminal de Windows (CMD):

```cmd
(echo node_modules& echo .env)> .gitignore
```

Contenido resultante:

```
node_modules
.env
```

- **`node_modules`**: se excluye porque es pesado y se puede regenerar con `yarn install`.
- **`.env`**: se excluye porque puede contener datos sensibles (contraseñas, claves de API, etc.).

### 5. Subida a GitHub

```bash
git init
git add .
git commit -m "Primer commit"
git branch -M main
git remote add origin https://github.com/conimorales/Backend_Tarea1.git
git push -u origin main
```

> **Nota:** si aparece el error `remote origin already exists`, se puede corregir la URL del remoto con:
>
> ```bash
> git remote set-url origin https://github.com/conimorales/Backend_Tarea1.git
> ```

## Autora

[@conimorales](https://github.com/conimorales)

## Licencia

Este proyecto está bajo la licencia MIT.
