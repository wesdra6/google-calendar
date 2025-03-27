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

# Define variáveis de ambiente obrigatórias
ENV GOOGLE_CLIENT_ID=$GOOGLE_CLIENT_ID
ENV GOOGLE_CLIENT_SECRET=$GOOGLE_CLIENT_SECRET
ENV GOOGLE_REDIRECT_URI=$GOOGLE_REDIRECT_URI
ENV GOOGLE_REFRESH_TOKEN=$GOOGLE_REFRESH_TOKEN

# Expõe a porta do servidor
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["node", "build/index.js"]
