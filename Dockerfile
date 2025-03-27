FROM node:18
WORKDIR /app

# Instala dependências e compila
COPY package*.json ./
RUN npm install
COPY . .

# Força a compilação TypeScript e verifica
RUN npx tsc --outDir build && ls -l build/

# Verifica se as variáveis de ambiente existem
RUN echo "Verificando variáveis:"
RUN echo "CLIENT_ID=${GOOGLE_CLIENT_ID}"
RUN echo "REDIRECT_URI=${GOOGLE_REDIRECT_URI}"
# Adicione ANTES do CMD
ENV GOOGLE_CLIENT_ID=$GOOGLE_CLIENT_ID
ENV GOOGLE_CLIENT_SECRET=$GOOGLE_CLIENT_SECRET
ENV GOOGLE_REDIRECT_URI=$GOOGLE_REDIRECT_URI
ENV GOOGLE_REFRESH_TOKEN=$GOOGLE_REFRESH_TOKEN

CMD ["node", "build/index.js"]
