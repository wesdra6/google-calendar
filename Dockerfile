FROM node:18
WORKDIR /app

# 1. Copia e instala dependências
COPY package*.json ./
RUN npm install

# 2. Copia todo o código e compila
COPY . .
RUN npm run build  # Executa "tsc" e ajusta permissões

# 3. Configuração de execução
ENV NODE_ENV=production
CMD ["node", "build/index.js"]
