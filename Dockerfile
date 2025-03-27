# Base image
FROM node:18

# Define o diretório de trabalho
WORKDIR /app

# Copia e instala dependências
COPY package*.json ./
RUN npm install

# Copia todo o código-fonte
COPY . .

# Compila o código TypeScript
RUN npm run build

# Expõe a porta do servidor
EXPOSE 3001

# Comando para iniciar o servidor
CMD ["node", "build/index.js"]
