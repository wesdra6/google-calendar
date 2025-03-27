FROM node:18
WORKDIR /app

# 1. Instala dependências e compila o TypeScript
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build  # Isso criará os arquivos em /build

# 2. Verifica se o build foi bem-sucedido
RUN ls -l /app/build  # Lista os arquivos compilados (para debug)

# 3. Executa o aplicativo
CMD ["node", "build/index.js"]
