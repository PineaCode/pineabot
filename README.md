# BOT PineaBot

![deno compatibility](https://shield.deno.dev/deno/1.31)

Bot oficial del servidor de discord **"PineaCode"**, creado con Deno 🦕

## Inicio

Para iniciar el proyecto debes escribir uno de los siguientes comandos.
```sh
# Inicia en modo desarrollo
denon start

# Inicia en modo producción
deno task start
```

Antes de iniciar el bot se debe crear un archivo `.env` en la raiz del proyecto, para esto se debe copiar la plantilla proporcionada y agregar los valores faltantes.
```sh
cp .env.template .env
```

## Funcionalidades
- ### Básicas
- [x] Ping-Pong para comprobar la velocidad de conexión con el bot.
- [x] Reacciones automaticas hacia los comentarios generados en cualquier canal del servidor.

- ### Busquedas
- [x] Buscar repositorio de código desde GitHub.
- [x] Buscar paquetes o librerías desde NPM.
- [x] Buscar terminos desde Wikipedia.
- [ ] Buscar paquetes o librerias para deno y python.

- ### ChatGPT
- [x] Generación de comentarios infomativos relacionados a los últimos temas conversados en el canal **"chat"**. `(usando chatgpt)`
- [ ] Respuestas a preguntas relacionadas con el servidor. `(usando chatgpt)`
- [ ] Respuestas a cualquier clase de pregunta por sesión de usuario. `(usando chatgpt)`

- ### Otras
- [ ] Moderación del servidor.
- [ ] Sistema antiscam.
- [ ] Ranking y sistema de recopilación de comportamientos de los usuarios.
- [ ] Autenticación de nuevos usuarios.
- [ ] Generador de mensajes embed.

## Servicios Principales

- [x] Environment Varibales (Config.service)
- [x] HTTP Client (Request.service)
- [x] Web Socket (WebSocket.service)
- [ ] ChatGPT
- [ ] Database/ORM
- [ ] Scraping

## Concord

Los archivos ubicados en la carpeta [./src/concord](./src/concord/) fueron creados a partir de una librería de Node.js
para crear bots de discord de forma fácil y rápida, el enlace a NPM es el siguiente: [https://www.npmjs.com/package/@edixon/concord](https://www.npmjs.com/package/@edixon/concord)

En el futuro se tiene pensado deprecar dicha librería y crear una para Deno basandose en la construcción y evolución de este proyecto.

## Pruebas Unitarias

🥺 TODO: Crear pruebas unitarias en [./test](./test/)

## Como Contribuir
Siéntase libre de agregar código para mejorar o corregir este proyecto.

- Realice un Fork a este repositorio desde el branch `main`
- Cree un branch con su nueva caracteristica `git checkout -b feature/fooBar` o corrección `git checkout -b fixmed/fooBar`
- Confirme sus cambios `git commit -am 'Add fooBar'`
- Suba el branch `git push origin feature/fooBar`
- Cree un nuevo Pull Request hacia el branch `main`

## Licencia

[MIT](https://github.com/PineaCode/bot-pineabot/blob/main/LICENSE) &copy; Pinea Code
