# Utilizamos la imagen oficial de Deno
FROM denoland/deno:1.32.5

# Se establece el directorio de trabajo en el contenedor
WORKDIR /app

# Se copian los archivos del proyecto al contenedor
COPY ./src/. ./src
COPY ./deno.jsonc .
COPY ./import_map.json .
COPY ./deno.lock .
COPY ./.env.production ./.env

# Se especifica el puerto que se usará para exponer la aplicación
# EXPOSE 8080

# Se especifica el comando que se ejecutará al iniciar el contenedor
CMD ["deno", "task", "start"]
