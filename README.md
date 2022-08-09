# Bruno Biluca Portal

# Adição de conteúdos

Para adicionar novos conteúdos é necessário seguir os seguintes passos:

- Duplicar a pasta `template` dentro da pasta de conteúdo
- Editar o arquivo de configuração
  - O nome do arquivo é `article.json` ou `game.json`
  - Os campos `key` e `slug` devem ter o mesmo nome da pasta do conteúdo
- Adicionar o nome da pasta do conteúdo no arquivo de registro
  - Artigos são registrados no arquivo `src\config\RegisteredArticles.js`
  - Games são registrados no arquivo `src\config\RegisteredGames.js`

# Project Setup

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm start:watch`

Runs the app in the development mode watching for changes in the code.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder. The build is minified and the filenames include the hashes. Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
