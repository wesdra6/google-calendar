cat > Dockerfile <<EOF
FROM node:18
WORKDIR /app

# Copia e instala dependências
COPY package*.json ./
RUN npm install

# Copia todo o código e compila
COPY . .
RUN npm run build

# Configura variáveis de ambiente obrigatórias
ENV GOOGLE_CLIENT_ID=\$GOOGLE_CLIENT_ID
ENV GOOGLE_CLIENT_SECRET=\$GOOGLE_CLIENT_SECRET
ENV GOOGLE_REDIRECT_URI=\$GOOGLE_REDIRECT_URI
ENV GOOGLE_REFRESH_TOKEN=\$GOOGLE_REFRESH_TOKEN

# Porta e comando de execução
EXPOSE 3000
CMD ["node", "build/index.js"]
EOF
