#CSS3

###Oque é CSS?

CSS (Cascading Style Sheet - Folha de estilo em cascata), criada pelo W3C (Wordl Wide Web Consortium) em 1996, é usada para a estilização da página escrita em HTML ou XHTML, modificando a parte visual do site de forma que fique com um design melhor, Pensa que o HTML é a sua caixa de presentes e o CSS é o embrulho de presente que você comprou para enfeitar o presente, ou melhor, pense que você comprou uma àrvore de natal para por em sua casa, só a arvore de natal já tem a representação natalina, mas seria tão sem graça não ter alguma decoração nela, foi pensando nisso que hoje todas as àrvores de natal são enfeitadas, o mesmo podemos dizer do nosso HTML e CSS, um complementa o outro de forma que, quando se trata de algum sistema WEB, onde o HTML é toda a base dos sistemas WEB, o CSS vem incluso no pacote para você poder fazer a estilização de página, é como uma dupla sertaneja, um é essencial para o outro.

####Como referenciar dentro do HTML?

O CSS tem duas formas de ser referênciado para o HTML, ou seja, há duas formas de declarar o CSS para o HTML, uma sendo no mesmo arquivo HTML e outra sendo em outro arquivo externo no formato css

1. No mesmo arquivo:

Para referencair no arquivo, na parte da Tag **\<head>** do documento, insere-se uma tag **\<style>** e dentro desta tag é delcarado todo o CSS da página, no final do CSS é fechada a tag  com a tag \</style>.

* Exemplo:
```

<!DOCTYPE html>  
<html>  
    <head>
        <title>Home</title>
        <meta charset="utf-8">
        <style>
            body{
                margin:0;
                padding:0;
                background-color:#FFFF;
            }
            #divisoria{
                text-align:center;
                align-content:center;
            }
            .botao{
                background:blue;
                padding:20px;
            }
        </style>
    </head>
    <body>
        <div id="divisoria">
            <button class="botao">Teste</button>
        </div>
    </body>
</html>

```
Exemplo prático:
[HTML](estilo_na_folha.html)


2. Em um arquivo externo do tipo CSS:

    Para referênciar em um arquivo externo, oque se recomenda sempre a ser feito, fazemos um link para o arquivo com o CSS, usamos a Tag **\<link>** para fazer isso, dentro da tag link inserimos as informações da folha, como o seu tipo e seu local.

* Exemplo:
<br>
<br>
* HTML:
```
<!-- Arquivo HTML Redirecionando a folha de estilização CSS pela tag <link> -->
<!DOCTYPE html>  
<html>  
    <head>
        <title>Home</title>
        <meta charset="utf-8">
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <div id="divisoria">
            <button class="botao">Teste</button>
        </div>
    </body>
</html>
```
* CSS:
```

<!-- Arquivo CSS -->
body{
    margin:0;
    padding:0;
    background-color:#FFFF;
}
#divisoria{
    text-align:center;
    align-content:center;
}
.botao{
    background:blue;
    padding:20px;
}

```

* Exemplo prático:
    [HTML](estilo_externo.html)
    [CSS](estilo.css)

####Qual sua sintaxe?


A sintaxe do CSS é tão simples quanto andar. Ela é dividida por 2 partes, O seletor e a declaração.
![Imagem de como declarar estilos](declaration.png)

* Seletores:
São os indicadores que definem quem será estilizado, podem ser os elementos HTML do documento, as Classes e as IDs criadas pelo deselvolvedor. 

>Quando usado a estilização com o seletor de Elemento HTML, todos os elementos com a mesma TAG receberão a mesma estilização, a menos que haja uma classe ou ID para sobrepor a estilização do Elemento.

Exemplo de utilização do seletor com o Elemento HTLM:

```
p{
    font-family:sans-serif;
    color:greeen;
    font-size:18px;
    font-stretch:900;
}
```

>O seletor foi definido como o elemento HTML p, ou seja, todos os elementos P dentro desse arquivo HTML receberão essa estilização.

Exemplo de seletor por classes:

```
<!--HTML-->
<!DOCTYPE html>  
<html>  
    <head>
        <title>Home</title>
        <meta charset="utf-8">
        <style>
            .botao{
                background:blue;
                padding:20px;
            }
        </style>
    </head>
    <body>
        <div>
            <button class="botao">Teste</button>
        </div>
    </body>
</html>

```
>Repare que no botão foi aplicada a classe, pelo atributo **class="botao"** e sua estilização está declarada dentro da tag **style** com o mesmo nome da classe, apênas com o **ponto (.)** antecedendo o nome da classe criado.
É obrigatório a colocação do ponto antecedendo a classe no CSS, pois isso o define como uma classe.
Classes podem ser reutilizadas por outros elementos, basta chamá-las no atruibuto classe.
No atributo classe, pode ser chamado mais de um classe ao mesmo tempo, por fim de reutilizar uma estilização já feita. Para fazer isso, basta dar um espaço dentre o nome de uma classe e outra.
Pense que na minha estilização exista duas classes diferentes, a C1 e C2, e eu quero utilizar as duas classses num elemento só: **... class="C1 C2" ...**
Inserindo dessa forma, ele identificará que ele deve carregar as duas classes para o mesmo elemento.

Exemplo de Seletor por IDs:

```
<!DOCTYPE html>  
<html>  
    <head>
        <title>Home</title>
        <meta charset="utf-8">
        <style>
            #divisoria{
                text-align:center;
                align-content:center;
            }
        </style>
    </head>
    <body>
        <div id="divisoria">
            <button>Teste</button>
        </div>
    </body>
</html>

```

>No caso de utilizar IDs, ao invés de se utilizar **ponto (.)**, usa-se **#**.
No HTML, insere-se o atributo ID para definir o ID do elemento.**... id="divisoria" ...**
No CSS, o ID é chamado da seguinte forma: **... #divisoria{ ... }**
Diferente das classes, o mesmo ID não pode ser utilizado mais de uma vez, ou seja, cada ID para cada elemento tem que ser Único.

* Todos os Seletores:

Seletor | Exemplo | Exemplo descrito
:-------: | :---------: | :-----:
.classe| .intro | Seleciona todos os elementos com o atributo classe igual a intro
.classe1.classe2 | .nome1.nome2 | Seleciona todos os elementos com as classes .nome1 **e** .nome2\
.classe1 .classe2 | .nome1 .nome2 | Seleciona todos os elementos nome2 que são filhos de um elemento nome1
\#id | #nome | Seleciona o elemento com o ID #nome
* | * | Seleciona todos os elementos
elemento | p | Seleciona todos os elementos \<p>
elemento.classe | p.intro | Seleciona todos os elementos \<p> que tem a classe .intro declarada
elemento,elemento | div, p | seleciona todos os elementos \<div> e todos os elemento \<p>
elemento elemento| div p | seleciona todos os elementos \<p> dentro dos elementos \<div>
elemento>elemento| div > p | Seleciona todo elemento \<p> que for filho do elemento \<div>
elemento+elemento | div + p | Seleciona o primeiro elemento \<p> dentro de todos os elementos \<div>
elemento~elemento2 | p ~ ul | Seleciona todo elemento <ul> que é irmão do elemento \<p>, ou seja, tem o mesmo elemento pai.
[atributo] | [target] | Seleciona todos os elementos com o mesmo atributo
[atributo=valor] | [target=_blank] | seleciona todos os elementos com o mesmo atributo e o mesmo valor do atributo.
[atributo~=valor] | [title~=flower] | Seleciona todos os elementos com um atributo titulo que contenha a palavra "flower"
[atributo\|=valor]| [lang=en] | seleciona todos os elementos com o atributo lang que inicia com "en"
[atributo^=valor] | a[href^="https"] | seleciona qualquer elemento \<a> que o atributo href inicie com "https"
[atributo$=valor] | a[href$="pdf"] | Seleciona qualquer elemento \<a> que o atributo href termine com ".pdf"
[atributo*=valor] | a[href*="w3schools"] | Seleciona qualquer elemento \<a> que o atributo href que contenha apênas "w3schools"
:active | a:active | Seleciona um link ativo
::after | a::after | Insere alguma coisa depois de cada elemento \<p>
::before | p::before | Insere açguma coisa antes de cada elemento \<p>
:checked | input:checked | seleciona todo \<input> com o status de checked (marcado)
:deflaut | input:deflaut | Seleciona todo \<input> com o status deflaut (desmarcado)
:disabled | input:disabled | Seleciona todos os elementos \<input> que estão com o status disabled
:empty | p:empty | Seleciona todos os elementos \<p> que não tem filhos (incluindo textos).
:enabled | input:enabled | Seleciona todos os elementos \<input> que estão habilitados
:first-child | p:first-child | Seleciona o primeiro filho de cada \<p>
::first-letter | p:first-letter | Seleciona todas as primeiras letras de todos os elementos \<p>
::first-line | p::first-line | Seleciona em todos os elementos \<p>, a primeira linha de cada um.
:first-of-type | p:first-of-type | Seleciona o primeiro elemento \<p> que seja filho de um elemento \<p>
:focus | input:focus | Seleciona o elemento \<input> que esteja focado
:fullscreen | :fullscreen | Seleciona o elemento que esteja no modo full-screen
:hover | a:hover | Seleciona todo elemento \<a> que o mouse esteja passando por cima
:in-range | input:in-range | Seleciona os elementos \<input> que estejam num intervalo de valor especificado (atributos minimo e máximo)
:indeterminate | input:indeterminate | Seleciona todos os elementos \<input> que esão em estado indeterminado
:invalid | input:invalid | Seleciona todos os elementos input que estão com um valor inválido
:lang | p:lang(it) | Seleciona todos elementos \<p> que tenham o atributo lang igual a "it" (italiano)
:last-child | p:last-child | Seleciona todo elemento \<p> que é o ultimo filho de seu elemento pai
:last-of-type | p:last-of-type | Seleciona todo elemento \<p> que seja o ultimo elemento \<p> do seu elemento pai
:link | a:link | Seleciona todos os links visitados
::marker | ::marker | Seleciona os marcadores das listas de itens
:not(seletor) | :not(p) | Seleciona todos os elementos que não sejam o elemento \<p>
:nth-child(n) | p:nth-child(2) | Seleciona todos os segundos filhos dos elementos \<p>
:nth-last-child(n) | p:nth-last-child(2) | Seleciona todos os segundos filhos dos elementos \<p>, contando do ultimo para o primeiro
:nth-last-of-type(n) | p:nth-last-of-type(2) | Seleciona todo o segundo elemento \<p> dentro de cada elemento \<p> pai, contando de ultimo para o primeiro.
:nth-of-type(n) | p:nth-of-type(2) | Seleciona todos os segundos elementos \<p> dentro de cada elemento \<p> pai.
:only-of-type | p:only-of-type | Selecione todos os elementos \<p> que não tenham nenhum elemento \<p> irmão
:only-child | p:only-child | Seleciona todo elemento \<p> que seja o unico filho de seu elemento pai
:optional | input:optional | Seleciona todos os elementos \<input> que sejam opcionais (não tem o atributo required)
:out-of-range | input:out-of-range | Seleciona todos os elementos \<input> que o valor não esteja dentro do intervalo especifico
::placeholder | input::placeholder | Seleciona todo elemento \<input> que contenha o atributo "placeholder" definido
:read-only | input:read-only | Seleciona todos os elementos \<input> que tenham o atributo "readonly" especificado
:read-write | input:read-write | Seleciona todos os elementos \<input> que NÃO tenham o atributo "readonly" especificado
:required | input:required | Seleciona todos os elementos \<input> que tenham o atributo "required" especificado
:root | :root | Seleciona elemento raíz do documento
::selection | ::selection | Seleciona parte de um elemento selecionado pelo usuário.
:target | #news:target | Seleciona o elemento #news ativo atual
:valid | input:valid | Seleciona todos os elementos \<input> que tenham um valor válido
:visited | a:visited | Seleciona todos os links visitados


##Propriedades do CSS

<br>
###**align-content**

####Descrição:
Responsável por alinhar as linhas flexíveis, a propriedade modifica o comportamento da propriedade _flex-wrap_

>Deve haver váris linhas de itens para este item mostrar algum efeito visual.

>usar a propriedade _justify-content_ para alinhar os itens no eixo principal (horizontal).

####Sintaxe e valores:

```
align-content: stretch
align-content: center
align-content: flex-start
align-content: flex-end
align-content: space-between
align-content: space-around
align-content: initial
align-content: inherit
```

####Exemplo:

```
div {
  width: 70px;
  height: 300px;
  border: 1px solid #c3c3c3;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
}

```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 21.0
Internet Explorer | 11.0
FireFox | 28.0
Safari | 9.0<br>7.0 -webkit-
Opera | 12.1

Tipo | Definição
:--: | :-------:
Valor Padrão | Alongamento
Herdado | não
Animável? | não
Sintaxe javascript | objeto.**style.alignContent** = "center"


<br>
###**align-items**

####Descrição:
Especifica o alinhamento padrão para os itens dentro do contêiner flexível.

> Use a propriedade _align-self_ de cada item para substituir a  propriedade _align-items_.

####Sintaxe e valores:

```
align-items: stretch
align-items: center
align-items: flex-start
align-items: flex-end
align-items: baseline
align-items: initial
align-items: inherit
```

####Exemplo:

```
div {
  display: flex;
  align-items: center;
}

```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 21.0
Internet Explorer | 11.0
FireFox | 20.0
Safari | 9.0 <br> 7.0 -webkit-
Opera | 12.1

Tipo | Definição
:--: | :-------:
Valor Padrão | Alongamento
Herdado | não
Animável? | não
Sintaxe javascript | objeto.**style.alignItems** = "center"


<br>
###**align-self**

####Descrição:

Especifica o alinhamento do t=item selecionado dentro do recipiente flexível.

> Esta propriedade substitui a propriedade _align-items_ do contêiner flexível.

####Sintaxe e valores:

```
align-self: auto
align-self: stretch
align-self: center
align-self: flex-start
align-self: flex-end
align-self: baseline
align-self: initial
align-self: inherit
```

####Exemplo:

```
#myBlueDiv {
  align-self: center;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 21.0
Internet Explorer | 11.0
FireFox | 20.0
Safari | 9.0 <br> 7.0 -webkit-
Opera | 12.1

Tipo | Definição
:--: | :-------:
Valor Padrão | auto
Herdado | não
Animável? | não
Sintaxe javascript | objeto.**style.alignSelf** = "center"

<br>
###**all**

####Descrição:

Redefine todas as propriedades, exceto _unicide-bidi_ e _direction_, para seu valor inicial herdado.

####Sintaxe e valores:

```
all: initial
all: inherit
all: unset
```

####Exemplo:

```
div {
  background-color: yellow;
  color: red;
  all: initial;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 37.0
Internet Explorer | 79.0
FireFox | 27.0
Safari | 9.1
Opera | 24.0

Tipo | Definição
:--: | :-------:
Valor Padrão | nenhum
Herdado | não
Animável? | não
Sintaxe javascript | objeto.**style.all** = "inicial"

<br>
###**Animation**

####Descrição:

A propriedade _animation_ é uma propriedade abreviada para:
* Nome da Animação
* Duração da Animação
* Função de tempo de animação
* Atraso da animação
* Animação e iteração da contagem
* Direção da animação
* Modo de preenchimento de animação
* Animação de estado de play


> Sempre especifique a propriedade de duração da animação, caso não especificada a animação nunca será reproduzida.


####Sintaxe e valores:

```
animation: name duration timing-function delay iteration-count direction fill-mode play-state;

```

####Exemplo:

```
div {
  animation: mymove 5s infinite;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 43.0 <br> 4.0 -webkit-
Internet Explorer | 10.0
FireFox | 16.0 <br> 5.0 -moz-
Safari |9.0 <br> 4.0 -webkit-
Opera |30.0 <br> 15.0 -webkit- <br> 12.0 -o-

Tipo | Definição
:--: | :-------:
Valor Padrão | none 0 ease 0 1 normal none running
Herdado | não
Animável? | não
Sintaxe javascript | objeto.**style.animation**="mymove 5s infinite"

<br>
###**Animation-delay**

####Descrição:
Atraso para o início da animação

####Sintaxe e valores:

```
animation-delay: time
animation-delay: initial
animation-delay: inherit
```

####Exemplo:

```
div {
  animation-delay: 2s;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 43.0 <br> 4.0 -webkit-
Internet Explorer | 10.0
FireFox | 16.0 <br> 5.0 -moz-
Safari |9.0 <br> 4.0 -webkit-
Opera |30.0 <br> 15.0 -webkit- <br> 12.0 -o-

Tipo | Definição
:--: | :-------:
Valor Padrão | 0s
Herdado | não
Animável? | não
Sintaxe javascript | objeto.**style.animationDelay** = "1s"

<br>
###**animation-direction**

####Descrição:

Define a direção da animação, se deve ser para frente, atrás ou em ciclos alternados.

####Sintaxe e valores:

```
animation-direction: normal
animation-direction: reverse
animation-direction: alternate
animation-direction: alternate-reverse
animation-direction: initial
animation-direction: inherit
```

####Exemplo:

```
div {
  animation-direction: alternate;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 43.0 <br> 4.0 -webkit-
Internet Explorer | 10.0
FireFox | 16.0 <br> 5.0 -moz-
Safari |9.0 <br> 4.0 -webkit-
Opera |30.0 <br> 15.0 -webkit- <br> 12.0 -o-

Tipo | Definição
:--: | :-------:
Valor Padrão | normal
Herdado | no
Animável? | no
Sintaxe javascript | objeto.**style.animationDirection="reverse"

<br>
###**animation-duration**

####Descrição:

Define quanto tempo uma animação deve levar para completar um ciclo de animação.

####Sintaxe e valores:

```
animation-duration: time
animation-duration: initial
animation-duration: inherit
```

####Exemplo:

```
div {
  animation-duration: 3s;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 43.0 <br> 4.0 -webkit-
Internet Explorer | 10.0
FireFox | 16.0 <br> 5.0 -moz-
Safari |9.0 <br> 4.0 -webkit-
Opera |30.0 <br> 15.0 -webkit- <br> 12.0 -o-

Tipo | Definição
:--: | :-------:
Valor Padrão | 0
Herdado | não
Animável? | não
Sintaxe javascript | objeto.**style.animationDuration** ="3s"


<br>
###**animation-fill-mode**

####Descrição:

Define o estilo da animação enquanto não estiver sendo reproduzida.

>As animações CSS não afetam o elemento antes que o primeiro quadro-chave seja reproduzido ou depois que o último quadro-chave for reproduzido. A animation-fill-modepropriedade pode substituir esse comportamento.

####Sintaxe e valores:

```
animation-fill-mode: none
animation-fill-mode: forwards
animation-fill-mode: backwards
animation-fill-mode: both
animation-fill-mode: initial
animation-fill-mode: inherit
```

####Exemplo:

```
div {
  animation-fill-mode: forwards;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 43.0 <br> 4.0 -webkit-
Internet Explorer | 10.0
FireFox | 16.0 <br> 5.0 -moz-
Safari |9.0 <br> 4.0 -webkit-
Opera |30.0 <br> 15.0 -webkit- <br> 12.0 -o-

Tipo | Definição
:--: | :-------:
Valor Padrão | nenhum
Herdado | não
Animável? | não
Sintaxe javascript | objeto.**style.animationFillMode = "encaminha"

<br>
###**animation-iteration-count**

####Descrição:

Define o numero de vezes que a animação é para ocorrer.

####Sintaxe e valores:

```
animation-iteration-count: number
animation-iteration-count: infinite
animation-iteration-count: initial
animation-iteration-count: inherit
```

####Exemplo:

```
div {
  animation-iteration-count: 2;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 43.0 <br> 4.0 -webkit-
Internet Explorer | 10.0
FireFox | 16.0 <br> 5.0 -moz-
Safari |9.0 <br> 4.0 -webkit-
Opera |30.0 <br> 15.0 -webkit- <br> 12.0 -o-

Tipo | Definição
:--: | :-------:
Valor Padrão | 1
Herdado | não
Animável? | não
Sintaxe javascript | objeto.**style.animationIterationCount** = "infinite"

<br>
###**animation-name**

####Descrição:

Propriedade especifica para dar nome para as animações.

####Sintaxe e valores:

```
animation-name: keyframename
animation-name: none
animation-name: initial
animation-name: inherit
```

####Exemplo:

```
div {
  animation-name: mymove;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 43.0 <br> 4.0 -webkit-
Internet Explorer | 10.0
FireFox | 16.0 <br> 5.0 -moz-
Safari |9.0 <br> 4.0 -webkit-
Opera |30.0 <br> 15.0 -webkit- <br> 12.0 -o-

Tipo | Definição
:--: | :-------:
Valor Padrão | none
Herdado | não
Animável? | não
Sintaxe javascript | objeto.**style.animationName** = "myNEWanimation"

<br>
###**animation-play-state**

####Descrição:

Propriedade responsável para especificar se a animação está em execução ou pausada.

>Usa-se javaScript para para pausar ou dar play a animação. 

####Sintaxe e valores:

```
animation-play-state: paused
animation-play-state: running
animation-play-state: initial
animation-play-state: inherit
```

####Exemplo:

```
div {
  animation-play-state: paused;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 43.0 <br> 4.0 -webkit-
Internet Explorer | 10.0
FireFox | 16.0 <br> 5.0 -moz-
Safari |9.0 <br> 4.0 -webkit-
Opera |30.0 <br> 15.0 -webkit- <br> 12.0 -o-

Tipo | Definição
:--: | :-------:
Valor Padrão | running
Herdado | não
Animável? | não
Sintaxe javascript | objeto.**style.animationPlayState**="paused"


<br>
###**animation-timing-function**

####Descrição:

Especifica a curva de velocidade da animação.

>A curva de velocidade define o TEMPO que uma animação usa para mudar de um conjunto de estilos CSS para outro.
>A curva de velocidade é usada para fazer as alterações suavemente.

####Sintaxe e valores:

```
animation-timing-function: linear
animation-timing-function: ease
animation-timing-function: ease-in
animation-timing-function: ease-out
animation-timing-function: ease-in-out
animation-timing-function: step-start
animation-timing-function: step-end
animation-timing-function: steps(int,start
animation-timing-function: end)
animation-timing-function: cubic-bezier(n,n,n,n)
animation-timing-function: initial
animation-timing-function: inherit
```

####Exemplo:

```
div {
  animation-timing-function: linear;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 43.0 <br> 4.0 -webkit-
Internet Explorer | 10.0
FireFox | 16.0 <br> 5.0 -moz-
Safari |9.0 <br> 4.0 -webkit-
Opera |30.0 <br> 15.0 -webkit- <br> 12.0 -o-

Tipo | Definição
:--: | :-------:
Valor Padrão | ease
Herdado | não
Animável? | não
Sintaxe javascript | objeto.**style.animationTimingFunction** = "linear"


<br>
###**backface-visibility**

####Descrição:


####Sintaxe e valores:

```
backface-visibility: visible
backface-visibility: hidden
backface-visibility: initial
backface-visibility: inherit
```

####Exemplo:

```
#div1 {
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 36.0 <br> 12.0 -webkit-
Internet Explorer | 10.0
FireFox | 16.0 <br> 10.0 -moz-
Safari | 4.0 -webkit-
Opera | 23.0 <br> 15.0 -webkit-

Tipo | Definição
:--: | :-------:
Valor Padrão | visible
Herdado | não
Animável? | não
Sintaxe javascript | objeto.**style.backfaceVisibility**="hidden"

<br>
###**background**

####Descrição:

É a propriedade abreviada para as propriedades:

* background-color
* background-image
* background-position
* background-size
* background-repeat
* background-origin
* background-clip
* background-attachment

####Sintaxe e valores:

```
background: bg-color bg-image position/bg-size bg-repeat bg-origin bg-clip bg-attachment initial|inherit;
```

####Exemplo:

```
body {
  background: lightblue url("img_tree.gif") no-repeat fixed center;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 1.0
Internet Explorer | 4.0
FireFox | 1.0
Safari | 1.0
Opera | 3.5

Tipo | Definição
:--: | :-------:
Valor Padrão | Veja dentro das outras propriedades o valor padrão
Herdado | não
Animável? | Sim
Sintaxe javascript | objeto.**style.background**="red utl(smiley.gif) top left no repeat"

<br>
###**background-color**

####Descrição:

Define a cor de fundo de um elemento. 

####Sintaxe e valores:

```
background-color: color
background-color: transparent
background-color: initial
background-color: inherit
```

####Exemplo:

```
body {
  background-color: #fefbd8;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 1.0
Internet Explorer | 4.0
FireFox | 1.0
Safari | 1.0
Opera | 1.0

Tipo | Definição
:--: | :-------:
Valor Padrão | transparent
Herdado | não
Animável? | sim
Sintaxe javascript | objeto.**style.backgroundColor** ="#00FF00"

<br>
###**background-attachment**

####Descrição:

Define se o plano de fundo irá rolar como o resto da página ou será fixo.

####Sintaxe e valores:

```
background-attachment: scroll
background-attachment: fixed
background-attachment: local
background-attachment: initial
background-attachment: inherit
```

####Exemplo:

```
body {
  background-image: url("img_tree.gif");
  background-repeat: no-repeat;
  background-attachment: scroll;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 1.0
Internet Explorer | 4.0
FireFox | 1.0
Safari | 1.0
Opera | 3.5

Tipo | Definição
:--: | :-------:
Valor Padrão | scroll
Herdado | não
Animável? | não
Sintaxe javascript | objeto.**style.backgroundAttachment**="fixed"

<br>
###**background-blend-mode**

####Descrição:

Mescla a camada de fundo e a imagem conforme a propriedade definida do blend-mode.
####Sintaxe e valores:

```
background-blend-mode: normal
background-blend-mode: multiply
background-blend-mode: screen
background-blend-mode: overlay
background-blend-mode: darken
background-blend-mode: lighten
background-blend-mode: color-dodge
background-blend-mode: saturation
background-blend-mode: color
background-blend-mode: luminosity
```

####Exemplo:

```
div {
  width: 400px;
  height: 400px;
  background-repeat: no-repeat, repeat;
  background-image: url("img_tree.gif"), url("paper.gif");
  background-blend-mode: multiply;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 35.0
Internet Explorer | 79.0
FireFox | 30.0
Safari | 7.1
Opera | 22.0

Tipo | Definição
:--: | :-------:
Valor Padrão | normal
Herdado | não
Animável? | não
Sintaxe javascript | objeto.**style.backgroundBlendModel**="screen"

<br>
###**background-blip**

####Descrição:

Define até onde a propriedade do background se extenderá dentro do contêiner que foi inserida, se até a borda, se até o padding...

####Sintaxe e valores:

```
background-clip: border-box
background-clip: padding-box
background-clip: content-box
background-clip: initial
background-clip: inherit
```

####Exemplo:

```
div {
  border: 10px dotted black;
  padding: 15px;
  background: lightblue;
  background-clip: padding-box;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 4.0
Internet Explorer | 9.0
FireFox | 4.0
Safari | 3.0
Opera | 10.5

Tipo | Definição
:--: | :-------:
Valor Padrão | border-box
Herdado | não
Animável? | não
Sintaxe javascript | objeto.**style.backgroundClip**="content-box"


<br>
###**background-image**

####Descrição:

Define o background como uma imagem.

####Sintaxe e valores:

```
background-image: url
background-image: none
background-image: initial
background-image: inherit
```

####Exemplo:

```
body {
 background-image: url("paper.gif");
 background-color: #cccccc;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 1.0
Internet Explorer | 4.0
FireFox | 1.0
Safari | 1.0
Opera | 3.5

Tipo | Definição
:--: | :-------:
Valor Padrão | none
Herdado | não
Animável? | não
Sintaxe javascript | objeto.**style.backgroundImage**="url(img_tree.gif)"

<br>
###**background-origin**

####Descrição:

Especifica a posição original do plano de fundo


####Sintaxe e valores:

```
background-origin: padding-box
background-origin: border-box
background-origin: content-box
background-origin: initial
background-origin: inherit
```

####Exemplo:

```
#example1 {
  border: 10px dashed black;
  padding: 25px;
  background: url(paper.gif);
  background-repeat: no-repeat;
  background-origin: content-box;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 4.0
Internet Explorer | 9.0
FireFox | 4.0
Safari | 3.0
Opera | 10.5

Tipo | Definição
:--: | :-------:
Valor Padrão | padding-box
Herdado | não
Animável? | não
Sintaxe javascript | objeto.**style.backgroundOrigin**="content-box"

<br>
###**background-position**

####Descrição:

Define a posião inicial da imagem de fundo.

####Sintaxe e valores:

```
background-position: value
background-position: left top
background-position: left center
background-position: left bottom
background-position: right top
background-position: right center
background-position: right bottom
background-position: center top
background-position: center center
background-position: center bottom
background-position: x% y%
background-position: xpos ypos
background-position: initial
background-position: inherit
```

####Exemplo:

```
body {
  background-image: url('w3css.gif');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 1.0
Internet Explorer | 4.0
FireFox | 1.0
Safari | 1.0
Opera | 3.5

Tipo | Definição
:--: | :-------:
Valor Padrão | 0% 0%
Herdado | não
Animável? | sim
Sintaxe javascript | objeto.**style.backgroundPosition**="center"

<br>
###**background-repeat**

####Descrição:

Define se o background deve ou não repetir conforme o scrool da tela.

####Sintaxe e valores:

```
background-repeat: repeat
background-repeat: repeat-x
background-repeat: repeat-y
background-repeat: no-repeat
background-repeat: initial
background-repeat: inherit
```

####Exemplo:

```
body {
  background-image: url("paper.gif");
  background-repeat: repeat-y;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 1.0
Internet Explorer | 4.0
FireFox | 1.0
Safari | 1.0
Opera | 3.5

Tipo | Definição
:--: | :-------:
Valor Padrão | repeat
Herdado | não
Animável? | não
Sintaxe javascript | objeto.**style.backgroundRepeat**="repeat-x"



<br>
###**background-size**

####Descrição:

Define como o tamanho do fundo deve se comportar.

####Sintaxe e valores:

```
background-size: auto
background-size: length
background-size: cover
background-size: contain
background-size: initial
background-size: inherit
```

####Exemplo:

```
#example1 {
  background: url(mountain.jpg);
  background-repeat: no-repeat;
  background-size: auto;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 4.0 <br> 1.0 -webkit-
Internet Explorer | 9.0
FireFox | 4.0 <br> 3.6 -moz-
Safari | 4.1 <br> 3.6 -webkit-
Opera | 10.5 <br> 10.0 -o-

Tipo | Definição
:--: | :-------:
Valor Padrão | auto
Herdado | não
Animável? | sim
Sintaxe javascript | objeto.**style.backgroundSize**="120px"


<br>
###**border**

####Descrição:

Propriedade geral para definição das propriedades abaixo:

* border-width
* border-style
* border-color


####Sintaxe e valores:

```
border: border-width border-style border-color
border: border-width border-style border-color initial
border: border-width border-style border-color inherit
```

####Exemplo:

```
h1 {
  border: 5px solid red;
}

h2 {
  border: 4px dotted blue;
}

div {
  border: double;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 1.0
Internet Explorer | 4.0
FireFox | 1.0
Safari | 1.0
Opera | 3.5

Tipo | Definição
:--: | :-------:
Valor Padrão | medium none color
Herdado | não
Animável? | sim
Sintaxe javascript | objeto.**style.border**="3px solid blue"

<br>
###**border-bottom, border-top, border-left, border right**

####Descrição:

Define as propriedades da borda definida do elemento com as seguintes propriedades:

* border-bottom-width
* border-bottom-style
* border-bottom-color


####Sintaxe e valores:

```
border-bottom: border-width border-style border-color
border-bottom: border-width border-style border-color initial
border-bottom: border-width border-style border-color inherit
```

####Exemplo:

```
h1 {
  border-bottom: 5px solid red;
}

h2 {
  border-bottom: 4px dotted blue;
}

div {
  border-bottom: double;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 1.0
Internet Explorer | 4.0
FireFox | 1.0
Safari | 1.0
Opera | 3.5

Tipo | Definição
:--: | :-------:
Valor Padrão | medium none color
Herdado | não
Animável? | sim
Sintaxe javascript | objeto.**style.borderBottom**="15px dotted lightblue"

<br>
###**border-bottom(top, left, right)-color**

####Descrição:

Define a cor da borda inferior do elemento selecionado.

####Sintaxe e valores:

```
border-bottom-color: color
border-bottom-color: transparent
border-bottom-color: initial
border-bottom-color: inherit
```

####Exemplo:

```
div {
    border-bottom-color: coral;
    }
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 1.0
Internet Explorer | 4.0
FireFox | 1.0
Safari | 1.0
Opera | 3.5

Tipo | Definição
:--: | :-------:
Valor Padrão | a cor padrão do elemento
Herdado | não
Animável? | sim
Sintaxe javascript | objeto.**style.borderBottomColor**="blue"

<br>
###**border-bottom(top, left, right)-width**

####Descrição:

Define o tamanho da borda

####Sintaxe e valores:

```
border-bottom-width: medium
border-bottom-width: thin
border-bottom-width: thick
border-bottom-width: length
border-bottom-width: initial
border-bottom-width: inherit
```

####Exemplo:

```
div {
    border-bottom-width: thin;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 1.0
Internet Explorer | 4.0
FireFox | 1.0
Safari | 1.0
Opera | 3.5

Tipo | Definição
:--: | :-------:
Valor Padrão | medium
Herdado | não
Animável? | sim
Sintaxe javascript | objeto.**style.borderBottomWidth**="5px"

<br>
###**border-bottom(top, left, right)-style**

####Descrição:

Define o tipo de borda a ser seguido para a borda inferior

####Sintaxe e valores:

```
border-bottom-style: none
border-bottom-style: hidden
border-bottom-style: dotted
border-bottom-style: dashed
border-bottom-style: solid
border-bottom-style: double
border-bottom-style: groove
border-bottom-style: ridge
border-bottom-style: inset
border-bottom-style: outset
border-bottom-style: initial
border-bottom-style: inherit
```

####Exemplo:

```
div {
  border-bottom-style: dotted;
  }
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 1.0
Internet Explorer | 5.5
FireFox | 1.0
Safari | 1.0
Opera | 9.2

Tipo | Definição
:--: | :-------:
Valor Padrão | none
Herdado | não
Animável? | não
Sintaxe javascript | objeto.**style.borderBottomStyle**="dotted"

<br>
###**border-bottom(top, left, right)-left-radius**

####Descrição:

Define o arredondamento de canto da borda inferior esquerda.

####Sintaxe e valores:

```
border-bottom-left-radius: length
border-bottom-left-radius: %
border-bottom-left-radius: initial
border-bottom-left-radius: inherit
```

####Exemplo:

```
#example1 {
  border: 2px solid red;
  background: url(paper.gif);
  padding: 10px;
  border-bottom-left-radius: 40%;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 5.0 <br> 4.0 -webkit-
Internet Explorer | 9.0
FireFox | 4.0 <br> 3.0 -moz-
Safari | 5.0 <br> 3.1 -webkit-
Opera | 10.5

Tipo | Definição
:--: | :-------:
Valor Padrão | 0
Herdado | não
Animável? | sim
Sintaxe javascript | objeto.**style.borderBottomLeftRadius**="25px"


<br>
###**border-bottom(top, left, right)-right-radius**

####Descrição:

Define o arredondamento de canto da borda inferior direita

####Sintaxe e valores:

```
border-bottom-right-radius: length
border-bottom-right-radius: %
border-bottom-right-radius: initial
border-bottom-right-radius: inherit
```

####Exemplo:

```
#example1 {
  border: 2px solid red;
  border-bottom-right-radius: 25px;
}

#example2 {
  border: 2px solid red;
  border-bottom-right-radius: 50px 20px;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 5.0
Internet Explorer | 9.0
FireFox | 4.0 <br> 3.0 -moz-
Safari | 5.0 <br> 3.1 -webkit-
Opera | 10.5

Tipo | Definição
:--: | :-------:
Valor Padrão | 0
Herdado | não
Animável? | sim
Sintaxe javascript | objeto.**style.borderBottomRightRadius**="25px"

<br>
###**border-collapse**

####Descrição:

Define se as bordas de uma tabela devem ser juntas ou separadas.

####Sintaxe e valores:

```
border-collapse: separate
border-collapse: collapse
border-collapse: initial
border-collapse: inherit
```

####Exemplo:

```
#table1 {
  border-collapse: separate;
}

#table2 {
  border-collapse: collapse;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 1.0
Internet Explorer | 5.0
FireFox | 1.0
Safari | 1.2
Opera | 4.0

Tipo | Definição
:--: | :-------:
Valor Padrão | separate
Herdado | sim
Animável? | não
Sintaxe javascript | objeto.**style.borderCollapse**="collapse"

<br>
###**border-image**

####Descrição:

Envolve um elemento com uma imagem sendo sua borda.

####Sintaxe e valores:

```
border-image: source slice width outset repeat
border-image: source slice width outset repeat initial
border-image: source slice width outset repeat inherit
```

####Exemplo:

```
#borderimg {
  border-image: url(border.png) 30 round;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 16.0 <br> 4.0 -webkit-
Internet Explorer | 11.0 
FireFox | 15.0 <br> 3.5 -moz-
Safari | 6.0 <br> 3.1 -webkit-
Opera | 15.0 <br> 11.0 -o-

Tipo | Definição
:--: | :-------:
Valor Padrão | none 100% 1 0 stretch
Herdado | não
Animável? | não
Sintaxe javascript | objeto.**style.borderImage**=" url(border.png) 30 round"

<br>
###**border-image-outset**

####Descrição:

usada para definir a area de imagem da borda se estende além da caixa de borda.

####Sintaxe e valores:

```
border-image-outset: length
border-image-outset: number
border-image-outset: initial
border-image-outset: inherit
```

####Exemplo:

```
#borderimg {
  border-image-source: url(border.png);
  border-image-outset: 10px;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 15.0
Internet Explorer | 11.0
FireFox | 15.0
Safari | 6.0
Opera | 15.0

Tipo | Definição
:--: | :-------:
Valor Padrão | 0
Herdado | não
Animável? | não
Sintaxe javascript | objeto.**style.borderImageOutset="10px"

<br>
###**border-image-repeat-property**

####Descrição:

Define quantas vezes a imagem da borda deve se repetir

####Sintaxe e valores:

```
border-image-repeat: stretch
border-image-repeat: repeat
border-image-repeat: round
border-image-repeat: initial
border-image-repeat: inherit
```

####Exemplo:

```
#borderimg {
  border-image-source: url(border.png);
  border-image-repeat: repeat;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 15.0
Internet Explorer | 11.0
FireFox | 15.0
Safari | 6.0
Opera | 15.0

Tipo | Definição
:--: | :-------:
Valor Padrão | stretch
Herdado | não
Animável? | não
Sintaxe javascript | objeto.**style.borderImageRepeat**="round"

<br>
###**border-image-slice**

####Descrição:

Define em quantas pedaços a imagem da borda se despedaçará

####Sintaxe e valores:

```
border-image-slice: number
border-image-slice: %
border-image-slice: fill
border-image-slice: initial
border-image-slice: inherit
```

####Exemplo:

```
#borderimg {
  border-image-slice: 30%;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 15.0
Internet Explorer | 11.0
FireFox | 15.0
Safari | 6.0
Opera | 15.0

Tipo | Definição
:--: | :-------:
Valor Padrão | 100%
Herdado | não
Animável? | não
Sintaxe javascript | objeto.**style.borderImageSlice="30%"


<br>
###**border-image-source**

####Descrição:

Especifica qual imagem a ser usada para fazer a envoltura da borda com uma imagem.

####Sintaxe e valores:

```
border-image-source: none
border-image-source: image
border-image-source: initial
border-image-source: inherit
```

####Exemplo:

```
#borderimg {
  border-image-source: url(border.png);
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 15.0
Internet Explorer | 11.0
FireFox | 15.0
Safari | 6.0
Opera | 15.0

Tipo | Definição
:--: | :-------:
Valor Padrão | none
Herdado | não
Animável? | não
Sintaxe javascript | objeto.**style.borderImageSource**="url(border.png)"

<br>
###**border-image-width**

####Descrição:

Define o tamanho da borda da imagem.

####Sintaxe e valores:

```
border-image-width: number
border-image-width: %
border-image-width: auto
border-image-width: initial
border-image-width: inherit
```

####Exemplo:

```
#borderimg {
  border-image-source: url(border.png);
  border-image-width: 10px;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 15.0
Internet Explorer | 11.0
FireFox | 13.0
Safari | 6.0
Opera | 15.0

Tipo | Definição
:--: | :-------:
Valor Padrão | 1
Herdado | não
Animável? | não
Sintaxe javascript | objeto.**style.borderImageWidth**="20px"

<br>
###**border-radius**

####Descrição:

Define um raio de curvatura para os cantos da borda, deixando eles arredondados

####Sintaxe e valores:

```
border-radius: 1-4 length
border-radius: % / 1-4 length
border-radius: %
border-radius: initial
border-radius: inherit
```

####Exemplo:

```
#example1 {
  border: 2px solid red;
  border-radius: 25px;
}

#example2 {
  border: 2px solid red;
  border-radius: 50px 20px;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 5.0 <br> 4.0 -webkit-
Internet Explorer | 9.0
FireFox | 4.0 <br> 3.0-moz-
Safari | 5.0 <br> 3.1 -webkit-
Opera | 10.5

Tipo | Definição
:--: | :-------:
Valor Padrão | 0
Herdado | não
Animável? | sim
Sintaxe javascript | objeto.**style.borderRadius**="25px"


<br>
###**border-spacing**

####Descrição:

Define a distencia da borda para as células

####Sintaxe e valores:

```
border-spacing: length
border-spacing: initial
border-spacing: inherit
```

####Exemplo:

```
#table1 {
  border-collapse: separate;
  border-spacing: 15px;
}

#table2 {
  border-collapse: separate;
  border-spacing: 15px 50px;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 1.0
Internet Explorer | 8.0
FireFox | 1.0
Safari | 1.0
Opera | 4.0

Tipo | Definição
:--: | :-------:
Valor Padrão | 2px
Herdado | sim
Animável? | sim
Sintaxe javascript | objeto.**style.borderSpacing**="15px"

<br>
###**border-style**

####Descrição:

Define o tipo de borda desejado.

####Sintaxe e valores:

```

```

####Exemplo:

```
div {
  border-style: dotted;
  }
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 1.0
Internet Explorer | 4.0
FireFox | 1.0
Safari | 1.0
Opera | 3.5

Tipo | Definição
:--: | :-------:
Valor Padrão | none
Herdado | não
Animável? | não
Sintaxe javascript | objeto.**style.borderStyle**="dotted double"

<br>
###**border-width**

####Descrição:

Define a largura da borda

####Sintaxe e valores:

```
border-width: medium
border-width: thin
border-width: thick
border-width: length
border-width: initial
border-width: inherit
```

####Exemplo:

```
div {
  border-width: thin;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 1.0
Internet Explorer | 4.0
FireFox | 1.0
Safari | 1.0
Opera | 3.5

Tipo | Definição
:--: | :-------:
Valor Padrão | medium
Herdado | não
Animável? | não
Sintaxe javascript | objeto.**style.borderWidth**="1px 5px"

<br>
###**bottom**

####Descrição:

Posiciona os elementos verticalmente

####Sintaxe e valores:

```
bottom: auto
bottom: length
bottom: initial
bottom: inherit
```

####Exemplo:

```
div.absolute {
  position: absolute;
  bottom: 10px;
  width: 50%;
  border: 3px solid #8AC007;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 1.0
Internet Explorer | 5.0
FireFox | 1.0
Safari | 1.0
Opera | 6.0

Tipo | Definição
:--: | :-------:
Valor Padrão | auto
Herdado | não
Animável? | sim
Sintaxe javascript | objeto.**style.bottom**="10px"

<br>
###**box-decoration-break**

####Descrição:

Define todas as propriedades da caixa quando ela for fragmentada

####Sintaxe e valores:

```
box-decoration-break: slice
box-decoration-break: clone
box-decoration-break: initial
box-decoration-break: inherit
box-decoration-break: unset
```

####Exemplo:

```
span.ex1 {
  -webkit-box-decoration-break: clone;
  -o-box-decoration-break: clone;
  box-decoration-break: clone;
}

span.ex2 {
  -webkit-box-decoration-break: slice;
  -o-box-decoration-break: slice;
  box-decoration-break: slice;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 22.0 <br> -webkit-
Internet Explorer | 79.0
FireFox | 32.0
Safari | 6.1 <br> -webkit-
Opera | 11.5 <br> -webkit-

Tipo | Definição
:--: | :-------:
Valor Padrão | slice
Herdado | não
Animável? | não
Sintaxe javascript | ...

<br>
###**box-shadow**

####Descrição:

Define um sombreado para a caixa

####Sintaxe e valores:

```
box-shadow: none
box-shadow: h-offset v-offset blur spread color 
box-shadow: inset
box-shadow: initial
box-shadow: inherit
```

####Exemplo:

```
#example1 {
  box-shadow: 5px 10px;
}

#example2 {
  box-shadow: 5px 10px #888888;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 10.0 <br> 4.0 -webkit-
Internet Explorer | 9.0
FireFox | 4.0 <br> -moz-
Safari | 5.1 <br> 3.1 -webkit-
Opera | 10.5

Tipo | Definição
:--: | :-------:
Valor Padrão | none
Herdado | não
Animável? | sim
Sintaxe javascript | objeto.**style.boxShadow**="10px 20px 30px blue"

<br>
###**box-sizing**

####Descrição:

Define como o tamanho da caixa deve ser calculado, incluindo ou não o padding e as bordas.

####Sintaxe e valores:

```
box-sizing: content-box
box-sizing: border-box
box-sizing: initial
box-sizing: inherit
```

####Exemplo:

```
#example1 {
  box-sizing: border-box;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 10.0 <br> 4.0 -webkit-
Internet Explorer | 8.0
FireFox | 29.0 <br> 2.0 -moz-
Safari | 5.1 <br> 3.2 -webkit
Opera | 9.5

Tipo | Definição
:--: | :-------:
Valor Padrão | content-box
Herdado | não
Animável? | não
Sintaxe javascript | objeto.**style.boxSizing**="border-box"

<br>
###**break-after**

####Descrição:

Define se deve ser feito ou não uma quebra de página nessa região, depois do elemento selecionado

####Sintaxe e valores:

```
break-after: auto
break-after: all
break-after: always
break-after: avoid
break-after: avoid-column
break-after: avoid-page
break-after: avoid-region
break-after: column
break-after: left
break-after: page
break-after: recto
break-after: region
break-after: right
break-after: verso
break-after: initial
break-after: inherit
```

####Exemplo:

```
@media print {
  footer {
    break-after: always;
  }
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 50.0
Internet Explorer | 10.0
FireFox | 65.0
Safari | 10.0
Opera | 37.0

Tipo | Definição
:--: | :-------:
Valor Padrão | auto
Herdado | não
Animável? | não
Sintaxe javascript | objeto.**style.breakAfter**="always"


<br>
###**break-before**

####Descrição:

Define se deve ser feito ou não uma quebra de página nessa região, antes do elemento selecionado

####Sintaxe e valores:

```
break-before: auto
break-before: all
break-before: always
break-before: avoid
break-before: avoid-column
break-before: avoid-page
break-before: avoid-region
break-before: column
break-before: left
break-before: page
break-before: recto
break-before: region
break-before: right
break-before: verso
break-before: initial
break-before: inherit
```

####Exemplo:

```
@media print {
  h1 {
    break-before: always;
  }
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 50.0
Internet Explorer | 10.0
FireFox | 65.0
Safari | 10.0
Opera | 37.0

Tipo | Definição
:--: | :-------:
Valor Padrão | auto
Herdado | não
Animável? | não
Sintaxe javascript | objeto.**style.breakBefore**="always"

<br>
###**break-inside**

####Descrição:

Define se deve ser feito ou não uma quebra de página nessa região, dentro do elemento selecionado

####Sintaxe e valores:

```
break-inside: auto
break-inside: all
break-inside: always
break-inside: avoid
break-inside: avoid-column
break-inside: avoid-page
break-inside: avoid-region
break-inside: column
break-inside: left
break-inside: page
break-inside: recto
break-inside: region
break-inside: right
break-inside: verso
break-inside: initial
break-inside: inherit
```

####Exemplo:

```
@media print {
  img {
    display: block;
    break-inside: avoid;
  }
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 50.0
Internet Explorer | 10.0
FireFox | 65.0
Safari | 10.0
Opera | 37.0

Tipo | Definição
:--: | :-------:
Valor Padrão | auto
Herdado | não
Animável? | não
Sintaxe javascript | objeto.**style.breakInside**="always"

<br>
###**caption-side**

####Descrição:

Define a posição da colocação de uma legenda na tabela

####Sintaxe e valores:

```
caption-side: top
caption-side: bottom
caption-side: initial
caption-side: inherit
```

####Exemplo:

```
#example1 {
  caption-side: bottom;
}

#example2 {
  caption-side: top;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 1.0
Internet Explorer | 8.0
FireFox | 1.0
Safari | 1.0
Opera | 4.0

Tipo | Definição
:--: | :-------:
Valor Padrão | top
Herdado | sim
Animável? | não
Sintaxe javascript | objeto.**style.captionSide**="bottom"

<br>
###**caret-color**

####Descrição:

Define a cor do cursor nos Inputs, areas de texto ou qualquer elemento editável.

####Sintaxe e valores:

```
caret-color: auto
caret-color: color
caret-color: initial
caret-color: inherit
```

####Exemplo:

```
input {
  caret-color: red;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 57.0
Internet Explorer | 79.0
FireFox | 53.0
Safari | 11.1
Opera | 44.0

Tipo | Definição
:--: | :-------:
Valor Padrão | auto
Herdado | sim
Animável? | não
Sintaxe javascript | objeto.**style.caretColor**="red"

<br>
###**@charset**

####Descrição:

Define qual codificador de caractere utilizar na folha de estilo

####Sintaxe e valores:

```
@charset "charset";
```

####Exemplo:

```
@charset "UTF-8";
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 2.0
Internet Explorer | 12.0
FireFox | 1.5
Safari | 4.0
Opera | 9.0

Tipo | Definição
:--: | :-------:
Valor Padrão | ...
Herdado | ...
Animável? | ...
Sintaxe javascript | ...


<br>
###**Clear**

####Descrição:

Define qual direção um elemento flutuante não tem permissão de flutuar

####Sintaxe e valores:

```
clear: none
clear: left
clear: right
clear: both
clear: initial
clear: inherit
```

####Exemplo:

```
img {
  float: left;
}

p.clear {
  clear: both;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 1.0
Internet Explorer | 5.0
FireFox | 1.0
Safari | 1.0
Opera | 6.0

Tipo | Definição
:--: | :-------:
Valor Padrão | none
Herdado | não
Animável? | não
Sintaxe javascript | objeto.**style.clear**="both"

<br>
###**clip**

####Descrição:

Corta o conteúdo de uma imagem

####Sintaxe e valores:

```
clip: auto
clip: shape
clip: initial
clip: inherit
```

####Exemplo:

```
img {
  position: absolute;
  clip: rect(0px,60px,200px,0px);
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 1.0
Internet Explorer | 8.0
FireFox | 1.0
Safari | 1.0
Opera | 7.0

Tipo | Definição
:--: | :-------:
Valor Padrão | auto
Herdado | não
Animável? | sim
Sintaxe javascript | objeto.**style.clip**="rect(0px,50px,50px,0px"

<br>
###**color**

####Descrição:

Define a cor do texto

####Sintaxe e valores:

```
color: color
color: initial
color: inherit
```

####Exemplo:

```
body {
  color: red;
}

h1 {
  color: #00ff00;
}

p.ex {
  color: rgb(0,0,255);
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 1.0
Internet Explorer | 3.0
FireFox | 1.0
Safari | 1.0
Opera | 3.5

Tipo | Definição
:--: | :-------:
Valor Padrão | não especificado
Herdado | sim
Animável? | sim
Sintaxe javascript | objeto.**color**="#0000FF"

<br>
###**column-count**

####Descrição:

Define em quantos números de colunas um elemento pode ser dividido.

####Sintaxe e valores:

```
column-count: number
column-count: auto
column-count: initial
column-count: inherit
```

####Exemplo:

```
div {
  column-count: 3;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 50.0 <br> 4.0 -webkit-
Internet Explorer | 10.0
FireFox | 52.0 -2.0 -moz-
Safari | 9.0 <br> 3.1 -webkit-
Opera | 37.0 <br> 15.0 -webkit- <br> 11.1

Tipo | Definição
:--: | :-------:
Valor Padrão | auto
Herdado | não
Animável? | sim
Sintaxe javascript | objeto.**style.collumnCount**=3

<br>
###**column-fill**

####Descrição:

Define como o texto deve se comportar na linha depois de dividi-lo em colunas.

####Sintaxe e valores:

```
column-fill: balance
column-fill: auto
column-fill: initial
column-fill: inherit
```

####Exemplo:

```
div {
  column-count: 3;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 50.0
Internet Explorer | 10.0
FireFox | 52.0 <br> 13.0 -moz-
Safari | 10.0 <br> 7.0 -webkit-
Opera | 37.0

Tipo | Definição
:--: | :-------:
Valor Padrão | balanced
Herdado | não
Animável? | não
Sintaxe javascript | objeto.**style.columnFill**="auto"

<br>
###**column-gap**

####Descrição:

Define a o tamanho das lacunas entre as colunas

####Sintaxe e valores:

```
column-gap: length
column-gap: normal
column-gap: initial
column-gap: inherit
```

####Exemplo:

```
div {
  column-gap: 40px;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 50
Internet Explorer | 10
FireFox | 52
Safari | 10
Opera | 37

Tipo | Definição
:--: | :-------:
Valor Padrão | normal
Herdado | não
Animável? | sim
Sintaxe javascript | objeto.**style.columnGap**="50px"

<br>
###**column-rule**

####Descrição:

Usda para definir as propriedades de largura, estilo e cor entre as colunas.

####Sintaxe e valores:

```
column-rule: column-rule-width column-rule-style column-rule-color
column-rule: column-rule-width column-rule-style column-rule-color initial
column-rule: column-rule-width column-rule-style column-rule-color inherit
```

####Exemplo:

```
div {
  column-rule: 4px double #ff00ff;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 50.0 <br> 4.0 -webkit-
Internet Explorer | 10.0
FireFox | 52.0 <br> 2.0 -moz-
Safari | 9.0 <br> 3.1 -webkit-
Opera | 37.0 <br> 15.0 -webkit- <br> 11.1

Tipo | Definição
:--: | :-------:
Valor Padrão | medium none color
Herdado | não
Animável? | sim
Sintaxe javascript | objeto.**style.columnRule**="3px outset blue"

<br>
###**col-span**

####Descrição:

Define quantas colunas um elemento deve abranger.

####Sintaxe e valores:

```
column-span: none
column-span: all
column-span: initial
column-span: inherit
```

####Exemplo:

```
h2 {
  column-span: all;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 50.0 <br> 4.0 -webkit-
Internet Explorer | 10.0
FireFox | 71.0
Safari | 9.0 <br> 3.1 -webkit-
Opera | 37.0 <br> 15.0 -webkit- <br> 11.1

Tipo | Definição
:--: | :-------:
Valor Padrão | none
Herdado | não
Animável? | não
Sintaxe javascript | objeto.**style.columnSpan**="all"

<br>
###**column-width**

####Descrição:

Define o tamanho da coluna

####Sintaxe e valores:

```
column-width: auto
column-width: length
column-width: initial
column-width: inherit
```

####Exemplo:

```
div {
  column-width: 100px;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 50.0 
Internet Explorer | 10.0
FireFox | 52.0
Safari | 9.0
Opera | 37.0

Tipo | Definição
:--: | :-------:
Valor Padrão | auto
Herdado | não
Animável? | sim
Sintaxe javascript | objeto.**style.collumnWidth**="100px"

<br>
###**columns**

####Descrição:

Define as propriedades width e count das colunas em uma só propriedade

####Sintaxe e valores:

```
columns: auto
columns: column-width column-count
columns: column-width column-count initial
columns: column-width column-count inherit
```

####Exemplo:

```
div {
  columns: 100px 3;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 50.0
Internet Explorer | 10.0
FireFox | 52.0
Safari | 9.0
Opera | 37.0

Tipo | Definição
:--: | :-------:
Valor Padrão | auto auto
Herdado | não
Animável? | sim
Sintaxe javascript | objeto.**style.columns**="100px 3"

<br>
###**content**

####Descrição:

usado por preudo-elementos, conteúdos gerados pelo usuário. è usado com os ::before ou ::after

####Sintaxe e valores:

```
content: normal
content: none
content: counter
content: attr
content: string
content: open-quote
content: close-quote
content: no-open-quote
content: no-close-quote
content: url
content: initial
content: inherit
```

####Exemplo:

```
a::after {
  content: " (" attr(href) ")";
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 1.0
Internet Explorer | 8.0
FireFox | 1.0
Safari | 1.0
Opera | 4.0

Tipo | Definição
:--: | :-------:
Valor Padrão | normal
Herdado | não
Animável? | não
Sintaxe javascript | ...

<br>
###**counter-increment**

####Descrição:

Adiciona ou diminui o valor de um ou mais conteúdos.

####Sintaxe e valores:

```
counter-increment: none
counter-increment: id
counter-increment: initial
counter-increment: inherit
```

####Exemplo:

```
body {
  counter-reset: my-sec-counter;
}

h2::before {

  counter-increment: my-sec-counter;
  content: "Section " counter(my-sec-counter) ". ";
} 
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 4.0
Internet Explorer | 8.0
FireFox | 2.0
Safari | 3.1
Opera | 9.6

Tipo | Definição
:--: | :-------:
Valor Padrão | none
Herdado | não
Animável? | não
Sintaxe javascript | objeto.**style.counterIncrement**="subsection"

<br>
###**counter-reset**

####Descrição:

Reseta um ou mais contadores do CSS

####Sintaxe e valores:

```
counter-reset: none
counter-reset: name number
counter-reset: initial
counter-reset: inherit
```

####Exemplo:

```
body {
  /* Set "my-sec-counter" to 0 */
  counter-reset: my-sec-counter;
}

h2::before {
  /* Increment "my-sec-counter" by 1 */
  counter-increment: my-sec-counter;
  content: "Section " counter(my-sec-counter) ". ";
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 4.0
Internet Explorer | 8.0
FireFox | 2.0
Safari | 3.1
Opera | 9.6

Tipo | Definição
:--: | :-------:
Valor Padrão | none
Herdado | não
Animável? | não
Sintaxe javascript | objeto.**style.counterReset**="section"



<br>
###**cursor**

####Descrição:



####Sintaxe e valores:

```
cursor: value;
```

####Exemplo:

```
.alias {cursor: alias;}
.all-scroll {cursor: all-scroll;}
.auto {cursor: auto;}
.cell {cursor: cell;}
.context-menu {cursor: context-menu;}
.col-resize {cursor: col-resize;}
.copy {cursor: copy;}
.crosshair {cursor: crosshair;}
.default {cursor: default;}
.e-resize {cursor: e-resize;}
.ew-resize {cursor: ew-resize;}
.grab {cursor: grab;}
.grabbing {cursor: grabbing;}
.help {cursor: help;}
.move {cursor: move;}
.n-resize {cursor: n-resize;}
.ne-resize {cursor: ne-resize;}
.nesw-resize {cursor: nesw-resize;}
.ns-resize {cursor: ns-resize;}
.nw-resize {cursor: nw-resize;}
.nwse-resize {cursor: nwse-resize;}
.no-drop {cursor: no-drop;}
.none {cursor: none;}
.not-allowed {cursor: not-allowed;}
.pointer {cursor: pointer;}
.progress {cursor: progress;}
.row-resize {cursor: row-resize;}
.s-resize {cursor: s-resize;}
.se-resize {cursor: se-resize;}
.sw-resize {cursor: sw-resize;}
.text {cursor: text;}
.url {cursor: url(myBall.cur),auto;}
.w-resize {cursor: w-resize;}
.wait {cursor: wait;}
.zoom-in {cursor: zoom-in;}
.zoom-out {cursor: zoom-out;}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 5.0
Internet Explorer | 5.5
FireFox | 4.0
Safari | 5.0
Opera | 9.6

Tipo | Definição
:--: | :-------:
Valor Padrão | auto
Herdado | sim
Animável? | não
Sintaxe javascript | objeto.**style.cursor**="crosshair"

<br>
###**direction**

####Descrição:

Define a direção do texto

####Sintaxe e valores:

```
direction: ltr
direction: rtl
direction: initial
direction: inherit
```

####Exemplo:

```
p.rtl {
  direction: rtl;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 2.0
Internet Explorer | 5.5
FireFox | 1.0
Safari | 1.3
Opera | 9.2

Tipo | Definição
:--: | :-------:
Valor Padrão | ltr
Herdado | sim
Animável? | não
Sintaxe javascript | objeto.**style.direction**="rtl"


<br>
###**display**

####Descrição:

Define como a caixa deve ser renderizada pelo navegador

####Sintaxe e valores:

```
display: value;
```

####Exemplo:

```
p.ex1 {display: none;}
p.ex2 {display: inline;}
p.ex3 {display: block;}
p.ex4 {display: inline-block;}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 4.0
Internet Explorer | 8.0
FireFox | 3.0
Safari | 3.1
Opera | 7.0

Tipo | Definição
:--: | :-------:
Valor Padrão | ...
Herdado | não
Animável? | não
Sintaxe javascript | objeto.**style.display**="none"

<br>
###**empty-cells**

####Descrição:

Define se deve ou não ser mostrado as células em branco da tabela.

####Sintaxe e valores:

```
empty-cells: show
empty-cells: hide
empty-cells: initial
empty-cells: inherit
```

####Exemplo:

```
table {
  empty-cells: hide;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 1.0
Internet Explorer | 8.0
FireFox | 1.0
Safari | 1.2
Opera | 4.0

Tipo | Definição
:--: | :-------:
Valor Padrão | show
Herdado | sim
Animável? | não
Sintaxe javascript | objeto.**style.emptyCells**="hide"

<br>
###**filter**

####Descrição:

Define alguns efeitos visuais como o blur, saturação, contraste, brilho... (mistras vezes utilizado em imagens.)

####Sintaxe e valores:

```
filter: none 
filter: blur() 
filter: brightness() 
filter: contrast() 
filter: drop-shadow() 
filter: grayscale() 
filter: hue-rotate() 
filter: invert() 
filter: opacity() 
filter: saturate() 
filter: sepia() 
filter: url()
```

####Exemplo:

```
img {
  filter: grayscale(100%);
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 53.0
Internet Explorer | 13.0
FireFox | 35.0
Safari | 9.1
Opera | 40.0

Tipo | Definição
:--: | :-------:
Valor Padrão | none
Herdado | não
Animável? | sim
Sintaxe javascript | objeto.**style.filter**="grayscale(100%)"

<br>
###**flex**

####Descrição:

é uma junção das propriedades:
* Flex-grow
* Flex-shrink
* Flex-basis

####Sintaxe e valores:

```
flex: flex-grow flex-shrink flex-basis
felx: auto
felx: initial
felx: inherit
```

####Exemplo:

```
#main div {
  -ms-flex: 1; /* IE 10 */
  flex: 1;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 29.0
Internet Explorer | 11.0
FireFox | 28.0
Safari | 9.0
Opera | 17.0

Tipo | Definição
:--: | :-------:
Valor Padrão | 0 1 auto
Herdado | não
Animável? | sim
Sintaxe javascript | objeto.**style.flex**="1"

<br>
###**flex-direction**

####Descrição:

Define a direção dos itens flexíveis

####Sintaxe e valores:

```
flex-direction: row
flex-direction: row-reverse
flex-direction: column
flex-direction: column-reverse
flex-direction: initial
flex-direction: inherit
```

####Exemplo:

```
div {
  display: flex;
  flex-direction: row-reverse;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 29.0
Internet Explorer | 11.0
FireFox | 28.0
Safari | 9.0
Opera | 17.0

Tipo | Definição
:--: | :-------:
Valor Padrão | row
Herdado | não
Animável? | não
Sintaxe javascript | objeto.**style.flexDirection**="column-reverse"

<br>
###**flex-flow**

####Descrição:

Define as propriedades a seguir:

* Flex-direction
* Flex-wrap

####Sintaxe e valores:

```
flex-flow: flex-direction flex-wrap
felx-flow: initial
felx-flow: inherit
```

####Exemplo:

```
div {
  display: flex;
  flex-flow: row-reverse wrap;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 29.0
Internet Explorer | 11.0
FireFox | 28.0
Safari | 9.0
Opera | 17.0

Tipo | Definição
:--: | :-------:
Valor Padrão | row nowrap
Herdado | não
Animável? | não
Sintaxe javascript | objeto.**style.flexFlow**="clumn nowrap"

<br>
###**float**

####Descrição:

Define o elemento como um objeto flutuante.

####Sintaxe e valores:

```
float: none
float: left
float: right
float: initial
float: inherit
```

####Exemplo:

```
img  {
  float: right;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 1.0
Internet Explorer | 4.0
FireFox | 1.0
Safari | 1.0
Opera | 7.0

Tipo | Definição
:--: | :-------:
Valor Padrão | none
Herdado | não
Animável? | não
Sintaxe javascript | objeto.**style.cssFloat**="left"

<br>
###**font**

####Descrição:

Define todas as propriedades de fonte:
* font-style
* font-variant
* font-weight
* font-size/line-height
* font-family

####Sintaxe e valores:

```
font: font-style font-variant font-weight font-size/line-height font-family
font: caption
font: icon
font: menu
font: message-box
font: small-caption
font: status-bar
font: initial
font: inherit
```

####Exemplo:

```
p.a {
  font: 15px Arial, sans-serif;
}

p.b {
  font: italic small-caps bold 12px/30px Georgia, serif;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 1.0
Internet Explorer | 4.0
FireFox | 1.0
Safari | 1.0
Opera | 1.0

Tipo | Definição
:--: | :-------:
Valor Padrão | ...
Herdado | sim
Animável? | sim
Sintaxe javascript | objeto.**style.font**="italic small-caps bold 12px arial,sans-serif"

<br>
###**@font-face**

####Descrição:



####Sintaxe e valores:

```
@font-face {
  font-properties
}
```

####Exemplo:

```
@font-face {
  font-family: myFirstFont;
  src: url(sansation_light.woff);
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | ...
Internet Explorer | ...
FireFox | ...
Safari | ...
Opera | ...

Tipo | Definição
:--: | :-------:
Valor Padrão | ...
Herdado | ...
Animável? | ...
Sintaxe javascript | ...

<br>
###**font-family**

####Descrição:

Define a fonte utilizada e saus variantes que podem ser utilizadas

####Sintaxe e valores:

```
font-family: family-name
font0family: generic-family
font0family: initial
font0family: inherit
```

####Exemplo:

```
p.a {
  font-family: "Times New Roman", Times, serif;
}

p.b {
  font-family: Arial, Helvetica, sans-serif;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 1.0
Internet Explorer | 4.0
FireFox | 1.0
Safari | 1.0
Opera | 3.5

Tipo | Definição
:--: | :-------:
Valor Padrão | depende do navegador
Herdado | sim
Animável? | não
Sintaxe javascript | objeto.**fontFamily**="Verdana,sans-serif"

<br>
###**font-feature-settings**

####Descrição:



####Sintaxe e valores:

```
font-feature-settings: normal
font-feature-settings: feature-value
```

####Exemplo:

```

.ex1 { font-feature-settings: "smcp" on; }


.ex2 { font-feature-settings: "c2sc", "smcp"; }


.ex3 { font-feature-settings: "liga" 0; }


.ex4 { font-feature-settings: "frac"; }
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 48.0
Internet Explorer | 10.0
FireFox | 34.0
Safari | 9.1
Opera | 35.0

Tipo | Definição
:--: | :-------:
Valor Padrão | normal
Herdado | sim
Animável? | não
Sintaxe javascript | objeto.**fontFeatureSettings**="normal"

<br>
###**font-kerning**

####Descrição:

Controla o uso de informações nas fontes

####Sintaxe e valores:

```
font-kerning: auto
font-kerning: normal
font-kerning: none
```

####Exemplo:

```
.ex1 {
  font-kerning: normal;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 33.0
Internet Explorer | 79.0
FireFox | 34.0
Safari | 9.1
Opera | 20.1

Tipo | Definição
:--: | :-------:
Valor Padrão | auto
Herdado | sim
Animável? | não
Sintaxe javascript | objeto.**style.fontKerning**="normal"

<br>
###**gap**

####Descrição:

Define o tamanho entre as linhas e as colunas, é uma abreviação das propriedades:
* row-gap
* column-gap

####Sintaxe e valores:

```
gap: row-gap column-gap;
```

####Exemplo:

```
.grid-container {
  gap: 50px;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 66
Internet Explorer | 16
FireFox | 61
Safari | 10.1
Opera | 53

Tipo | Definição
:--: | :-------:
Valor Padrão | normal normal
Herdado | não
Animável? | sim
Sintaxe javascript | objeto.**style.gap**="50px 100px"

<br>
###**grid**

####Descrição:

é uma propriedade usada para simplificar as seguintes propriedades:

* grid-template-rows
* grid-template-columns
* grid-template-areas
* grid-auto-rows
* grid-auto-columns
* grid-auto-flow

####Sintaxe e valores:

```
grid: none
grid: grid-template-rows / grid-template-columns
grid: grid-template-areas
grid: grid-template-rows / [grid-auto-flow] grid-auto-columns
grid: [grid-auto-flow] grid-auto-rows / grid-template-columns
grid: initial
grid: inherit
```

####Exemplo:

```
.grid-container {
  display: grid;
  grid: 150px / auto auto auto;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 57
Internet Explorer | 16
FireFox | 52
Safari | 10
Opera | 44

Tipo | Definição
:--: | :-------:
Valor Padrão | none none none auto auto row
Herdado | não
Animável? | sim
Sintaxe javascript | objeto.**style.grid**="250px/ auto auto auto"


<br>
###**grid-area**

####Descrição:

Usado para simplificar as seguintes propriedades em uma só:

* grid-row-start
* grid-row-end
* grid-column-start
* grid-column-end
####Sintaxe e valores:

```
grid-area: grid-row-start / grid-column-start / grid-row-end / grid-column-end 
grid-area: grid-row-start / grid-column-start / grid-row-end / grid-column-end itemname;
```

####Exemplo:

```
.item1 {
  grid-area: 2 / 1 / span 2 / span 3;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 57 
Internet Explorer | 16
FireFox | 52
Safari | 10
Opera | 44

Tipo | Definição
:--: | :-------:
Valor Padrão | auto
Herdado | não
Animável? | sim
Sintaxe javascript | objeto.**style.gridArea**="1 / 2 / span 2 /span 3"

<br>
###**grid-column**

####Descrição:

Usado para simplificar os comandos abaixo dos itens de grid, tamnhos, localização e layouts.

* grid-column-start
* grid-column-end

####Sintaxe e valores:

```
grid-column: grid-column-start / grid-column-end;
```

####Exemplo:

```
.item1 {
  grid-column: 1 / span 2;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 57
Internet Explorer | 16
FireFox | 52
Safari | 10
Opera | 44

Tipo | Definição
:--: | :-------:
Valor Padrão | auto / auto
Herdado | não
Animável? | sim
Sintaxe javascript | objeto.**style.gridColumn**="2 / span 2"

<br>
###**hanging-pontuaction**

####Descrição:

Define onde o marcador da linha será posto.

####Sintaxe e valores:

```
hanging-punctuation: none
hanging-punctuation: first
hanging-punctuation: last
hanging-punctuation: allow-end
hanging-punctuation: force-end
hanging-punctuation: initial
hanging-punctuation: inherit
```

####Exemplo:

```
p {
  hanging-punctuation: first;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | não suportado
Internet Explorer | não suportado
FireFox | não suportado
Safari | 10+
Opera | não suportado

Tipo | Definição
:--: | :-------:
Valor Padrão | none
Herdado | sim
Animável? | não
Sintaxe javascript | objeto.**style.hangingPunctuation**="first"

<br>
###**height**

####Descrição:

Define a altura da caixa

####Sintaxe e valores:

```
height: auto
height: length
height: initial
height: inherit
```

####Exemplo:

```
div.a {
  height: auto;
  border: 1px solid black;
}

div.b {
  height: 50px;
  border: 1px solid black;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 1.0 
Internet Explorer | 4.0
FireFox | 1.0
Safari | 1.0
Opera | 7.0

Tipo | Definição
:--: | :-------:
Valor Padrão | auto
Herdado | não
Animável? | sim
Sintaxe javascript | objeto.**style.height**="500px"

<br>
###**hypens**

####Descrição:

Define se as palavras poderão ter hífens.

####Sintaxe e valores:

```
hyphens: none
hyphens: manual
hyphens: auto
hyphens: initial
hyphens: inherit
```

####Exemplo:

```
div.a {
  -webkit-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}

div.b {
  -webkit-hyphens: manual;
  -ms-hyphens: manual;
  hyphens: manual;
}

div.c {
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 55.0 
Internet Explorer | 79.0
FireFox | 43.0
Safari | 5.1
Opera | 44.0

Tipo | Definição
:--: | :-------:
Valor Padrão | manual
Herdado | sim
Animável? | não
Sintaxe javascript | objeto.**style.hyphens**="none"

<br>
###**@import**

####Descrição:

Usado para importar outras folahs de estilos para dentro de outra folha de estilo.

####Sintaxe e valores:

```
@import url
@import string list-of-mediaqueries
```

####Exemplo:

```
@import "navigation.css"; /* Usando uma string */

or

@import url("navigation.css"); /* Usando uma url */
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 1.0 
Internet Explorer | 5.5
FireFox | 1.0
Safari | 1.0
Opera | 3.5

Tipo | Definição
:--: | :-------:
Valor Padrão | ...
Herdado | ...
Animável? | ...
Sintaxe javascript | ...

<br>
###**isolation**

####Descrição:

Define quando um novo elemento é criado, se ele deve ou não deve ser empilhado. 

####Sintaxe e valores:

```
isolation: auto
isoaltion: isolate
isoaltion: initial
isoaltion: inherit
```

####Exemplo:

```
#e {
  isolation: isolate;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 41.0
Internet Explorer | 79.0
FireFox | 36.0
Safari | sim
Opera | 30.0

Tipo | Definição
:--: | :-------:
Valor Padrão | auto
Herdado | não
Animável? | não
Sintaxe javascript | objeto.**style.isolation**="isolate"

<br>
###**justify-content**

####Descrição:



####Sintaxe e valores:

```
justify-content: flex-start
justify-content: flex-end
justify-content: center
justify-content: space-between
justify-content: space-around
justify-content: space-evenly
justify-content: initial
justify-content: inherit
```

####Exemplo:

```
div {
  display: flex;
  justify-content: center;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 29.0 
Internet Explorer | 11.0
FireFox | 28.0
Safari | 9.0
Opera | 17.0

Tipo | Definição
:--: | :-------:
Valor Padrão | flex-start
Herdado | não
Animável? | não
Sintaxe javascript | objeto.**style.justifyContent**="space-between"

<br>
###****

####Descrição:

Define os frames da animação criada a partir do css, oque foir especificado a quipara ele, será regra para ser seguido na animação.

>Os seletores de Keyframe são dados em porcentagem.

####Sintaxe e valores:

```
@keyframes animationname {
  keyframes-selector {
    css-styles;
  }
}
```

####Exemplo:

```
@keyframes mymove {
  from {top: 0px;}
  to {top: 200px;}
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 43.0 
Internet Explorer | 10.0
FireFox | 16.0
Safari | 9.0
Opera | 30.0

Tipo | Definição
:--: | :-------:
Valor Padrão | ...
Herdado | ...
Animável? | ...
Sintaxe javascript | ...

<br>
###****

####Descrição:

Posiciona horizontalmente o elemento.

####Sintaxe e valores:

```
left: auto
left: length
left: initial
left: inherit
```

####Exemplo:

```
div.c {
  position: absolute;
  left: 150px;
  width: 200px;
  height: 120px;
  border: 3px solid green;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 1.0
Internet Explorer | 5.5
FireFox | 1.0
Safari | 1.0
Opera | 5.0

Tipo | Definição
:--: | :-------:
Valor Padrão | auto
Herdado | não
Animável? | sim
Sintaxe javascript | objeto.**style.left**="100px"

<br>
###**letter-spacinf**

####Descrição:

Define a distância de uma eletra para outra no texto. 

####Sintaxe e valores:

```
letter-spacing: normal
letter-spacing: length
letter-spacing: initial
letter-spacing: inherit
```

####Exemplo:

```
h1 {
  letter-spacing: 3px;
}

h2 {
  letter-spacing: 2px;
}

h3 {
  letter-spacing: -1px;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 1.0
Internet Explorer | 4.0
FireFox | 1.0
Safari | 1.0
Opera | 3.5

Tipo | Definição
:--: | :-------:
Valor Padrão | normal
Herdado | sim
Animável? | sim
Sintaxe javascript | objeto.**style.letterSpacing**="3px"

<br>
###****

####Descrição:

Define a altura de uma linha.

####Sintaxe e valores:

```
line-height: normal
line-height: number
line-height: length
line-height: initial
line-height: inherit
```

####Exemplo:

```
div.a {
  line-height: normal;
}

div.b {
  line-height: 1.6;
}

div.c {
  line-height: 80%;
}

div.d {
  line-height: 200%;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 1.0
Internet Explorer | 4.0
FireFox | 1.0
Safari | 1.0 
Opera | 7.0

Tipo | Definição
:--: | :-------:
Valor Padrão | normal
Herdado | sim
Animável? | sim
Sintaxe javascript | objeto.**style.lineHeight**="30px"

<br>
###**list-style**

####Descrição:

Usado para definir as seguintes propriedades de uma lista:

* list-style-type
* list-style-position
* list-style-image

####Sintaxe e valores:

```
list-style: list-style-type list-style-position list-style-image
list-style: initial
list-style: inherit
```

####Exemplo:

```
ul {
  list-style: square inside url("sqpurple.gif");
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 1.0
Internet Explorer | 4.0
FireFox | 1.0
Safari | 1.0
Opera | 7.0

Tipo | Definição
:--: | :-------:
Valor Padrão | disc outside none
Herdado | sim
Animável? | não
Sintaxe javascript | objeto.**style.listStyle**="decimal inside"

<br>
###**margin**

####Descrição:

Usado para definir uma margem de espaço de uma caixa pra outra, em qualquer direção. usado para definir as seguintes propriedades em uma propriedade apênas.

* margin-top
* margin-right
* margin-bottom
* margin-left

####Sintaxe e valores:

```
margin: length
margin: auto
margin: initial
margin: inherit
```

####Exemplo:

```
p {
  margin: 35px;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 1.0
Internet Explorer | 6.0
FireFox | 1.0
Safari | 1.0
Opera | 3.5

Tipo | Definição
:--: | :-------:
Valor Padrão | 0
Herdado | não
Animável? | sim
Sintaxe javascript | objeto.**style.margin**="100px 50px"

<br>
###**margin-bottom(top,left,right)**

####Descrição:

Define as propriedades das margens.

####Sintaxe e valores:

```
margin-bottom: length
margin-bottom: auto
margin-bottom: initial
margin-bottom: inherit
```

####Exemplo:

```
p.ex1 {
  margin-bottom: 25px;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 1.0
Internet Explorer | 6.0
FireFox | 1.0
Safari | 1.0
Opera | 3.5

Tipo | Definição
:--: | :-------:
Valor Padrão | 0
Herdado | não
Animável? | sim
Sintaxe javascript | objeto.**style.marginBottom**="100px"

<br>
###**max-height min-height max-width min-width**

####Descrição:

Define o valor máximo(max) e mínimo(min) de altura (height) e largura (width).

####Sintaxe e valores:

```
max-height: none
max-height: length
max-height: initial
max-height: inherit
```

####Exemplo:

```
p.ex1 {
  max-height: 50px;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 1.0
Internet Explorer | 7.0
FireFox | 1.0
Safari | 2.0.2
Opera | 7.0

Tipo | Definição
:--: | :-------:
Valor Padrão | none
Herdado | não
Animável? | sim
Sintaxe javascript | objeto.**style.maxHeight**="100px"

<br>
###**@media rule**

####Descrição:

Cria uma regra de mídia, seja ela de tamanho minimo e máximo de tela para a estilização ser usada ou não.

####Sintaxe e valores:

```
@media not|only mediatype and (mediafeature and|or|not mediafeature) {
  CSS-Code;
}
```

####Exemplo:

```
@media only screen and (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 21
Internet Explorer | 9
FireFox | 3.5
Safari | 4.0
Opera | 9

Tipo | Definição
:--: | :-------:
Valor Padrão | ...
Herdado | ...
Animável? | ...
Sintaxe javascript | ...


<br>
###**mix-blend-mode**

####Descrição:

Define como um conteúdo mesclado deve se comportar.

####Sintaxe e valores:

```
mix-blend-mode: normal
mix-blend-mode: multiply
mix-blend-mode: screen
mix-blend-mode: overlay
mix-blend-mode: darken
mix-blend-mode: lighten
mix-blend-mode: color-dodge
mix-blend-mode: color-burn
mix-blend-mode: difference
mix-blend-mode: exclusion
mix-blend-mode: hue
mix-blend-mode: saturation
mix-blend-mode: color
mix-blend-mode: luminosity
```

####Exemplo:

```
.container {
  background-color: red;
}

.container img {
  mix-blend-mode: darken;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 41
Internet Explorer | 79
FireFox | 32
Safari | 8
Opera | 35

Tipo | Definição
:--: | :-------:
Valor Padrão | normal
Herdado | não
Animável? | não
Sintaxe javascript | objeto.**style.mixBlendMode9**="darken"

<br>
###**object-fit**

####Descrição:

Usado para redefinir os tamanhos d eimagens e videos para caberem nos containers

####Sintaxe e valores:

```
object-fit: fill
object-fit: contain
object-fit: cover
object-fit: scale-down
object-fit: none
object-fit: initial
object-fit: inherit
```

####Exemplo:

```
img.a {
  width: 200px;
  height: 400px;
  object-fit: cover;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 31
Internet Explorer | 16
FireFox | 36
Safari | 7.1
Opera | 19.0

Tipo | Definição
:--: | :-------:
Valor Padrão | ...
Herdado | não
Animável? | não
Sintaxe javascript | objeto.**style.objectFit**="cover"

<br>
###**object-position**

####Descrição:

é usado em conjunto com a propriedade object-fit, suas imagens e videos podem ser posicionados com coordenadas X/Y dentro de seu contêiner pai.

####Sintaxe e valores:

```
object-position: position
object-position: initial
object-position: inherit
```

####Exemplo:

```
img.a {
  width: 200px;
  height: 400px;
  object-fit: none;
  object-position: 5px 10%;
  border: 5px solid red;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 31
Internet Explorer | 16
FireFox | 36
Safari | 10
Opera | 19

Tipo | Definição
:--: | :-------:
Valor Padrão | 50% 50%
Herdado | sim
Animável? | sim
Sintaxe javascript | objeto.**style.objectPosition**="0 10%"

<br>
###**opacity**

####Descrição:

Define o nível de opacidade dos objetos

####Sintaxe e valores:

```
opacity: number
opacity: initial
opacity: inherit
```

####Exemplo:

```
div {
  opacity: 0.5;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 4
Internet Explorer | 9
FireFox | 2
Safari | 3.1
Opera | 9

Tipo | Definição
:--: | :-------:
Valor Padrão | 1
Herdado | não
Animável? | sim
Sintaxe javascript | objeto.**style.opacity**="0.5"

<br>
###**order**

####Descrição:

Define a ordem dos itens flexíveis.

####Sintaxe e valores:

```
order: number
order: initial
order: inherit
```

####Exemplo:

```
div#myRedDIV {order: 2;}
div#myBlueDIV {order: 4;}
div#myGreenDIV {order: 3;}
div#myPinkDIV {order: 1;}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 29
Internet Explorer | 11
FireFox | 28
Safari | 9
Opera | 17

Tipo | Definição
:--: | :-------:
Valor Padrão | 0
Herdado | não
Animável? | sim
Sintaxe javascript | objeto.**style.order**="2"

<br>
###****

####Descrição:

Essa propriedade desenha algo arredor do elemento definido, fora das bordas. Usado para definir as seguintes propriedades:

* outline-width
* outline-style
* outline-color

####Sintaxe e valores:

```
outline: outline-width outline-style outline-color
outline: initial
outline: inherit
```

####Exemplo:

```
h2 {
  outline: 5px dotted green;
}

div.a {
  outline: 2px dashed blue;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 1.0
Internet Explorer | 8.0
FireFox | 1.5
Safari | 1.2
Opera | 7.0

Tipo | Definição
:--: | :-------:
Valor Padrão | medium invert color
Herdado | não
Animável? | sim
Sintaxe javascript | objeto.**style.outline**="#0000FF dotted 5px"

<br>
###**overflow**

####Descrição:

Define oque acontece com os elementos fora do seu elemento pai

####Sintaxe e valores:

```
overflow: visible
overflow: hidden
overflow: scroll
overflow: auto
overflow: initial
overflow: inherit
```

####Exemplo:

```
div.ex1 {
  overflow: scroll;
}

div.ex2 {
  overflow: hidden;
}

div.ex3 {
  overflow: auto;
}

div.ex4 {
  overflow: visible;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome |  1.0
Internet Explorer | 4.0
FireFox | 1.0
Safari | 1.0
Opera | 7.0

Tipo | Definição
:--: | :-------:
Valor Padrão | visible
Herdado | não
Animável? | não
Sintaxe javascript | objeto.**style.overflow**="scroll"

<br>
###**padding**

####Descrição:

Usado apra deginir as propriedades abaixo que correspondem ao espaço interno do elemento, o seu tamanho em todas as direções.

* padding-top
* padding-right
* padding-bottom
* padding-left

####Sintaxe e valores:

```
padding: length
padding: initial
padding: inherit
```

####Exemplo:

```
p {
  padding: 35px 70px;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 1.0
Internet Explorer | 4.0
FireFox | 1.0
Safari | 1.0
Opera | 3.5

Tipo | Definição
:--: | :-------:
Valor Padrão | 0
Herdado | não
Animável? | sim
Sintaxe javascript | objeto.**style.padding**="100px 20px"

<br>
###**position**

####Descrição:

Define como o posicionamento do objeto deve se comportar

####Sintaxe e valores:

```
position: static
position: absolute
position: fixed
position: relative
position: sticky
position: initial
position: inherit
```

####Exemplo:

```
h2 {
  position: absolute;
  left: 100px;
  top: 150px;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 1.0
Internet Explorer | 7.0
FireFox | 1.0
Safari | 1.0
Opera | 4.0

Tipo | Definição
:--: | :-------:
Valor Padrão | static
Herdado | não
Animável? | não
Sintaxe javascript | objeto.**style.position**="absolute"


<br>
###**quotes**

####Descrição:

Define as marcas de cotação, marcas de inicio e fim de frase.

####Sintaxe e valores:

```

quotes: none
quotes: string
quotes: initial
quotes: inherit

```

####Exemplo:

```
#a{
  quotes: "." "."
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 11.0
Internet Explorer | 8.0
FireFox | 1.5
Safari | 5.1
Opera | 4.0

Tipo | Definição
:--: | :-------:
Valor Padrão | não especificado
Herdado | sim
Animável? | não 
Sintaxe javascript | objeto.**style.quites**="'\253' '\273'"

<br>
###**resize**

####Descrição:

Define se o usuário pode ou não aumentar ou diminuir as dimensões do elemento

####Sintaxe e valores:

```
resize: none
resize: both
resize: horizontal
resize: vertical
resize: initial
resize: inherit
```

####Exemplo:

```
div {
  resize: both;
  overflow: auto;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 4.0
Internet Explorer | 79.0
FireFox | 5.0
Safari | 4.0
Opera | 15.0

Tipo | Definição
:--: | :-------:
Valor Padrão | none
Herdado | não
Animável? | não
Sintaxe javascript | objeto.**style.resize**="both"


<br>
###**right**

####Descrição:

Usado para alinhar horizontalmente a posição de um elemento.

####Sintaxe e valores:

```
right: auto
right: length
right: initial
right: inherit
```

####Exemplo:

```
div.absolute {
  position: absolute;
  right: 150px;
  width: 200px;
  height: 120px;
  border: 3px solid green;
} 
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 1.0
Internet Explorer | 5.5
FireFox | 1.0
Safari | 1.0
Opera | 5.0

Tipo | Definição
:--: | :-------:
Valor Padrão | auto
Herdado | não
Animável? | sim
Sintaxe javascript | objeto.**style.right**="200px"

<br>
###**row-gap**

####Descrição:

Usado quando o display está definido como grid para definir a distância de um item para outro.

####Sintaxe e valores:

```
row-gap: length
row-gap: normal
row-gap: initial
row-gap: inherit
```

####Exemplo:

```

```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 66
Internet Explorer | 16
FireFox | 61
Safari | 12.1
Opera | 53

Tipo | Definição
:--: | :-------:
Valor Padrão | normal
Herdado | não
Animável? | sim
Sintaxe javascript | objeto.**style.rowGap**="50px"

<br>
###**scroll-behavior**

####Descrição:

Usado para direcionar a sua tela para uma parte do body definida com um clique.

####Sintaxe e valores:

```
scroll-behavior: auto
scroll-behavior: smooth
scroll-behavior: initial
scroll-behavior: inherit
```

####Exemplo:

```
html {
  scroll-behavior: smooth;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 61.0
Internet Explorer | 79.0
FireFox | 36.0
Safari | 14.0
Opera | 48.0

Tipo | Definição
:--: | :-------:
Valor Padrão | auto
Herdado | não
Animável? | não
Sintaxe javascript | objeto.**style.crollBehavior**="smooth"



<br>
###**tab-size**

####Descrição:

Define o tamanho de espaçamento entr palavras.

####Sintaxe e valores:

```
tab-size: number
tab-size: length
tab-size: initial
tab-size: inherit
```

####Exemplo:

```
pre {-moz-tab-size: 16;} /* Firefox */
pre {tab-size: 16;}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 21.0
Internet Explorer | 79.0
FireFox | 4.0
Safari | 6.1
Opera | 15.0

Tipo | Definição
:--: | :-------:
Valor Padrão | 8
Herdado | sim
Animável? | não
Sintaxe javascript | objeto.**style.tabSize**="16"

<br>
###**table-layout**

####Descrição:

Define como deve ser a construção da tabela.

####Sintaxe e valores:

```
table-layout: auto
table-layout: fixed
table-layout: initial
table-layout: inherit
```

####Exemplo:

```
table.a {
  table-layout: auto;
  width: 180px;
}

table.b {
  table-layout: fixed;
  width: 180px;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 14.0
Internet Explorer | 5.0
FireFox | 1.0
Safari | 1.0
Opera | 7.0

Tipo | Definição
:--: | :-------:
Valor Padrão | auto
Herdado | não
Animável? | não
Sintaxe javascript | objeto.**style.tableLayout**="fixed"

<br>
###**text-align**

####Descrição:

Define o alinhmanto do texto.

####Sintaxe e valores:

```
text-align: left
text-align: right
text-align: center
text-align: justify
text-align: initial
text-align: inherit
```

####Exemplo:

```
div.a {
  text-align: center;
}

div.b {
  text-align: left;
}

div.c {
  text-align: right;
}

div.c {
  text-align: justify;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 1.0
Internet Explorer | 3.0
FireFox | 1.0
Safari | 1.0 
Opera | 3.5

Tipo | Definição
:--: | :-------:
Valor Padrão | left
Herdado | sim
Animável? | não
Sintaxe javascript | objeto.**style.textAlign**="right"

<br>
###**text-align-last**

####Descrição:

Define o alinhamento da ultima linha do texto

####Sintaxe e valores:

```
text-align-last: auto
text-align-last: left
text-align-last: right
text-align-last: center
text-align-last: justify
text-align-last: start
text-align-last: end
text-align-last: initial
text-align-last: inherit
```

####Exemplo:

```
div.a {
  text-align: justify;  /* For Edge */
  text-align-last: center;
}

```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 47.0
Internet Explorer | 5.5
FireFox | 49.0
Safari | sem suporte
Opera | 34.0

Tipo | Definição
:--: | :-------:
Valor Padrão | auto
Herdado | sim
Animável? | não
Sintaxe javascript | objeto.**style.textAlignLast**="center"


<br>
###**text-decoration**

####Descrição:

Usado apra decorar o texto.

####Sintaxe e valores:

```
text-decoration: text-decoration-line text-decoration-color text-decoration-style
text-decoration: initial
text-decoration: inherit
```

####Exemplo:

```
h1 {
  text-decoration: overline;
}

h2 {
  text-decoration: line-through;
}

h3 {
  text-decoration: underline;
}

h4 {
  text-decoration: underline overline;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 1.0
Internet Explorer | 3.0
FireFox | 1.0
Safari | 1.0
Opera | 3.5

Tipo | Definição
:--: | :-------:
Valor Padrão | none currentcolor solid
Herdado | não
Animável? | não
Sintaxe javascript | objeto.**style.textDecoration**="underline"

<br>
###**text-decoration-color**

####Descrição:

Usado apra definir a cor da decoração do texto, geralmente usado em conjunto com o text-decoration

####Sintaxe e valores:

```
text-decoration-color: color
text-decoration-color: initial
text-decoration-color: inherit
```

####Exemplo:

```
p {
  text-decoration: underline;
  text-decoration-color: red;
}

```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 57.0
Internet Explorer | 79.0
FireFox | 36.0
Safari | 7.1
Opera | 44.0

Tipo | Definição
:--: | :-------:
Valor Padrão | 	currentColor
Herdado | não
Animável? | sim
Sintaxe javascript | objeto.**style.textDecorationColor**="red"


<br>
###**text-decoration-line**

####Descrição:

Cria uma linha de decoação no texto, seja ela embaixo, em cima ou no meio do texto.

####Sintaxe e valores:

```
text-decoration-line: none
text-decoration-line: underline
text-decoration-line: overline
text-decoration-line: line-through
text-decoration-line: initial
text-decoration-line: inherit
```

####Exemplo:

```
div.a {
  text-decoration-line: overline;
}

div.b {
  text-decoration-line: underline;
}

div.c {
  text-decoration-line: line-through;
}

div.d {
  text-decoration-line: overline underline;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 57.0
Internet Explorer | 79.0
FireFox | 36.0
Safari | 7.1
Opera | 44.0

Tipo | Definição
:--: | :-------:
Valor Padrão | none
Herdado | não
Animável? | não
Sintaxe javascript | objeto.**style.textDecorationLine**="underline"


<br>
###**text-decoration-style**

####Descrição:

Define o estilo da linha de decoração do texto

####Sintaxe e valores:

```
text-decoration-style: solid
text-decoration-style: double
text-decoration-style: dotted
text-decoration-style: dashed
text-decoration-style: wavy
text-decoration-style: initial
text-decoration-style: inherit
```

####Exemplo:

```
div.a {
  text-decoration-line: underline;
  text-decoration-style: solid;
}

div.b {
  text-decoration-line: underline;
  text-decoration-style: wavy;
}

div.c {
  text-decoration-line: underline;
  text-decoration-style: double;
}

div.d {
  text-decoration-line: overline underline;
  text-decoration-style: wavy;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 57.0
Internet Explorer | 79.0
FireFox | 36.0
Safari | 12.1
Opera | 44.0

Tipo | Definição
:--: | :-------:
Valor Padrão | solid
Herdado | não
Animável? | não
Sintaxe javascript | objeto.**style.textDecorationStyle**="wavy"

<br>
###**text-indent**

####Descrição:

Define o tamanho do início de parágrafo.

####Sintaxe e valores:

```
text-indent: length
text-indent: initial
text-indent: inherit
```

####Exemplo:

```
div.a {
  text-indent: 50px;
}

div.b {
  text-indent: -2em;
}

div.c {
  text-indent: 30%;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 1.0
Internet Explorer | 3.0
FireFox | 1.0
Safari | 1.0
Opera | 3.5

Tipo | Definição
:--: | :-------:
Valor Padrão | 0
Herdado | sim
Animável? | sim
Sintaxe javascript | objeto.**style.textIndent**="50px

<br>
###**text-justify**

####Descrição:

Define como o justificar deve se comportar.

####Sintaxe e valores:

```
text-justify: auto
text-justify: inter-word
text-justify: inter-character
text-justify: none
text-justify: initial
text-justify: inherit
```

####Exemplo:

```
div {
  text-align: justify;
  text-justify: inter-word;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | sim
Internet Explorer | 11.0
FireFox | 55.0
Safari | 10.0.3
Opera | sim

Tipo | Definição
:--: | :-------:
Valor Padrão | auto
Herdado | sim
Animável? | não
Sintaxe javascript | objeto.**style.textJustify**="inter-word"


<br>
###**text-overflow**

####Descrição:

Define como o final da linha de texto deve se comportar quando não houver mais espaço.

####Sintaxe e valores:

```
text-overflow: clip
text-overflow: ellipsis
text-overflow: string
text-overflow: initial
text-overflow: inherit
```

####Exemplo:

```
div {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 4.0
Internet Explorer | 6.0
FireFox | 7.0
Safari | 3.1
Opera | 11.0

Tipo | Definição
:--: | :-------:
Valor Padrão | clip
Herdado | não
Animável? | não
Sintaxe javascript | objeto.**style.textOverflow**="elipsis"

<br>
###**text-shadow**

####Descrição:

Define uma sombra para o texto

####Sintaxe e valores:

```
text-shadow: h-shadow v-shadow blur-radius color
text-shadow: none
text-shadow: initial
text-shadow: inherit
```

####Exemplo:

```
h1 {
  text-shadow: 2px 2px #ff0000;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 4.0
Internet Explorer | 10.0
FireFox | 3.5
Safari | 4.0
Opera | 9.6

Tipo | Definição
:--: | :-------:
Valor Padrão | none
Herdado | sim
Animável? | sim
Sintaxe javascript | objeto.**style.textShadow**="2px 5px 5px red"

<br>
###**text-transform**

####Descrição:

Define como a letra maiúscula deve se comportar, tudo em maiúsculo, tudo em minúscul ou a primeira letra de cada palavra em minusculo...

####Sintaxe e valores:

```
text-transform: none
text-transform: capitalize
text-transform: uppercase
text-transform: lowercase
text-transform: initial
text-transform: inherit
```

####Exemplo:

```
div.a {
  text-transform: uppercase;
}

div.b {
  text-transform: lowercase;
}

div.c {
  text-transform: capitalize;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 1.0
Internet Explorer | 4.0
FireFox | 1.0
Safari | 1.0
Opera | 7.0

Tipo | Definição
:--: | :-------:
Valor Padrão | none
Herdado | sim
Animável? | ...
Sintaxe javascript | objeto.**style.textTransform**="uppercase"

<br>
###**top**

####Descrição:

Usado para alinhar verticalmente o elemento

####Sintaxe e valores:

```
top: auto
top: length
top: initial
top: inherit
```

####Exemplo:

```
div {
  position: absolute;
  top: 50px;
  border: 3px solid green;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 1.0
Internet Explorer | 5.0
FireFox | 1.0
Safari | 1.0
Opera | 6.0

Tipo | Definição
:--: | :-------:
Valor Padrão | auto
Herdado | não
Animável? | sim
Sintaxe javascript | objeto.**style.top**="100px"


<br>
###**tranform**

####Descrição:

usado para aplicar uma tranformação de um elemento 2D ou 3D, rotacionar, mover...

####Sintaxe e valores:

```
transform: none
transform: transform-functions
transform: initial
transform: inherit
```

####Exemplo:

```
div.a {
  transform: rotate(20deg);
}

div.b {
  transform: skewY(20deg);
}

div.c {
  transform: scaleY(1.5);
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 36.0
Internet Explorer | 10.0
FireFox | 16.0
Safari | 9.0
Opera | 23.0

Tipo | Definição
:--: | :-------:
Valor Padrão | none
Herdado | não
Animável? | sim
Sintaxe javascript | objeto.**style.transform**="rotate(7deg)"

<br>
###**align-content**

####Descrição:

Define a posição do elemento transformado.

####Sintaxe e valores:

```
transform-origin: x-axis y-axis z-axis
transform-origin: initial
transform-origin: inherit

```

####Exemplo:

```
div {
  transform: rotate(45deg);
  transform-origin: 20% 40%;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 36
Internet Explorer | 10
FireFox | 16
Safari | 9
Opera | 23

Tipo | Definição
:--: | :-------:
Valor Padrão | 50% 50% 0
Herdado | não
Animável? | sim
Sintaxe javascript | objeto.**style.transformOrigin**="0 0"

<br>
###**transform-style**

####Descrição:

Define o estilo de renderização para elementos 3D

####Sintaxe e valores:

```
transform-style: flat
transform-style: preserve-3d
transform-style: initial
transform-style: inherit
```

####Exemplo:

```
div {
  transform: rotateY(60deg);
  transform-style: preserve-3d;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 36
Internet Explorer | 11
FireFox | 16
Safari | 9
Opera | 23

Tipo | Definição
:--: | :-------:
Valor Padrão | flat
Herdado | não
Animável? | não
Sintaxe javascript | objeto.**style.transformStyle**="preserve-3d"

<br>
###**transition**

####Descrição:

Define as informações sobre a transição de animação

####Sintaxe e valores:

```
transition: property duration timing-function delay
transition: initial
transition: inherit
```

####Exemplo:

```
div {
  width: 100px;
  transition: width 2s;
}

div:hover {
  width: 300px;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 26
Internet Explorer | 10
FireFox | 16
Safari | 6.1
Opera | 12.1

Tipo | Definição
:--: | :-------:
Valor Padrão | all 0s ease 0s
Herdado | não
Animável? | não
Sintaxe javascript | objeto.**style.transition**="all 2s"

<br>
###**transition-delay**

####Descrição:

Define o tempo de espera para a transição

####Sintaxe e valores:

```
transition-delay: time
transition-delay: initial
transition-delay: inherit
```

####Exemplo:

```
div {
  transition-delay: 2s;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 26
Internet Explorer | 10
FireFox | 16
Safari | 6.1
Opera | 12.1

Tipo | Definição
:--: | :-------:
Valor Padrão | 0s
Herdado | não
Animável? | não
Sintaxe javascript | objeto.**style.transitionDelay**="2s"

<br>
###**transition-duration**

####Descrição:

Define o tempo de transição

####Sintaxe e valores:

```
transition-duration: time
transition-duration: initial
transition-duration: inherit
```

####Exemplo:

```
div {
  transition-duration: 5s;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 26
Internet Explorer | 10
FireFox | 16
Safari | 6.1
Opera | 12.1

Tipo | Definição
:--: | :-------:
Valor Padrão | 0s
Herdado | não
Animável? | não
Sintaxe javascript | objeto.**	object.style.transitionDuration**="1s"

<br>
###**transition-property**

####Descrição:

Define qual propriedade CSS terá essa transição.

####Sintaxe e valores:

```
transition-property: none
transition-property: all
transition-property: property
transition-property: initial
transition-property: inherit
```

####Exemplo:

```
div {
  transition-property: width;
}

div:hover {
  width: 300px;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 26
Internet Explorer | 10
FireFox | 16
Safari | 6.1
Opera | 12.1

Tipo | Definição
:--: | :-------:
Valor Padrão | all
Herdado | não
Animável? | não
Sintaxe javascript | objeto.**.style.transitionProperty**="width,height"


<br>
###**transition-timing-function**

####Descrição:

Define como se comportará a curva de velocidade da transição.

####Sintaxe e valores:

```
transition-timing-function: linear
transition-timing-function: ease
transition-timing-function: ease-in
transition-timing-function: ease-out
transition-timing-function: ease-in-out
transition-timing-function: step-start
transition-timing-function: step-end
transition-timing-function: steps(int,start
transition-timing-function: end)
transition-timing-function: cubic-bezier(n,n,n,n)
transition-timing-function: initial
transition-timing-function: inherit
```

####Exemplo:

```
div {
  transition-timing-function: linear;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 26
Internet Explorer | 10
FireFox | 16
Safari | 6.1
Opera | 12.1

Tipo | Definição
:--: | :-------:
Valor Padrão | ease
Herdado | não
Animável? | não
Sintaxe javascript | objeto.**style.transitionTimingFunction**="linear"


<br>
###**unicode-bidi**

####Descrição:

Usado para definir mútiplas linguágens para o documento.

####Sintaxe e valores:

```
unicode-bidi: normal
unicode-bidi: embed
unicode-bidi: bidi-override
unicode-bidi: initial
unicode-bidi: inherit
```

####Exemplo:

```
div {
  direction: rtl;
  unicode-bidi: bidi-override;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 2
Internet Explorer | 5.5
FireFox | 1.0
Safari | 1.3
Opera | 9.2

Tipo | Definição
:--: | :-------:
Valor Padrão | normal
Herdado | sim
Animável? | não
Sintaxe javascript | objeto.**style.unicodeBidi**="bidi-override"

<br>
###**user-select**

####Descrição:

Define se o usuário pode selecionar o elemento.

####Sintaxe e valores:

```
user-select: auto
user-select: none
user-select: text
user-select: all
```

####Exemplo:

```
div {
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 54
Internet Explorer | 79
FireFox | 69
Safari | 3.1
Opera | 41

Tipo | Definição
:--: | :-------:
Valor Padrão | auto
Herdado | não
Animável? | não
Sintaxe javascript | objeto.**style.userSelect**="none"

<br>
###**vertical-align**

####Descrição:

Usado para alinhar verticalmente um elemento.

####Sintaxe e valores:

```
vertical-align: baseline
vertical-align: length
vertical-align: sub
vertical-align: super
vertical-align: top
vertical-align: text-top
vertical-align: middle
vertical-align: bottom
vertical-align: text-bottom
vertical-align: initial
vertical-align: inherit
```

####Exemplo:

```
img.a {
  vertical-align: baseline;
}

img.b {
  vertical-align: text-top;
}

img.c {
  vertical-align: text-bottom;
}

img.d {
  vertical-align: sub;
}

img.e {
  vertical-align: super;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 1.0
Internet Explorer | 4.0
FireFox | 1.0
Safari | 1.0
Opera | 4.0

Tipo | Definição
:--: | :-------:
Valor Padrão | baseline
Herdado | não
Animável? | sim 
Sintaxe javascript | objeto.**style.verticalAlign**="top"



<br>
###**visibility**

####Descrição:

Define se o objeto é visivel ou não.

####Sintaxe e valores:

```
visibility: visible
visibility: hidden
visibility: collapse
visibility: initial
visibility: inherit
```

####Exemplo:

```
h2.a {
  visibility: visible;
}

h2.b {
  visibility: hidden;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 1.0
Internet Explorer | 4.0
FireFox | 1.0
Safari | 1.0
Opera | 4.0

Tipo | Definição
:--: | :-------:
Valor Padrão | visible
Herdado | sim
Animável? | sim
Sintaxe javascript | objeto.**style.visibility**="hidden"


<br>
###**white-space**

####Descrição:

Usado para definir como será o comportamento do conteúdo de texto dentro da div quando a linha acabar.

####Sintaxe e valores:

```
white-space: normal
white-space: nowrap
white-space: pre
white-space: pre-line
white-space: pre-wrap
white-space: initial
white-space: inherit
```

####Exemplo:

```
p.a {
  white-space: nowrap;
}

p.b {
  white-space: normal;
}

p.c {
  white-space: pre;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 1
Internet Explorer | 8
FireFox | 3.5
Safari | 3
Opera | 9.5

Tipo | Definição
:--: | :-------:
Valor Padrão | normal
Herdado | sim
Animável? | sim
Sintaxe javascript | objeto.**style.whiteSpace="nowrap"**


<br>
###**width**

####Descrição:

Usado para definir a largura de um elemento

####Sintaxe e valores:

```
width: auto
width: value
width: initial
width: inherit
```

####Exemplo:

```
div.a {
  width: auto;
  border: 1px solid black;
}

div.b {
  width: 150px;
  border: 1px solid black;
}

div.c {
  width: 50%;
  border: 1px solid black;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 1
Internet Explorer | 4
FireFox | 1
Safari | 1
Opera | 3.5

Tipo | Definição
:--: | :-------:
Valor Padrão | auto 
Herdado | não
Animável? | sim
Sintaxe javascript | objeto.**style.width**="500px"


<br>
###**word-break**

####Descrição:

Usado para especificar a quebra de palavras dentro do elemento.

####Sintaxe e valores:

```
word-break: normal
word-break: break-all
word-break: keep-all
word-break: break-word
word-break: initial
word-break: inherit
```

####Exemplo:

```
p.a {
  word-break: break-all;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 4
Internet Explorer | 5.5
FireFox | 15
Safari | 3.1
Opera | 15

Tipo | Definição
:--: | :-------:
Valor Padrão | normal 
Herdado | sim
Animável? | não
Sintaxe javascript | objeto.**style.wordBreak**="break-all"

<br>
###**word-spacing**

####Descrição:

usado apra definir o espaço entre as palavras

####Sintaxe e valores:

```
word-spacing: normal
word-spacing: length
word-spacing: initial
word-spacing: inherit
```

####Exemplo:

```
p {
  word-spacing: 30px;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 1
Internet Explorer | 6
FireFox | 1
Safari | 1
Opera | 3.5

Tipo | Definição
:--: | :-------:
Valor Padrão | normal
Herdado | sim
Animável? | sim
Sintaxe javascript | objeto.**style.wordSpacing**="20px"

<br>
###**word-wrap**

####Descrição:

Define se a palavra pode ser dividida em pedaços quando não couber por inteira na linha.

####Sintaxe e valores:

```
word-wrap: normal
word-wrap: break-word
word-wrap: initial
word-wrap: inherit
```

####Exemplo:

```
div {
  word-wrap: break-word;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 4
Internet Explorer | 5.5
FireFox | 3.5
Safari | 3.1
Opera | 10.5

Tipo | Definição
:--: | :-------:
Valor Padrão | normal
Herdado | sim 
Animável? | não
Sintaxe javascript | objeto.**style.wordWrap**="break-word"

<br>
###**writing-mode**

####Descrição:

Define a direção que será escrito o texto.

####Sintaxe e valores:

```
writing-mode: horizontal-tb
writing-mode: vertical-rl
writing-mode: vertical-lr
```

####Exemplo:

```
p.test1 {
  writing-mode: horizontal-tb;
}

p.test2 {
  writing-mode: vertical-rl;
}

span.test2 {
  writing-mode: vertical-rl;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 48
Internet Explorer | 12
FireFox | 41
Safari | 11
Opera | 35

Tipo | Definição
:--: | :-------:
Valor Padrão | horizontal-tb
Herdado | sim
Animável? | não
Sintaxe javascript | objeto.**style.writingMode**="vertical-rl"


<br>
###**z-index**

####Descrição:

Define a ordem de empilhar os elementos.

####Sintaxe e valores:

```
z-index: auto
z-index: number
z-index: initial
z-index: inherit
```

####Exemplo:

```
img {
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: -1;
}
```

####Navegadores:

Navegador | Versão
:-------: | :----:
Chrome | 1
Internet Explorer | 4
FireFox | 3
Safari | 1
Opera | 4

Tipo | Definição
:--: | :-------:
Valor Padrão | auto
Herdado | não
Animável? | sim
Sintaxe javascript | objeto.**style.zIndex**="-1"

##Funções do CSS:

As funções do CSS são usadas como um valor para várias propriedades CSS.
<br>
### Função attr()

######Descrição:
Retorna o valor do atributo do elemento selecionado.

######Exemplo:
```
...

a:after {
  content: " (" attr(href) ")";
}

...
```
Valor | Descrição | Exemplo
:---: | :-------: | :-----: 
atributo-nome | O nome do atributo do elemento | attr(href)

<br>
### Função calc()

######Descrição:
Permite fazer cálculos para definir o valor das propriedades CSS

> Os operadores matemáticos são:
>**+** = soma
>**-** = subtração
>**\*** = multiplicação
>**/** = divisão.

######Exemplo:
```
...

#div1 {
  position: absolute;
  left: 50px;
  width: calc(100% - 100px);
  border: 1px solid black;
  background-color: yellow;
  padding: 5px;
  text-align: center;
}
...
```
Valor | Descrição | Exemplo
:---: | :-------: | :-----: 
Expressão | Uma expressão matemática, o resultado dela será enviado para a propriedade. | calc(100% - 100px)

<br>
### Função cubic-bezier()

######Descrição:
Define uma curva de Bezier cúbica.
Uma curva Cúbica de Bezier é definida por quatro pontos P0, P1, P2 e P3. P0 e P3 são o início e o fim da curva e, no CSS esses pontos são fixos porque as coordenadas são razões. P0 é (0, 0) e representa o tempo inicial e o estado inicial, P3 é (1, 1) e representa o tempo final e o estado final.
>Geralmente é utilizada na propriedade "transition-timing-function"

######Exemplo:
```
...

div {
  width: 100px;
  height: 100px;
  background: red;
  transition: width 2s;
  transition-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1);
}

...
```
Valor | Descrição | Exemplo
:---: | :-------: | :-----: 
x1,y1,x2,y2 | Valores numéricos X1 e X2 devem ser um numero de 0 a 1 | cubic-bezier (0.1,0.7,1.0,0.1)

<br>
### Função hsl()

######Descrição:
Define cores usando o modelo Hue-Saturations-lightness (HSL).

>HSL significa matiz, saturação e luminosidade e representação de cores em coordenadas cilíndricas.

######Exemplo:
```
...

#p1 {background-color:hsl(120,100%,50%);} /* green */
#p2 {background-color:hsl(120,100%,75%);} /* light green */
#p3 {background-color:hsl(120,100%,25%);} /* dark green */
#p4 {background-color:hsl(120,60%,70%);} /* pastel green */

...
```
Valor | Descrição | Exemplo
:---: | :-------: | :-----: 
hue | Define o grau na roda de cores com um número entre 0 e 360 | #p1 {background-color:hsl(**120**,100%,50%);} /* green */
saturation | Define a saturação da cor em porcentagem de 0% a 100%| #p1 {background-color:hsl(120,**100%**,50%);} /* green */
lightness | Define a luminosidade da cor em porcentagem de 0% a 100%, onde 50% é a luminosidade normal| #p1 {background-color:hsl(120,100%,**50%**);} /* green */

<br>
### Função hsla()

######Descrição:
Define cores usando o modelo de cor Hue-Saturation-Lightness-Alpha (HLSA)

>A diferença do HLS para o HLSA é que o A representa que podemos mudar a opacidade da cor com esse padrão direto na definição da cor. 

######Exemplo:
```
...

#p1 {background-color:hsla(120,100%,50%,0.3);} /* green */
#p2 {background-color:hsla(120,100%,75%,0.3);} /* light green */
#p3 {background-color:hsla(120,100%,25%,0.3);} /* dark green */
#p4 {background-color:hsla(120,60%,70%,0.3);} /* pastel green */

...
```
Valor | Descrição | Exemplo
:---: | :-------: | :-----: 
hue | Define o grau na roda de cores com um número entre 0 e 360 | #p4 {background-color:hsla(**120**,60%,70%,0.3);}
saturation | Define a saturação da cor em porcentagem de 0% a 100%| #p4 {background-color:hsla(120,**60%**,70%,0.3);}
lightness | Define a luminosidade da cor em porcentagem de 0% a 100%, onde 50% é a luminosidade normal| #p4 {background-color:hsla(120,60%,**70%**,0.3);} 
alpha | Define o valor de opacidade, o valor necessita ser entre 0.0 (totalmente transparente) e 1.0 (Totalmente opaca) | #p4 {background-color:hsla(120,60%,70%,**0.3**);}

<br>
### Função linear-gradient()

######Descrição:
Define um gradiente linear como imagem de fundo.
Para criar um gradiente linear, você deve definir pelo menos duas interrupções de cor. As paradas de cor são as cores entre as quais você deseja renderizar transições suaves. Você também pode definir um ponto inicial e uma direção (ou um ângulo) junto com o efeito de gradiente.

######Exemplo:
```
...

#grad2 {
  background-image: linear-gradient(red, yellow, blue);
}
#grad {
  background-image: linear-gradient(to right, red , blue);
}

...
```
Valor | Descrição | Exemplo
:---: | :-------: | :-----:
direção | Define um ponto inicial e a direção (ou ângulo) durante o efeito gradiente | background-image: linear-gradient(**to right**, red , blue);
Cor1,cor2,cor3... | São os pontos de cores que devem ser passados da primeira até atingir a última cor |  background-image: linear-gradient(to right, **red** , **blue**);


<br>
### Função radial-gradient()

######Descrição:
Define um gradiente radial como imagem de fundo.

######Exemplo:
```
...

#grad1 {
  background-image: radial-gradient(red 5%, green 15%, blue 60%);
}
#grad2 {
  background-image: radial-gradient(circle, red, yellow, green);
}
#grad3 {
  background-image: radial-gradient(closest-side at 60% 55%, blue, green, yellow, black);
}

#grad4 {
  background-image: radial-gradient(farthest-side at 60% 55%, blue, green, yellow, black);
}

...
```
Valor | Descrição | Exemplo
:---: | :-------: | :-----: 
shape | Define a forma do corpo, pode ser elipse (vem por padrão) ou  circle | background-image: radial-gradient(**circle**, red, yellow, green);
size | Define o tamanho do griadiente. Valores possíveis:<br>farthest-corner (default)<br>closest-side<br>closest-corner<br>farthest-side | background-image: radial-gradient(**closest-side** at 60% 55%, blue, green, yellow, black);
position | Define a posição do gradiente, por padrão é definido como "center" | background-image: radial-gradient(closest-side at **60% 55%**, blue, green, yellow, black);
start-color,...,last-color | Define as cores usadas no gradiente. | background-image: radial-gradient(closest-side at 60% 55%, **blue**, **green**, **yellow**, **black**);

<br>
### Função repeating-linear-gradient()

######Descrição:
Repete gradientes Lineares.

######Exemplo:
```
...

#grad {
  background-image: repeating-linear-gradient(red, yellow 10%, green 20%);
}

...
```
Valor | Descrição | Exemplo
:---: | :-------: | :-----: 
angle | Define o algulo de direção do gradiente, de 0deg para 360deg. Deflaut value é 180deg |  background-image: repeating-linear-gradient(**45deg**, red, blue 7%, green 10%);
side-or-corner | Define a posição inicial do ponto de partida do gradiente linear, precisa de dois valores |  background-image: repeating-linear-gradient(45deg | right-top, red, blue 7%, green 10%);
color1,color2,color3... | Define as cores do gradiente |  background-image: repeating-linear-gradient(45deg, **red**, **blue 7%**, **green 10%**);

<br>
### Função repeating-radial-gradient()

######Descrição:
Repete gradientes radiais.

######Exemplo:
```
...

#grad {
  background-image: repeating-radial-gradient(red, yellow 10%, green 15%);
}
...
```
Valor | Descrição | Exemplo
:---: | :-------: | :-----: 
shape | Define a forma do corpo, pode ser elipse (vem por padrão) ou  circle | background-image: repeating-radial-gradient(**circle**, red, yellow 10%, green 15%);
size | Define o tamanho do griadiente. Valores possíveis:<br>farthest-corner (default)<br>closest-side<br>closest-corner<br>farthest-side |  background-image: repeating-radial-gradient(**closest-side** at 60% 55%, blue, green, yellow, black);
position | Define a posição do gradiente, por padrão é definido como "center" |  background-image: repeating-radial-gradient(closest-side at **60% 55%**, blue, green, yellow, black);
start-color,...,last-color | Define as cores usadas no gradiente. |  background-image: repeating-radial-gradient(closest-side at 60% 55%, **blue**, **green**, **yellow**, **black**);

<br>
### Função rgb()

######Descrição:
Define as cores usando o modelo de cor Red-Green-Blue (RBG).
Um valor de cor RGB é especificado com: rgb (vermelho, verde, azul). Cada parâmetro define a intensidade dessa cor e pode ser um número inteiro entre 0 e 255 ou um valor percentual (de 0% a 100%).
Por exemplo, o valor rgb (0,0,255) é renderizado como azul, porque o parâmetro azul é definido com seu valor mais alto (255) e os outros são definidos como 0.

######Exemplo:
```
...

#p1 {background-color:rgb(255,0,0);} /* red */
#p2 {background-color:rgb(0,255,0);} /* green */
#p3 {background-color:rgb(0,0,255);} /* blue */

...
```
Valor | Descrição | Exemplo
:---: | :-------: | :-----: 
red | Define a intensidade de vermelho para esta cor entre 0 (sem vermelho) e 255 (o máximo de vermelho) | background-color:rgb(**157**,234,192);
green | Define a intensidade de verde para esta cor entre 0 (sem verde) e 255 (o máximo de verde) | background-color:rgb(157,**234**,192);
blue | Define a intensidade de azul para esta cor entre 0 (sem azul) e 255 (o máximo de azul) | background-color:rgb(157,234,**192**);

<br>
### Função grba()

######Descrição:
É uma extensão de valores do modelo de cor RGB, mas com um canal Alfa, responsavel pela opacidade da cor.

######Exemplo:
```
...

#p1 {background-color:rgba(255,0,0,0.3);} /* red with opacity*/
#p2 {background-color:rgba(0,255,0,0.3);} /* green with opacity */
#p3 {background-color:rgba(0,0,255,0.3);} /* blue with opacity */

...
```
Valor | Descrição | Exemplo
:---: | :-------: | :-----: 
red | Define a intensidade de vermelho para esta cor entre 0 (sem vermelho) e 255 (o máximo de vermelho) | background-color:rgb(**157**,234,192,0.3);
green | Define a intensidade de verde para esta cor entre 0 (sem verde) e 255 (o máximo de verde) | background-color:rgb(157,**234**,192,0.3);
blue | Define a intensidade de azul para esta cor entre 0 (sem azul) e 255 (o máximo de azul) | background-color:rgb(157,234,**192**,0.3);
Alhpa | Define a opacidade da cor com os números entre 0 e 1 | background-color:rgb(157,234,192,**0.3**);

<br>
### Função var()

######Descrição:
Insere um valor personalizado para uma propriedade.
Usasda para inserir o valor de uma variável CSS.

######Exemplo:
```
...
<!-- Primeiro, declare uma variável global chamada "--main-bg-color" e
em seguida, use a função var () para inserir o valor da variável
posteriormente na folha de estilo: -->

:root {
  --main-bg-color: coral;
}

#div1 {
  background-color: var(--main-bg-color);
}

#div2 {
  background-color: var(--main-bg-color);
}
...
```
Valor | Descrição | Exemplo
:---: | :-------: | :-----: 
name | Define o nome da variável | **--main-bg-color**: coral;
value | Define o valor da variável | --main-bg-color: **coral**;