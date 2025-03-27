FROM node:18
WORKDIR /app

# Instala dependências e compila o TypeScript
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build  # Compila o TypeScript para JS

# Executa o arquivo compilado
CMD node build/index.js
