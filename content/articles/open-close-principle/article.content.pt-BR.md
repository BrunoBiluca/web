> 💡Nesse artigo você encontrará:
> - Definição do princípio
> - Implementação do princípio em um caso

O princípio Open-Closed (Aberto-Fechado) é o segundo princípio definido no conjunto SOLID. Esse princípio tem como objetivo definir que comportamentos dentro do código sejam estendidos em vez de modificados. E lembrando sempre que modificamos um sistema podemos adicionar bugs e comportamentos que já estavam finalizados podem ter um comportamento inesperado.

>  📝 Definição: uma entidade de software (classe, módulo, função, método) deve ser aberto para extensão e fechado para modificação.

Ou seja, entidades de software devem possibilitar sua expansão de a adicionar outras funcionalidades ao sistema, sem que nenhuma modificação seja feita nas entidades já finalizadas.

Essa extensão deve ser possibilitada por qualquer entidade de software. Um método pode ser chamado por outro que adicione funcionalidade, um classe pode herdar de outra de forma a adicionar funcionalidade, um módulo inteiro pode estender outro módulo.

> 🧱 TODO: adicionar as vantagens de se utilizar o open closed principle

Para demonstrar esse conceito em prática vamos explorar o seguinte cenário. Queremos aplicar operações diversas em um objeto no jogo, onde podemos:

- Mover esse objeto
- Rotacionar esse objeto
- Escalonar esse objeto

Na primeira versão do jogo queremos

- Mover o objeto em círculo
- Escalonar o objeto de forma a expandir e contrair

## Implementando a primeira versão do Jogo

Para a primeira funcionalidade implementada iremos implementar a movimentação do objeto em círculo. Dessa forma criamos então uma classe para implementar esse movimento.

```csharp
public class MovementWithoutOpenClosed : MonoBehaviour
{
    float radius = 3f;
    float posX = 0f;
    float posY = 0f;

    public void Update()
    {
        posX += Time.deltaTime;
        posY += Time.deltaTime;
        transform.position = new Vector3(
            Mathf.Sin(posX) * radius,
            Mathf.Cos(posY) * radius,
            0f
        );
    }
}
```

Com isso implementado já temos a primeira funcionalidade implementada.

Agora vamos implementar a segunda funcionalidade de expandir e contrair o objeto.

```csharp
public class MovementWithoutOpenClosed : MonoBehaviour
{
    float radius = 3f;
    float posX = 0f;
    float posY = 0f;

    public void Update()
    {
      // código anterior...

      transform.localScale = new Vector3(
        Mathf.Abs(Mathf.Sin(posX)),
        Mathf.Abs(Mathf.Cos(posY)),
        1f
      );
    }
}
```

Como podemos perceber a implementação da nova funcionalidade alterou o código que já existe. Mesmo sendo bem simples esse código, já conseguimos ver com ele fere o princípio do Aberto/Fechado, nesse caso podíamos ter adicionado algum comportamento inesperado ao sistema, que talvez seria difícil de verificar de imediato.

Como não queremos construir um Cyberpunk 2077 aqui vamos então implementar o mesmo código, porém seguindo o princípio.

# Versão Fechada para modificação



## Seção Bônus

As funções de extensão presentes no C# são exemplos desse princípio. 

> 📝 Uma função de extensão é uma função estática que é implementada onde o primeiro parâmetro da função é declarado como `this`.

```csharp
public static class IntExtensions 
{
  public static int Add(this int value, int amount)
  {
    value += amount;
    return value;
  }
}

```

Nesse exemplo simbólico estamos estendendo a estrutura `int` e adicionando o método `Add(value, amount)`. Esse tipo de implementação também é análoga ao padrão Decorator.