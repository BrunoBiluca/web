# Versionamento

O versionamento é feito por uma branch única que é sempre alterada e publicada.

## Commit messages

As mensagem de commits deve seguir o seguinte formato

```
[tipo] [descrição do conteúdo alterado] [(opcional) justificativa]
```

- tipo: parte destinada a definir o tipo de alteração que está sendo registrada
- descrição do conteúdo alterado: parte destinada a descrever em poucas palavras o que foi alterado nesse commit
- justificativa: parte destinada a definir uma justificativa para para a alteração commitada
	- A justificativa é opcional já que muitas vezes a própria descrição do conteúdo já explana a justificativa da alteração.

### Tipos 

Cada commit deve ter um tipo associado, esses tipos são definidos como emojis para facilitar o seu entendimento.

| Emoji | Descrição                                                                             |
| ----- | ------------------------------------------------------------------------------------- |
| ✨     | Criação ou alteração de funcionalidades                                               |
| 💄     | Criação ou alteração de formatos da interface visual do usuário                       |
| 🔥     | Remoção de artigos, códigos, documentação ou qualquer outro elemento do versionamento |
| 🐛     | Correção de alguma funcionalidades                                                    |
| ♻️     | Refatoração do projeto para melhorar legibilidade, organização                        |
| 📖     | Adição ou alteração de documentação do projeto                                        |
| 📈     | Alteração relacionada a análise de dados do portal (analytics)                        |
| 📝     | Adição e edição de conteúdos                                                          |
| 🔧     | Adição ou edição recursos para gerenciamento de conteúdos                             |
