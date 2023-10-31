# Conteúdos

Os conteúdos do Portal estão armazenados em `public/content`.

# Adição de conteúdos

Para adicionar novos conteúdos é necessário seguir os seguintes passos:

- Duplicar a pasta `template` dentro da pasta de conteúdo
- Editar o arquivo de configuração
  - O nome do arquivo é `article.json` ou `game.json`
  - Os campos `key` e `slug` devem ter o mesmo nome da pasta do conteúdo
- Adicionar o nome da pasta do conteúdo no arquivo de registro
  - Artigos são registrados no arquivo `src\config\RegisteredArticles.js`
  - Games são registrados no arquivo `src\config\RegisteredGames.js`