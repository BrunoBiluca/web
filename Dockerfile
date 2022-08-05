# Imagem de Origem
FROM node:13-alpine
# Diretório de trabalho(é onde a aplicação ficará dentro do container).
WORKDIR /app

COPY . .

# Adicionando `/app/node_modules/.bin` para o $PATH
ENV PATH ./node_modules/.bin:$PATH

# Instalando dependências da aplicação e armazenando em cache.
RUN npm install

# Inicializa a aplicação
CMD ["npm", "start"]