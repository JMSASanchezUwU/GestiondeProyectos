# Etapa de compilación
FROM node:18 AS build

WORKDIR /usr/src/app

# Copiar archivos de configuración de npm
COPY package*.json ./

# Instalar dependencias
RUN npm install --legacy-peer-deps

# Copiar el resto del código
COPY . .

# Construir el proyecto Angular
RUN npm run build

# Etapa de producción
FROM nginx:stable-alpine

# Eliminar el contenido predeterminado de Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copiar los archivos compilados de Angular al directorio de Nginx
COPY --from=build /usr/src/app/dist/proyecto-nad /usr/share/nginx/html

# Configurar permisos para Nginx
RUN chmod -R 755 /usr/share/nginx/html

# Configurar nginx.conf y mime.types
COPY nginx.conf /etc/nginx/nginx.conf
COPY mime.types /etc/nginx/mime.types
RUN chmod 644 /etc/nginx/nginx.conf /etc/nginx/mime.types

# Exponer el puerto 80
EXPOSE 80

# Iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
