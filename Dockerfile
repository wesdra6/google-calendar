FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build  # Compila TypeScript para JavaScript
CMD ["node", "build/index.js"]  # Executa o arquivo compilado
