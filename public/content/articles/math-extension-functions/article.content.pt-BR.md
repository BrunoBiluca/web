> 💡Nesse artigo você encontrará:
> - Implementação das funções (Sign, Clamp, Distance e Remap)
> - Ideias de aplicações dessa funções
> - Ideias de utilização focada em legibilidade

Funções matemáticas são comumente utilizadas no desenvolvimento de games. Seja para calcular o dano causado o personagem herói do jogo ataca um inimigo, seja a movimentação dos personagem, inteligência artificial, gerenciamento de recursos, entre vários outros exemplos. O desenvolvedor está rotineiramente implementando operações e fórmulas para definir o comportamento de seu jogo.

Por mais que fórmulas matemáticas são utilizadas em todos os lugares, deixar essas operações soltas no código pode dificultar bastante sua legibilidade. Simples funções matemáticas podem tirar a atenção do desenvolvedor do que realmente o código está executando. Por esse motivos devemos implementar funções matemáticas levando em consideração sua legibilidade também.

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

A princípio é um código simples. Se variável `value` for maior que zero, será impresso no console o mínimo, caso o valor for menor que o mínimo, ou o máximo se o valor for maior que o máximo ou o próprio valor se este estiver entre o mínimo e o máximo. Não é difícil imaginar que um código similar será reutilizado em vários outros pontos do projeto, levando a desenvolvedores sempre terem a necessidade de entender em muitos detalhes o que está implementado.

Agora podemos escrever a mesma coisa como

```csharp
if(IsSignPositive(value))
  Console.Write(Clamp(value, min, max))
```

Esse exemplo nos mostra que encapsular essas operações em funções podem melhorar muito a legibilidade do código e facilitar sua compreensão. Também temos o bônus de já utilizar conceitos definidos pela própria matemática, ou seja, outros desenvolvedores que já estão acostumados com a nomenclatura matemática consegue entender o que está sendo feito pelo código.

Assim as próximas seções irão demonstrar a implementação de 4 funções muito utilizadas durante o desenvolvimento de games, focando também na legibilidade dessas funções.

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

O termo <mark>clamp</mark> é utilizado quando queremos restringir um número entre outros dois números. 

Quando fazermos o clamp de um número estamos falando que esse número será o seu valor atual se estiver entre a faixa determinada ou um dos valores limitantes.

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

Essa função pode ser muito útil no desenvolvimento de games, principalmente quando precisamos garantir que valores não possam ultrapassar certos limites definidos.

Em um <mark>sistema de Barra de vida</mark> por exemplo, quando recuperamos a vida do personagem, o valor da vida atual do personagem não deve ultrapassar o valor máximo da vida do personagem, se isso acontecesse levaria a um personagem com vida infinita.

# Função de Distância

A função de <mark>Distância</mark> é utiliza quando queremos saber a distância total entre dois valores. 

Seria apenas calcular a diferença entre os números se não fosse que podemos também ter valores negativos. A distância entre valores com o mesmo sinal é dada pela diferença do maior valor para o menor valor, e a distância entre valores com sinais opostos é dada pela soma dos dois valores.

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

No meu artigo de <mark>interpolação linear</mark> a função de distância é bastante utilizada. Para interpolar a posição de um objeto é necessário saber toda a sua **faixa de movimentação** entre dois pontos. Ou seja, para interpolar o movimento em uma dimensão do ponto `x = -3` até `x = 3` sabemos que a distância movimentada é `distance = 6`, assim se cada passo for relativo a 1 metro, quando movemos 1 passo corresponde a 16,67% de todo o movimento que será interpolado.

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

Um caso que utilizei o Remap foi em um <mark>sistema de Zoom da câmera</mark>. Quando o zoom da câmera era efetuado uma rotação também era aplicada. Assim era necessário remapear o valor da altura da câmera entre os limites de rotação. Ou seja, nesse exemplo temos duas faixas de valores distintos, uma a faixa de altura e a outra a faixa de rotação, onde o valor mapeado seria da altura atual da câmera para a sua rotação.

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

O `cameraRotation` será o valor proporcional a altura da câmera agora mapeado nos limites de rotação.

# Biluca, o que tiramos disso tudo?

Como pudemos ver nesse artigo a matemática é comumente utiliza no desenvolvimento de games. É bastante normal ver em códigos todos essas funções reimplementadas múltiplas vezes. 

Esse tipo de abordagem exige do desenvolver muito mais esforço na hora de fazer uma análise no código, já que quando este além do seu comportamento também deixa explícito detalhes de implementação. Encapsular essas fórmulas em funções próprias com uma nomenclatura adequada pode auxiliar bastante o desenvolvedor a entender realmente o que é necessário. 

Assim não podemos negligenciar a legibilidade do código. Mesmo fórmulas matemáticas complexas podem ser implementadas de uma forma simples e fácil de ser lida.


# Código fonte

- [Código das funções](https://github.com/BrunoBiluca/UnityFoundation/blob/main/Code/Math/MathX.cs)
- [Código de teste das funções](https://github.com/BrunoBiluca/UnityFoundation/blob/main/Code/_Tests/Math/MathXTest.cs)
