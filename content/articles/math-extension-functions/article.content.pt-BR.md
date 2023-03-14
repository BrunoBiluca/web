# 4 funções matemáticas úteis no desenvolvimento de games

> 💡Nesse artigo você encontrará:
> - Implementação das funções (Sign, Clamp, Distance e Remap)
> - Ideias de aplicações
> - Ideias de utilização focada em legibilidade

Funções matemáticas são comumente utilizadas no desenvolvimento de games. Seja para calcular o dano casado se um inimigo ataca o herói do jogo, seja a movimentação dos personagem, inteligência artificial, gerenciamento de recursos. O desenvolvedor está rotineiramente implementando operações e fórmulas para definir o comportamento de seu jogo.

Por mais que fórmulas matemáticas são utilizadas em todos os lugares, deixar essas operações soltas no código pode dificultar bastante a legibilidade futura. Simples funções matemáticas podem tirar atenção do que realmente o código está executando.

> 🐶 **Pense comigo:** Tome como exemplo o código abaixo e me diga se você consegue explicar o que esse código faz?

```csharp
if(value >= 0f) {
  if(value < min)
    Console.Write(min);

  if(value > max)
    Console.Write(max);

  Console.Write(value);
}
```

É um código simples que caso o valor `value` for maior que zero, então ele imprime o mínimo se o valor for menor que o mínimo, o máximo se o valor form maior que o máximo ou o próprio valor se este estiver entre o mínimo e o máximo. Esse código pode ser reutilizado em vários pontos do código, e toda vez será necessário entender o que está implementado.

Agora podemos escrever a mesma coisa como

```csharp
if(IsSignPositive(value))
  Console.Write(Clamp(value, min, max))
```

Como podemos ver nesse exemplo, encapsular essas operações em funções podem melhorar muito o estado do código e facilitar sua compreensão, além de já utilizar conceitos definidos pela própria matemática, ou seja, outros desenvolvedores que já estão acostumados com esses conceitos conseguem compartilhar conhecimento de forma mais simples.

# Função de Sign

A função de Sign (🐶 não confundir com Sing de cantar hahaha), informa como o nome diz o sinal do valor avaliado.

Sua implementação é muito simples e segue conforme

```csharp
public static float Sign(float value)
{
    return (value >= 0f) ? 1f : -1f;
}
```

Com a função Sign podemos definir por exemplo se um <mark>objeto está se movimentando na direção do personagem ou ao contrário</mark>, já que a velocidade do objeto será positiva caso a distância aumente ou negativa caso a distância diminua. 

Outro exemplo seria na implementação de um <mark>sistema de vida</mark>, utilizando a função Sign também podemos saber se o valor alterado na vida do personagem foi de cura ou de dano.

> 🐶 Dica: encapsular expressões lógicas e matemáticas em função deixam o código muito mais limpo.

Aqui vão algumas ideias de funções que aumentam a legibilidade do nosso código.

```csharp
public static bool IsSignPositive(float a)
{
  return Sign(a) == 1f;
}

public static bool IsSignNegative(float a)
{
  return Sign(a) == -1f;
}

public static bool IsSameSign(float a, float b)
{
    return Sign(a) * Sign(b) >= 0f;
}

public static bool IsNotSameSign()
{
    return Sign(a) * Sign(b) < 0f;
}
```

Parecem funções simples, mas fazem toda a diferença quando estamos lendo código com muita informação matemática.

# Função Clamp

O termo <mark>clamp</mark> é utilizado quando queremos restringir um número entre outros dois números. Quando fazermos o clamp de um número estamos falando que esse número será o seu valor atual se estiver entre a faixa determinada ou um dos valores limitantes.

A implementação do Clamp é bem simples e direta

```csharp
public float Clamp(float value, float min, float max){
  if(value < min)
    return min;

  if(value > max)
      return max;

  return value;
}
```

Essa função pode ser muito útil no desenvolvimento de games, principalmente quando os valores não devam sair de certos limites definidos.

Em um <mark>sistema de Barra de vida</mark> por exemplo, quando recuperamos a vida do personagem, o valor da vida atual do personagem não deve ultrapassar o valor máximo da vida do personagem, se isso acontecesse levaria a um personagem com vida infinita.

# Função de Distância

A função de <mark>Distância</mark> é utiliza quando queremos saber a distância total entre dois valores. Seria apenas calcular a diferença entre os números se não fosse que podemos também ter valores negativos. A distância entre valores com o mesmo sinal é dada pela diferença do maior valor para o menor valor, e a distância entre valores com sinais opostos é dada pela soma dos dois valores.

A implementação da função de distância precisa levar em consideração todos esses casos e pode ser dada da seguinte maneira

```csharp
public static float Distance(float a, float b)
{
    // IsSameSign está definida um pouco mais acima no artigo
    if(IsSameSign(a, b)) 
        return Abs(Abs(a) - Abs(b));

    return Abs(a) + Abs(b);
}
```

O cálculo de distância pode ser utilizado principalmente quando precisamos de conhecer uma fórmula que determina o comportamento entre dois valores e aplicamos alguma operação nessa faixa de valores.

No meu artigo de <mark>interpolação linear</mark> é a função de distância é bastante utilizada, já que para interpolar a posição de um objeto é necessário saber toda a **faixa de movimentação** necessária entre dois pontos. Ou seja, para interpolar o movimento em uma dimensão do ponto `x = -3` até `x = 3` sabemos que a distância movimentada é `distance = 6`, assim se cada passo for relativo a 1 metro, quando movemos 1 passo corresponde a 16,67% de todo o movimento que será interpolado.

# Remap

A função <mark>Remap</mark> define o mapeamento de um valor qualquer entre duas faixas de valores distintas. Esse valor está definido em uma faixa e deve ser mapeado para a segunda faixa, mantendo suas determinadas proporções. 

Podemos também garantir que o valor que está sendo mapeado esteja confinado nos limites da sua faixa de valores.

A implementação do Remap é dada a seguir

```csharp
public static float Remap(
    float value,
    float from1,
    float to1,
    float from2,
    float to2,
    bool clampValue = true
)
{
    var testValue = value;

    if(clampValue)
        testValue = Clamp(value, from1, to1);

    return (testValue - from1) / (to1 - from1) * (to2 - from2) + from2;
}
```

Um caso que utilizei o Remap foi em um <mark>sistema de Zoom da câmera</mark> que implementei onde queria que de acordo com a altura da câmera também fosse implementado uma rotação da câmera. Ou seja, nesse exemplo temos duas faixas de valores distintos, uma a faixa de altura da câmera e a outra a faixa de rotação da câmera, e o valor mapeado seria da altura atual da câmera para a rotação da câmera.

Esse exemplo pode ser implementado utilizando a função Remap da seguinte maneira

```csharp
var cameraRotation = Remap(
  cameraHeight,
  heightLimitMin,
  HeightLimitMax,
  rotationLimitMin,
  rotationLimitMax
);
```

O `cameraRotation` será o valor proporcional a altura da câmera agora mapeado nos limites de rotação que a câmera segue.

# Biluca, o que tiramos disso tudo?

Como pudemos ver nesse artigo a matemática é comumente utiliza no desenvolvimento de games. É bastante normal ver em códigos todos essas funções reimplementadas múltiplas vezes. 

Esse tipo de abordagem exige do desenvolver muito mais esforço na hora de analisar um código, já que quando este além do comportamento do código ele tem que estar preocupado com detalhes de implementação.

Encapsular essas fórmulas em funções próprias e dar um nome adequado podem auxiliar bastante o desenvolvedor a entender realmente o que ele precisa desse código. 

Assim não podemos negligenciar a legibilidade do código e devemos sempre presar pelo código mais simples e fácil de ler, mesmo que essa seja uma fórmula matemática complexa.


# Código fonte

- [Código das funções](https://github.com/BrunoBiluca/UnityFoundation/blob/main/Code/Math/MathX.cs)
- [Código de teste das funções](https://github.com/BrunoBiluca/UnityFoundation/blob/main/Code/_Tests/Math/MathXTest.cs)
