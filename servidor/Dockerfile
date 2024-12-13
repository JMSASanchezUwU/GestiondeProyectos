# Usar la versión de Node.js 18.17.1-alpine
FROM node:18.17.1-alpine

# Crear un directorio de trabajo
WORKDIR /usr/src/app

# Copiar los archivos package.json y package-lock.json al directorio de trabajo
COPY package.json package-lock.json ./

# Instalar las dependencias
RUN npm install --force

# Copiar todo el directorio del proyecto al contenedor
COPY . .

# Ajustar permisos para asegurar que Node.js pueda acceder a los archivos
RUN chown -R node:node /usr/src/app \
    && chmod -R 755 /usr/src/app

# Cambiar al usuario "node" para mejorar la seguridad
USER node

# Exponer el puerto 3000
EXPOSE 80

# Comando para ejecutar la aplicación
CMD ["node", "index.js"]
