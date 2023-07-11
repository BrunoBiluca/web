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

# Commit messages

As mensagem de commits deve seguir o seguinte formato

```
[tipo] [descrição do conteúdo alterado] [(opcional) justificativa]
```

- tipo: parte destinada a definir o tipo de alteração que está sendo registrada
- descrição do conteúdo alterado: parte destinada a descrever em poucas palavras o que foi alterado nesse commit
- justificativa: parte destinada a definir uma justificativa para para a alteração commitada
	- A justificativa é opcional já que muitas vezes a própria descrição do conteúdo já explana a justificativa da alteração.

## Tipos 

Cada commit deve ter um tipo associado, esses tipos são definidos como emojis para facilitar o seu entendimento.

| Emoji | Descrição                                          |
| ----- | -------------------------------------------------- |
| 📈     | Alteração relacionada a análise de dados do portal |
