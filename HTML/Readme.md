#HTML 5

Guia de referencia para HTML5 e suas Tags.
<br>
#####\<!doctype>

Define o tipo de documento

<br>
exemplo:
```
<!DOCTYPE html>  
<html>  
   //código HTML
</html>
```

Atributo | Descrição
---------|----------
html  | define o documento com a linguagem de marcação HTML

-------------------
<br>
#####<\!-- comentário -->

insere um comentário no HTML
<br>
Exemplo:
```
<!DOCTYPE html>  
<html>  
   <!--Comentário-->
</html>
```

-------------------

#####\<html>

Inicia a estrutura base do HTML no documento.
<br>
Exemplo:
```

<!DOCTYPE html>  
<html>  
   <!--Comentário-->
</html>
```
Atributo | valor | Descrição
---------|-------| ------
lang | pt-br | Define a linguagem de fala da página

--------------------

#####\<Head>

Tag onde é definido as informações gerais (**Metadados**) da página HTML.
>Não é aceito qualquer tag html dentro da Head, apenas as seguintes tags são aceitas:
>- \<title>
>- \<style>
>- \<link>
>- \<meta>
>- \<base>
>- \<script>
>- \<noscript>

<br>
Exemplo:
```

<!DOCTYPE html>  
<html>  
   <head>
   <!-- Código -->
   </head>
</html>
```
------------------

#####\<title>

Insere o título página na aba no navegador.
<br>
Exemplo:
```

<!DOCTYPE html>  
<html>  
   <head>
   <title>Home</title>
   </head>
</html>
```

--------------------

#####\<meta>

Usdaa para definir alguns Metadados.
<br>
Exemplo:
```
<!DOCTYPE html>  
<html>  
   <head>
   <title>Home</title>
    <head>
        <meta charset="UTF-8">
        <meta name="description" content="Free Web tutorials">
        <meta name="keywords" content="HTML, CSS, JavaScript">
        <meta name="author" content="John Doe">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
   </head>   
</html>
```
Atributo | valor | Descrição
---------|:-------:|------
name|	application-name<br>author<br>descriptiongenerator<br>keywords<br>viewport| especifica infomrações de nome para os metadados
content| texto | especifica o valor associado ao atributo http-equiv ou name 
charset| character_set | Especifica o tipo de encoding de caracteres do documento.
http-equiv| content-security-policy<br>content-type<br>default-style<br>refresh | Fornece infomrações http no cabeçalho.
--------------------

#####\<style>

Abre a estilização de folha CSS dentro do documento HTML
<br>
Exemplo:
```

<!DOCTYPE html>  
<html>  
   <head>
   <title>Home</title>
   <meta charset="utf-8">
   <style>

        <!-- Estiliza a página aqui -->

   </style>
   </head>
</html>
```
Atributo | valor | Descrição
---------|-------| ------
type | text/css | Define como a linguagem de estilização CSS

--------------------

#####\<link>

linka um arquivo de estilização externo, utilizado para direcionar onde está afolha de estilização css.
<br>
Exemplo:
```

<!DOCTYPE html>  
<html>  
   <head>
        <title>Home</title>
        <meta charset="utf-8">
        <link rel="stylesheet" href="styles.css">
   </head>
</html>
```
Atributo | valor | Descrição
---------|-------| ------
rel|	alternate<br>author<br>dns-prefetch<br>help<br>icon<br>license<br>next<br>pingback<br>preconnect<br>prefetch<br>preload<br>prerender<br>prev<br>search<br>stylesheet| Especifica a função do Arquivo requerido
href| URL | Especifica o local do arquivo
hreflang| linguagem_do_codigo | especifica a linguagem do código
crossorigin|       | Especifica quais os elementos de origem cruzada são necessários
media|media_query| Especifica em qual documento há a indexação desta folha HTML
sizes| Height<br>Width | especifica o tamanho do icone da aba do navegador
referrerpolicy|no-referrer<br>no-referrer-when-downgrade<br>origin<br>origin-when-cross-origin<br>unsafe-url| Especifica de onde eu devo pegar o recurso de referencia.


--------------------
#####\<script>

Inicia a linguagem de programação javascript.
<br>
Exemplo:
```

<!DOCTYPE html>  
<html>  
    <head>
        <title>Home</title>
        <meta charset="utf-8">
        <link rel="stylesheet" href="styles.css">
        <style>
        body{
            margin:0;
            padding:0;
        }
        </style>
        <script>
            //contém o script criado para a página
        </script>
   </head>
</html>
```
Atributo | valor | Descrição
---------|-------| ------
Async| async| especifica se é para ser executado de forma assíncrona
defer| defer | Especifica quando o script é para ser carregado
src| URL | Especifica onde se encontra o arquivo externo que contém o script em javascript para ser carregado com a página.
type| scripttype | Define o tipo de Script a ser utilizado (no HTML5 não é necessário informar, ele executa automáticamente o script em javascript).


--------------------

#####\<noscript>

Esta tag é utilizada quando o usuário desabilita o script da página ou o navegador não tem suporte para scripts.
<br>
Exemplo:
```
...
<script>
document.write("Hello World!")
</script>
<noscript>Your browser does not support JavaScript!</noscript>
...

```

--------------------

#####\<body>

Inicia o corpo do documento, tudo oque a página mostrar no navegador está presente dentro do body.
<br>
Exemplo:
```

<!DOCTYPE html>  
<html>  
    <head>
   <!-- Cabeça -->
   </head>
   <body>
   <!-- Corpo -->
   </body>
</html>
```
-------------------

#####\<a>

Define um hiperlink
<br>
Exemplo:
```
....

<a href="https://www.google.com.br">Texto renderizado para enviar ao link</a>

....
```
Atributo | Descrição| Valor
---------|----------| ------
dowload  | Especifica qual o arquivo a ser feito o download quando clicado no link | arquivo 
href  | Especifica o link para redirecionar quando clicado no link | www.google.com.br
hreflang  | especifica a lingua da página para poder ser trocada | pt-br
ping  |  especifica para quais links enviar um tracker | lista_de_url
target  | Especifica quando é para abrir o documento linkado |<br>_blank<br>_parent<br>_self<br>_top
type  | especifica que tipo de arquivo está endereçado | tipo_de_arquivo

--------------------

#####\<abbr>

Define uma abreviação
<br>
Exemplo:
```
....

The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.

....
```
Atributo | Descrição| Valor
---------|----------| ------
title  | define oque está sendo abreviado | World Health Organization

--------------------

#####\<address>

formata o texto como endereço
<br>
Exemplo:
```
....

<address>
Written by <a href="mailto:webmaster@example.com">Jon Doe</a>.<br>
Visit us at:<br>
Example.com<br>
Box 564, Disneyland<br>
USA
</address>

....
```

--------------------

#####\<area>

Cria uma area clicável para redirecionar a outro lugar
<br>
Exemplo:
```
....

<img src="workplace.jpg" alt="Workplace" usemap="#workmap" width="400" height="379">
<map name="workmap">
  <area shape="rect" coords="34,44,270,350" alt="Computer" href="computer.htm">
  <area shape="rect" coords="290,172,333,250" alt="Phone" href="phone.htm">
  <area shape="circle" coords="337,300,44" alt="Cup of coffee" href="coffee.htm">
</map>

....
```
Atributo | Descrição| Valor
---------|----------| ------
shape  | define a forma do corpo da area | circle
coords  | define as coordenadas da area | 337,300,44
alt  | texto falando sobre a area | celular
href  | link de redirecionamento | www.google.com.br

--------------------

#####\<aside>

Cria um bloco que é utilizado para tangenciar outros blocos html.
<br>
Exemplo:
```
....



....
```

#####\<base>

Define uma base de link para todos os links do site
<br>
Exemplo:
```
....

<base href="https://www.w3schools.com/" target="_blank">

....
```
Atributo | Descrição| Valor
---------|----------| ------
href  | link | https://www.w3schools.com/
target | forma de hiperlinks para o target | _blank<br>_parent<br>_self<br>_top
--------------------

#####\<b>

Formata o texto em negrito
<br>
Exemplo:
```
....

<b>Texto renderizado</b>

....
```

--------------------
#####\<dir>

Define a direção do texto dentro do elemento 
<br>
Exemplo:
```
....

<bdo dir="rtl">
This text will go right-to-left.
</bdo>

....
```
Atributo | Descrição| Valor
---------|----------| ------
dir  | direção do texto | rtl<br>ltr

--------------------

#####\<blockquote>

Cria uma citação
<br>
Exemplo:
```
....

<blockquote cite="http://www.worldwildlife.org/who/index.html">
For 50 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.
</blockquote>

....
```

--------------------

#####\<br>

Define uma quebra de linha
<br>
Exemplo:
```
....
<div>
Texto renderizado 1
<br>
Texto renderizado 2
</div>
....
```

--------------------

#####\<button>

Cria um botão
<br>
Exemplo:
```
....

<button> Enviar </button>

....
```
Atributo | Descrição| Valor
---------|----------| ------
type  | Tipo de botão | button<br>reset<br>submit
disable | desabilita o botão | disabled
name | nome do botão | botaodeenviar
value | define o valor do botão | enviar
formmethod | especifica o método de envio de formulário | GET<br>POST
--------------------

#####\<caption>

Define o titulo de uma tabela
<br>
Exemplo:
```
....

<table>
  <caption>Monthly savings</caption>
  <tr>
    <th>Month</th>
    <th>Savings</th>
  </tr>
  <tr>
    <td>January</td>
    <td>$100</td>
  </tr>
</table>

....
```

--------------------

#####\<cite>

cria uma citação
<br>
Exemplo:
```
....

<p><cite>The Scream</cite> by Edward Munch. Painted in 1893.</p>

....
```
--------------------

#####\<code>

Indica que o texto é um fragmento de código.
<br>
Exemplo:
```
....

<p>The HTML <code>button</code> tag defines a clickable button.</p>

....
```

--------------------

#####\<colgroup> e \<cool>

Especifica as propridades das colunas da tabela onde o colgroup é responsável pelo grupo de colunas e o col é a subdivisão do grupo de colunas
<br>
Exemplo:
```
....

<table>
  <colgroup>
    <col span="2" style="background-color:red">
    <col style="background-color:yellow">
  </colgroup>
  <tr>
    <th>ISBN</th>
    <th>Title</th>
    <th>Price</th>
  </tr>
  <tr>
    <td>3476896</td>
    <td>My first HTML</td>
    <td>$53</td>
  </tr>
</table>

....
```
Atributo | Descrição| Valor
---------|----------| ------
span  | Diz qual o numero de colunas que vao ter esta formatação | "2"
style  | estilização da coluna| background-color:green


--------------------

#####\<canvas>

Ferramenta de criação gráfica gerada por script (Geralmente Javascript)
<br>
Exemplo:
```
....

<canvas id="myCanvas">
Your browser does not support the canvas tag.
</canvas>

<script>
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF0000";
ctx.fillRect(0, 0, 80, 80);
</script>

....
```

--------------------

#####\<dd>, \<dt>, \<dl>, \<dfn>


A tag ***\<dl>*** é um elemento de definição
A tag ***\<dfn>*** Define um termo de definição
A tag ***\<dt>*** Define um termo de definição
A tag ***\<dd>*** Define uma descrição de definição.
<br>
Exemplo:
```
....

<dl>
  <dt>Coffee</dt>
  <dd>Black hot drink</dd>
  <dt>Milk</dt>
  <dd>White cold drink</dd>
</dl>

....
```


--------------------

#####\<div>

Cria uma divisão do conteúdo da página
<br>
Exemplo:
```
....

<html>
<head>
<style>
.myDiv {
  border: 5px outset red;
  background-color: lightblue;
  text-align: center;
}
</style>
</head>
<body>

<div class="myDiv">
  <h2>This is a heading in a div element</h2>
  <p>This is some text in a div element.</p>
</div>

</body>
</html>

....
```

--------------------


#####\<em>

Define um texto em ênfase
<br>
Exemplo:
```
....

<p>You <em>have</em> to hurry up!</p>

....
```
Atributo | Descrição| Valor
---------|----------| ------
atributo  | descreve | valor

--------------------

#####\<hr>

Define uma linha de quebra de paragrafo
<br>
Exemplo:
```
....

<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>   
        <p> olá</p>
        <hr>
        <p> olá</p>
    </body>
</html>

....
```

--------------------

#####\<h1>, \<h2>, \<h3>, \<h4>, \<h5> e \<h6>

São tags de formatação de títulos de textos.
<br>
Exemplo:
```
....

<!DOCTYPE html>
<html>
    <head> 
    </head>
    <body>   
        <h1>olá</h1>
        <h2>olá</h2>
        <h3>olá</h3>
        <h4>olá</h4>
        <h5>olá</h5>
        <h6>olá</h6>
    </body>
</html>

....
```

--------------------

#####\<form>

Abre um form
<br>
Exemplo:
```
....

<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>   
        <form method="GET">
            <input type="email" placeholder="Email">
            <input type="password" placeholder="Password">
            <input type="submit" value="Send">
        </form>
    </body>
</html>

....
```
Atributo | Descrição| Valor
---------|----------| ------
method  | descreve o método de envio dos dados de formulário | GET<br>POST<br>
action | página de envio do formulário | /config/auth.php

--------------------


#####\<footer>

Cria um rodapé da página
<br>
Exemplo:
```
....

<footer>
  <p>Author: Hege Refsnes</p>
  <p><a href="mailto:hege@example.com">hege@example.com</a></p>
</footer>

....
```

--------------------

#####\<label>

Cria um elemento descritivo para um elemento Input
<br>
Exemplo:
```
....

<form action="/action_page.php" id="orientacao">
  <label for="male">Male</label>
  <input type="radio" name="gender" id="male" value="male"><br>
  <label for="female">Female</label>
  <input type="radio" name="gender" id="female" value="female"><br>
  <label for="other">Other</label>
  <input type="radio" name="gender" id="other" value="other"><br><br>
  <input type="submit" value="Submit">
</form>

....
```
Atributo | Descrição| Valor
---------|----------| ------
for  | especifica o id do elemento referido | "male"
form | especifica o id do form| "orientacao"

--------------------

#####\<img>

Insere uma imagem
<br>
Exemplo:
```
....

<img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600">

....
```
Atributo | Descrição| Valor
---------|----------| ------
src  | url da imagem | img_gitl.jpg
alt | Descreve a imagem | "Girl in a jacket"
width | define a largura da imagem | "500"
height | define a altura da imagem | "600"
srcset | Define diferentes urls de imagens para diferentes situações| lista de urls
sizes | especifica tamanhos diferentes para diferentes layouts de páginas | tamanhos

--------------------

#####\<input>

Cria um elemento de entrada
<br>
Exemplo:
```
....

<form action="/action_page.php">
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"><br><br>
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname"><br><br>
  <input type="submit" value="Submit">
</form>

....
```
Atributo | Descrição| Valor
:---------: | :----------:| :------:
type  | Tipo de entrada | button<br>checkbox<br>color<br>date<br>datetime-local<br>email<br>file<br>hidden<br>image<br>month<br>number<br>password<br>radio<br>range<br>reset<br>search<br>submit<br>tel<br>text<br>time<br>url<br>week
autocomplete | especifica se funcionará a função de autocompletar o formulário | on<br>of
placeholder | Coloca um texto descritivo dentro do input | "first name"
required | Define um preenchimento obrigatório para o envio do form | required
autofocus | Declara que quando aberto a página, o foco do cursor é neste input| autofocus
disabled | Desabilita o Input | disabled
accept | define o tipo de arquivo aceito no input | file_extension<br>audio/*<br>video/*<br>image/*<br>media_type
dirname | epecifica que direlção é para o texto ser submetido | inputname.dir
checked (para checkbox e radio)| Especifica que o input é pré selecionado| checked
form| especifica que o input é do formulário com tal ID | id_form
formmethod | Especifica que método de envio é o form | GET <br> POST
list | Define a lista de opções do menu suspenso | data_list
height| Especifica a altura do input | pixels
max | Especifica o valor máximo de um elemento input number | numero máx.
maxlenght | Define o numero máximo de caractéres dentro do input| numero
min | Define o valor minimo para um input number | número
minlenght | Define o valor mínimo de caracteres aceitos dentro do input | número
multiple | define que o input poderá ter mais de um valor| multiple
name | especifíca o nome do input para o form | texto
pattern | verifica se a expressão regular que esta definida para o elemento input é correta| regxp
readonly | Deixa o elemento input apênas como leitura | readonly
size | especifica a largura do input | numero
src | especifica a url da imagem do botão submit (apênas para o input  type="image")| URL
step | diz qual o intervalor de entrada legal do input | numero
width | Diz a lagura do input | pixels
value | especifica o valor do elemento input | texto 

--------------------
#####\<article>

é uma tag para conteúdos independentes, geralmente utilizados em fóruns, blogs e noticias.
<br>
Exemplo:
```
....

<article class="all-browsers">
  <h1>Most Popular Browsers</h1>
  <article class="browser">
    <h2>Google Chrome</h2>
    <p>Google Chrome is a web browser developed by Google, released in 2008. Chrome is the world's most popular web browser today!</p>
  </article>
  <article class="browser">
    <h2>Mozilla Firefox</h2>
    <p>Mozilla Firefox is an open-source web browser developed by Mozilla. Firefox has been the second most popular web browser since January, 2018.</p>
  </article>
  <article class="browser">
    <h2>Microsoft Edge</h2>
    <p>Microsoft Edge is a web browser developed by Microsoft, released in 2015. Microsoft Edge replaced Internet Explorer.</p>
  </article>
</article>

....
```

--------------------

#####\<audio>

Insere um audio no documento
<br>
Exemplo:
```
....
<audio controls>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
  Your browser does not support the audio tag.
</audio>


....
```
Atributo | Descrição| Valor
:---------:|:----------:|:------:
Formato de audio aceito | são os formatos deaudio aceitos | MP3<br>WAV<br>OGG
autoplay | informa para ser executado asssim que aberto o documento | autoplay
controls | Define quais controles são para aparecer| play<br>pause<br><mute>
loop | Define se é para executar em looping o audio | loop
muted | define o audio como mutado | muted
preload | diz quando o audio deve ser caregado pelo navegador | metadata<br>auto<br>none
src | Define a url do audio | URL

--------------------

#####\<bdi>

texto bidimensional, funciona como uma span tecnicamente.
<br>
Exemplo:
```
....

<ul>
  <li>User <bdi>hrefs</bdi>: 60 points</li>
  <li>User <bdi>jdoe</bdi>: 80 points</li>
  <li>User <bdi>إيان</bdi>: 90 points</li>
</ul>

....
```

--------------------

#####\<bdo>

Tag utilizada para modificar a direção do texto
<br>
Exemplo:
```
....

<bdo dir="rtl">
This text will go right-to-left.
</bdo>

....
```
Atributo | Descrição| Valor
:---------:|:----------:|:------:
dir | Define a direção de escrita do texto | ltr<br>rtl

--------------------

#####\<datalist>

Define a lista de dados de um input de lista (cada item da lista tem uma tag filha chamada option e seu respectivo value)
<br>
Exemplo:
```
....

<label for="browser">Choose your browser from the list:</label>
<input list="browsers" name="browser" id="browser">

<datalist id="browsers">
  <option value="Edge">
  <option value="Firefox">
  <option value="Chrome">
  <option value="Opera">
  <option value="Safari">
</datalist>

....
```

--------------------

#####\<details>

Tag de detalhes adicionais
<br>
Exemplo:
```
....

<details>
  <summary>Epcot Center</summary>
  <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
</details>

....
```
Atributo | Descrição| Valor
:---------:|:----------:|:------:
open  | define se o detalhe será mostrado ao usuário | open

--------------------

#####\<dialog>

Define uma caixa de dialogo ou subjanela, geralmente usado para criar popups
<br>
Exemplo:
```
....

<dialog open>This is an open dialog window</dialog>

....
```
Atributo | Descrição| Valor
:---------:|:----------:|:------:
open  | Define se a caixa de dialogo será mostrada ao usuário | open

--------------------

#####\<data>

Adiciona uma tradução legível por máquina de um determinado conteúdo.
<br>
Exemplo:
```
....

<ul>
  <li><data value="21053">Cherry Tomato</data></li>
  <li><data value="21054">Beef Tomato</data></li>
  <li><data value="21055">Snack Tomato</data></li>
</ul>

....
```
Atributo | Descrição| Valor
:---------:|:----------:|:------:
value  | especifica o valor | valor legivel pela máquina

--------------------

#####\<embed>

usada para adicionar um conteúdo externo, como uma página, uma imagem uma mídia. (Sugestivo usar as tags img iframe e video no lugar dela pelo fato de alguns navegadores não ter suporte a alguns recursos mais)
<br>
Exemplo:
```
....

<embed type="text/html" src="snippet.html" width="500" height="200">

....
```
Atributo | Descrição| Valor
:---------:|:----------:|:------:
heignt | Altura máxima do conteúdo | pixels
src | local do arquivo | URL
type| tipo de arquivo | media_type
width| largura máxima do conteúdo | pixels

--------------------

#####\<figcaption>

Define uma legenda para uma figura inserida pela tag figure
<br>
Exemplo:
```
....

<figure>
  <img src="pic_trulli.jpg" alt="Trulli" style="width:100%">
  <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>
</figure>

....
```

--------------------

#####\<fieldset>

è usada para agrupar elementos de formulários, usado para desenhar caixas ao redor dos elementos filhos.
<br>
Exemplo:
```
....

<form action="/action_page.php">
  <fieldset>
    <legend>Personalia:</legend>
    <label for="fname">First name:</label>
    <input type="text" id="fname" name="fname"><br><br>
    <label for="lname">Last name:</label>
    <input type="text" id="lname" name="lname"><br><br>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email"><br><br>
    <label for="birthday">Birthday:</label>
    <input type="date" id="birthday" name="birthday"><br><br>
    <input type="submit" value="Submit">
  </fieldset>
</form>

....
```
Atributo | Descrição| Valor
:---------:|:----------:|:------:
disabled  | desabilita o grupo de itens | disabled
form | especifica qual o form é pelo id | id_do_form
name | nome do fieldset | texto

--------------------
#####\<figure>

tag usada para conter tags sobre imagens/figuras.
<br>
Exemplo:
```
....

<figure>
  <img src="pic_trulli.jpg" alt="Trulli" style="width:100%">
  <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>
</figure>

....
```

--------------------

#####\<header>

é um container introdutório ou usado para criar cabeçalhos
<br>
Exemplo:
```
....

<article>
  <header>
    <h1>A heading here</h1>
    <p>Posted by John Doe</p>
    <p>Some additional information here</p>
  </header>
  <p>Lorem Ipsum dolor set amet....</p>
</article>

....
```

--------------------

#####\<i>

insere a formatação em itálico do texto contido dentro da tag
<br>
Exemplo:
```
....

<p><i>Lorem ipsum</i> is the most popular filler text in history.</p>

<p>The <i>RMS Titanic</i>, a luxury steamship, sank on April 15, 1912 after striking an iceberg.</p>

....
```

--------------------

#####\<iframe>

Tag usada para criar uma janela com outro documento dentro do documento atual
<br>
Exemplo:
```
....

<iframe src="https://www.w3schools.com" title="W3Schools Free Online Web Tutorials"></iframe>

....
```
Atributo | Descrição| Valor
:---------:|:----------:|:------:
allow  | define o iframe como ativo | 
allowfullscreen | define se a janela pode ser vizualizada pelo usuário em tela cheia ou não | true<br>false
allowpaymenrequest | Define se é necessário o pagamento antes de ser definido como allow | true<br>false
height | Altura da janela | pixels
loading | define quando o navegador deve carregar o iframe, se quando abrir ou em outra condição. | eager<br>lazy
name | define um nome para o iframe | texto 
sandbox | Cria algumas restrições extras do iframe |<br>allow-forms<br>allow-pointer-lock<br>allow-popups<br>allow-same-origin<br>allow-scripts<br>allow-top-navigation
src | Especifica o local do documento para ser aberto no iframe | URL
srcdoc | Define algum conteúdo html da pagina para ser mostrado no iframe | HRML_código 
width | Define a largura do iframe (tamanho quando não definido é de 300 pixels) | pixels
--------------------

#####\<ins>

Define o texto dentro dessa tag como um texto que é para ser mostrado pelo navegador (por padrão, todo o texto do documento é mostrado no navegador).
<br>
Exemplo:
```
....

<p>My favorite color is <del>blue</del> <ins>red</ins>!</p>

....
```
Atributo | Descrição| Valor
:---------:|:----------:|:------:
cite  | especifica a url do document oque explique o porque da inserção do texto | URL
datetime | Define o dia e a hora do texto inserido/modificado | YYYY-MM-DDThh:mm:ssTZD

--------------------

#####\<kbd>

Usada para definir um input de keyboards.
<br>
Exemplo:
```
....

<p>Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy text (Windows).</p>

<p>Press <kbd>Cmd</kbd> + <kbd>C</kbd> to copy text (Mac OS).</p>

....
```

--------------------

#####\<legend>

Insere uma legenda para o fieldset.
<br>
Exemplo:
```
....

<form action="/action_page.php">
  <fieldset>
    <legend>Personalia:</legend>
    <label for="fname">First name:</label>
    <input type="text" id="fname" name="fname"><br><br>
    <label for="lname">Last name:</label>
    <input type="text" id="lname" name="lname"><br><br>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email"><br><br>
    <label for="birthday">Birthday:</label>
    <input type="date" id="birthday" name="birthday"><br><br>
    <input type="submit" value="Submit">
  </fieldset>
</form>

....
```

--------------------

#####\<li>

Adicoina um item de uma lista ordenada ou desordenada
<br>
Exemplo:
```
....

<ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>

<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>

....
```
Atributo | Descrição| Valor
:---------:|:----------:|:------:
value  | Define o valor inicial de contagem (Funciona apênas com a lista ordenada) | número

--------------------

#####\<main>

A tag Main especifica o conteúdo principal do documento. Só pode existir uma tag Main em todo o documento
<br>
Exemplo:
```
....

<main>
  <h1>Most Popular Browsers</h1>
  <p>Chrome, Firefox, and Edge are the most used browsers today.</p>

  <article>
    <h2>Google Chrome</h2>
    <p>Google Chrome is a web browser developed by Google, released in 2008. Chrome is the world's most popular web browser today!</p>
  </article>

  <article>
    <h2>Mozilla Firefox</h2>
    <p>Mozilla Firefox is an open-source web browser developed by Mozilla. Firefox has been the second most popular web browser since January, 2018.</p>
  </article>

  <article>
    <h2>Microsoft Edge</h2>
    <p>Microsoft Edge is a web browser developed by Microsoft, released in 2015. Microsoft Edge replaced Internet Explorer.</p>
  </article>
</main>

....
```

--------------------

#####\<map>

Define campos dentro de algum lugar do documento para criar um evento de click no local especifico. Sempre acompanhado da tag <area>
<br>
Exemplo:
```
....

<img src="workplace.jpg" alt="Workplace" usemap="#workmap" width="400" height="379">

<map name="workmap">
  <area shape="rect" coords="34,44,270,350" alt="Computer" href="computer.htm">
  <area shape="rect" coords="290,172,333,250" alt="Phone" href="phone.htm">
  <area shape="circle" coords="337,300,44" alt="Cup of coffee" href="coffee.htm">
</map>

....
```
Atributo | Descrição| Valor
:---------:|:----------:|:------:
name  | define um nome para o map(obrigatório) | nome_do_mapa

--------------------

#####\<mark>

Insere um marcador no conteúdo dentro da tag
<br>
Exemplo:
```
....

<p>Do not forget to buy <mark>milk</mark> today.</p>

....
```

--------------------

#####\<meter>

Define um elemento de escala
<br>
Exemplo:
```
....

<label for="disk_c">Disk usage C:</label>
<meter id="disk_c" value="2" min="0" max="10">2 out of 10</meter><br>

<label for="disk_d">Disk usage D:</label>
<meter id="disk_d" value="0.6">60%</meter>

....
```
Atributo | Descrição| Valor
:---------:|:----------:|:------:
form | Especifica qual form está vinculado o meter | id_formulário
hight | Define qual valor é considerado alto | número
low | Define qual valor é considerado baixo | número
max | Define o valor máximo | número
min | Define o valor mínimo | número
optimum | Especifica o valor ideal pro medidor| número
value | Define o valor atual do marcador (Requerido) | número

--------------------

#####\<nav>

Usada para  definir um conjunto de links de navegação
<br>
Exemplo:
```
....

<nav>
  <a href="/html/">HTML</a> |
  <a href="/css/">CSS</a> |
  <a href="/js/">JavaScript</a> |
  <a href="/python/">Python</a>
</nav>

....
```

--------------------

#####\<object>

Insere um conteúdo externo foi criado com o intuito de ser criado popups a partir dessa tag
<br>
Exemplo:
```
....

<object data="snippet.html" width="500" height="200"></object>

....
```
Atributo | Descrição| Valor
:---------:|:----------:|:------:
data  | Url do objeto | URL
form | Id do formulário | id_form
height | Altura do objeto | pixels
name | Nome do objeto | texto
type | Tipo de objeto | media_type
typemustmatch | especifica quando o atributo indicado na tag e o atributo mostrado são iguais | true<br>false
usemap | Define qual o map de click está associado a este elemento | #mapname
width | Largura do objeto | pixels

--------------------

#####\<ol>

Inicia uma lista ordenada
<br>
Exemplo:
```
....

<ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>

<ol start="50">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>

....
```
Atributo | Descrição| Valor
:---------:|:----------:|:------:
reversed  | Define o ordenador como diminutivo | reversed
start | Define o numero de início da lista | número
type | Define o tipo de marcador utilizado | 1<br>A<br>a<br>I<br>i

--------------------

#####\<optgroup>

Define um grupo de elementos da tag select, separando eles por categorias
<br>
Exemplo:
```
....

<label for="cars">Choose a car:</label>
<select  name="cars" id="cars">
  <optgroup label="Swedish Cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
  </optgroup>
  <optgroup label="German Cars">
    <option value="mercedes">Mercedes</option>
    <option value="audi">Audi</option>
  </optgroup>
</select>

....
```
Atributo | Descrição| Valor
:---------:|:----------:|:------:
disabled  | desabilita a categoria/grupo | disabled
label | Define a legenda da categoria | texto

--------------------

#####\<option>

Define uma das opções dentro da lista suspensa criada pela tag do select, pode ser definida também como filho de um optgroup ou diretamente de um select. 
<br>
Exemplo:
```
....

<label for="cars">Choose a car:</label>

<select id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="opel">Opel</option>
  <option value="audi">Audi</option>
</select>

....
```
Atributo | Descrição| Valor
:---------:|:----------:|:------:
disabled  | desabilita a opção | disabled
label | Define o texto da opção | texto
selected | Define esta opão como pré selecionada | selected
value | Define o valor a ser enviado para o servidor | texto

--------------------

#####\<output>

Cria um elemento que recebe apênas a informação do sistema
<br>
Exemplo:
```
....

<form oninput="x.value=parseInt(a.value)+parseInt(b.value)">
  <input type="range" id="a" value="50">
  +<input type="number" id="b" value="25">
  =<output name="x" for="a b"></output>
</form>

....
```
Atributo | Descrição| Valor
:---------:|:----------:|:------:
for  | define a relação de um elemento para outro e calcula o resultado | id_elemento
form | Define o formulário a que está atrelado o output | id_formulário 
name | Define um nome para o elemento | nome

--------------------

#####\<p>

Cria um parágrafo.
<br>
Exemplo:
```
....

<p>This is some text in a paragraph.</p>

....
```

--------------------

#####\<param>

Define algum parâmetro para algum objeto do documento
<br>
Exemplo:
```
....

<object data="horse.wav">
  <param name="autoplay" value="true">
</object>

....
```
Atributo | Descrição| Valor
:---------:|:----------:|:------:
name  | define o nome do parametro | nome
value | define o valor do parametro | valor 

--------------------

#####\<picture>

Cria um elemento pai de alguma foto, usado para ter uma flexibilização melhor do desenvolvedor.
<br>
Exemplo:
```
....

<picture>
  <source media="(min-width:650px)" srcset="img_pink_flowers.jpg">
  <source media="(min-width:465px)" srcset="img_white_flower.jpg">
  <img src="img_orange_flowers.jpg" alt="Flowers" style="width:auto;">
</picture>

....
```

--------------------
#####\<pre>

Define um texto préformatado
<br>
Exemplo:
```
....

<div style="width:200px;overflow:auto">
<pre>This is a pre with a fixed width. It will use as much space as specified.</pre>
</div>

....
```

--------------------

#####\<progress>

Cria uma barra de progresso
<br>
Exemplo:
```
....

<label for="file">Downloading progress:</label>
<progress id="file" value="32" max="100"> 32% </progress>

....
```
Atributo | Descrição| Valor
:---------:|:----------:|:------:
max  | valor máximo da barra | número
value | Valor atual da barra | número

--------------------

#####\<q>

Define o texto dentro da tag entre aspas duplas.
<br>
Exemplo:
```
....

<p>WWF's goal is to:
<q>Build a future where people live in harmony with nature.</q>
We hope they succeed.</p>

....
```
Atributo | Descrição| Valor
:---------:|:----------:|:------:
cite  | define uma url para a citação/texto | URL

--------------------

#####\<rp> \<rt> \<ruby>

Elementos de texto ruby
<br>
Exemplo:
```
....

<ruby>
漢 <rt><rp>(</rp>ㄏㄢˋ<rp>)</rp></rt>
</ruby>

....
```

--------------------

#####\<s>

Da um taxado no texto dentro da tag
<br>
Exemplo:
```
....

<p><s>Only 50 tickets left!</s></p>
<p>SOLD OUT!</p>

....
```

--------------------
#####\<samp>

Usado em programas para informar algo que ocorreu com o programa.
<br>
Exemplo:
```
....

<p>Message from my computer:</p>

<p><samp>File not found.<br>Press F1 to continue</samp></p>
....
```

--------------------

#####\<section>

Define sessões de conteúdos diferentes dentro do documento
<br>
Exemplo:
```
....

<section>
<h2>WWF History</h2>
<p>The World Wide Fund for Nature (WWF) is an international organization working on issues regarding the conservation, research and restoration of the environment, formerly named the World Wildlife Fund. WWF was founded in 1961.</p>
</section>

<section>
<h2>WWF's Symbol</h2>
<p>The Panda has become the symbol of WWF. The well-known panda logo of WWF originated from a panda named Chi Chi that was transferred from the Beijing Zoo to the London Zoo in the same year of the establishment of WWF.</p>
</section>

....
```

--------------------

#####\<select>

Cria uma lista suspensa
<br>
Exemplo:
```
....

<a>Texto renderizado</a>

....
```
Atributo | Descrição| Valor
:---------:|:----------:|:------:
autofocus  | define o foco automático quando aberto a página | autofocus
disabled | Desabilita a tag | disabled
form | define qual form está atrelado o menu suspenso | id_form
multiple | Define que pode receber mais de um valor | multiple
name | Insere um nome para a lista suspensa | nome
required | Define a informação como obrigatória | required
size | Define o número de opções visíveis na lista suspensa | número

--------------------

#####\<small>

Define o tamanho do texto como pequeno (tam. 8)
<br>
Exemplo:
```
....

<p>This is some normal text.</p>
<p><small>This is some smaller text.</small></p>

....
```

--------------------

#####\<source>

Tag para especificar multiplas mídias de algum objeto/audio/video
<br>
Exemplo:
```
....

<audio controls>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

....
```
Atributo | Descrição| Valor
:---------:|:----------:|:------:
media  | Aceita qualquer validação de midia | media_query
sizes | Define o tamanho de cada imagem para cada layout diferente da página | 
src | Define o local do arquivo | URL
srcset | Define o local do arquivo para diferentes situações de layout de tela | URL 
type | Define o tipo de arquivo | arquivo_tipo

--------------------

#####\<span>

É um divisor/ container de linha, usado para alguma marcação a parte do texto por não interfirir como a Div interfere no posicionamento, a diferença principal é que a dvi isola seus filhos e o span não, ele consegue se manter na mesma linha.
<br>
Exemplo:
```
....

<p>My mother has <span style="color:blue">blue</span> eyes.</p>

....
```

--------------------

#####\<strong>

Define o conteúdo filho dele em negrito para dar ênfase no texto.
<br>
Exemplo:
```
....

<strong>This text is important!</strong>

....
```

--------------------

#####\<sub>

Subscreve o conteúdo filho.
<br>
Exemplo:
```
....

<p>This text contains <sub>subscript</sub> text.</p>

....
```

--------------------

#####\<summary>

Integrada com a tag details, a summary é usada para definir uma "legenda" para o conteúdo da tag details, ela cria um objeto recolhe/expande para os detalhes.
<br>
Exemplo:
```
....

<details>
  <summary>Epcot Center</summary>
  <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
</details>

....
```

--------------------

#####\<sup>

Sobrescreve o conteúdo filho
<br>
Exemplo:
```
....

<p>This text contains <sup>superscript</sup> text.</p>

....
```

--------------------

#####\<svg>

Cria um objeto de desenho livre dentro do documento.
<br>
Exemplo:
```
....

<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>

....
```

--------------------

#####\<table>

Inicia a criação de uma tabela.
<br>
Exemplo:
```
....

<table>
  <tr>
    <th>Month</th>
    <th>Savings</th>
  </tr>
  <tr>
    <td>January</td>
    <td>$100</td>
  </tr>
</table>

....
```

--------------------

#####\<tbody>

Define o corpo principal da tabela
<br>
Exemplo:
```
....

<table style="width:50%;">
  <tr>
    <th>Month</th>
    <th>Savings</th>
  </tr>
  <tbody style="vertical-align:bottom">
    <tr style="height:100px">
      <td>January</td>
      <td>$100</td>
    </tr>
    <tr style="height:100px">
      <td>February</td>
      <td>$80</td>
    </tr>
  </tbody>
</table>

....
```

--------------------

#####\<td>

Cria um ítem da tabela
<br>
Exemplo:
```
....

<table>
  <tr>
    <td>Cell A</td>
    <td>Cell B</td>
  </tr>
  <tr>
    <td>Cell C</td>
    <td>Cell D</td>
  </tr>
</table>

....
```
Atributo | Descrição| Valor
:---------:|:----------:|:------:
colspan  | número de celulas para juntar | número
headers | Especifica um ou mais cabeçalhos da célula | id_header
rowspan | define o número de células da tablea para vizualizar | número

--------------------

#####\<template>

Usada geralmente para conter algum conteúdo oculto da página.
<br>
Exemplo:
```
....

<button onclick="showContent()">Show hidden content</button>

<template>
  <h2>Flower</h2>
  <img src="img_white_flower.jpg" width="214" height="204">
</template>

<script>
function showContent() {
  var temp = document.getElementsByTagName("template")[0];
  var clon = temp.content.cloneNode(true);
  document.body.appendChild(clon);
}
</script>

....
```

--------------------

#####\<textarea>

Cria uma area de texto para digitação
<br>
Exemplo:
```
....

<label for="w3review">Review of W3Schools:</label>

<textarea id="w3review" name="w3review" rows="4" cols="50">
At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.
</textarea>

....
```
Atributo | Descrição| Valor
:---------:|:----------:|:------:
autofocus  | foca automáticamente quando carregado o site | autofocus
cols | Define o tamanho, em largura, do conteúdo visivel | número 
dirname | Define a direção do texo | textareaname.dir
disabled | Desabilita o campo de texto | disabled
form | Define o vincúlo de formulário | id_formulário 
maxlenght | Define o tamanho máximo de caracteres da area de texto | número
name | Define um nome para o campo de texto | nome
placeholder | Insere um texto exemplo dentro do campo de texto | texto
readonly | Define este campo como "somente leitura" | readonly
required | define o campo como obrigatório | required
rows | define o número de linhas visíveis dentro da area de texto | número 
wrap | Define como o texto deve ser quebrado quando enviado o formulário | hard<br>soft

--------------------

#####\<tfoot>

Define o rodapé da tabela
<br>
Exemplo:
```
....

<table>
  <thead>
    <tr>
      <th>Month</th>
      <th>Savings</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>January</td>
      <td>$100</td>
    </tr>
    <tr>
      <td>February</td>
      <td>$80</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Sum</td>
      <td>$180</td>
    </tr>
  </tfoot>
</table>

....
```

--------------------

#####\<th>

Contém os itens do cabeçalho da tabela
<br>
Exemplo:
```
....

<table>
  <tr>
    <th>Month</th>
    <th>Savings</th>
  </tr>
  <tr>
    <td>January</td>
    <td>$100</td>
  </tr>
  <tr>
    <td>February</td>
    <td>$80</td>
  </tr>
</table>

....
```

--------------------

#####\<thead>

Define o cabeçalho da tabela
<br>
Exemplo:
```
....

<table>
  <thead>
    <tr>
      <th>Month</th>
      <th>Savings</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>January</td>
      <td>$100</td>
    </tr>
    <tr>
      <td>February</td>
      <td>$80</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Sum</td>
      <td>$180</td>
    </tr>
  </tfoot>
</table>

....
```

--------------------

#####\<time> ou <\datetime>

Usada para traduzir um texto em linguagme humana para um dado computacional, pois define uma data da forma que a máquina entenda a data
<br>
Exemplo:
```
....

<p>Open from <time>10:00</time> to <time>21:00</time> every weekday.</p>

<p>I have a date on <time datetime="2008-02-14 20:00">Valentines day</time>.</p>

....
```
Atributo | Descrição| Valor
:---------:|:----------:|:------:
datetime  | prepresenta como a máquina deve entender a data | datetime

--------------------

#####\<tr>

Cria uma coluna dentro da tabela.
<br>
Exemplo:
```
....

<table style="width:100%">
  <tr>
    <th>Month</th>
    <th>Savings</th>
  </tr>
  <tr style="text-align:right">
    <td>January</td>
    <td>$100</td>
  </tr>
</table>

....
```

--------------------

#####\<track>

usado dentro da tag video ou audio, sua função é especificar onde está o subtitulo do conteúdo a ser exibido/ouvido
<br>
Exemplo:
```
....

<video width="320" height="240" controls>
  <source src="forrest_gump.mp4" type="video/mp4">
  <source src="forrest_gump.ogg" type="video/ogg">
  <track src="fgsubtitles_en.vtt" kind="subtitles" srclang="en" label="English">
  <track src="fgsubtitles_no.vtt" kind="subtitles" srclang="no" label="Norwegian">
</video>

....
```
Atributo | Descrição| Valor
:---------:|:----------:|:------:
deflaut  | Configurações padrões do usuário | deflaut
kind | define o tipo de texto é o do track|	captions<br>chapters<br>descriptions<br>metadata<br>subtitles
label | título do texto | texto
src | local do arquivo | URL
srclang | linguágem da legenda (usado quando o kind for definido como subtitles) | linguagem

--------------------

#####\<u>

Sublinha o conteúdo filho da tag
<br>
Exemplo:
```
....

<p>This is some <u>mispeled</u> text.</p>

....
```

--------------------

#####\<ul>

Cria uma lista de itens desordenados
<br>
Exemplo:
```
....

<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>

....
```

--------------------

#####\<var>

Usada para criar variáveis ou incógnitas matemáticas, ele apênas coloca o conteúdo em itálico
<br>
Exemplo:
```
....

<p>The area of a triangle is: 1/2 x <var>b</var> x <var>h</var>, where <var>b</var> is the base, and <var>h</var> is the vertical height.</p>

....
```

--------------------

#####\<video>

Cria um objeto de vídeo dentro do documento
<br>
Exemplo:
```
....

<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
  Your browser does not support the video tag.
</video>

....
```
Atributo | Descrição| Valor
:---------:|:----------:|:------:
autoplay  | Define se é para reproduzir automaticamente | autoplay
controls | Define quais controles deve ter o objeto | play<br>pause<muted>
height | Define o tamanho em altura da janela de vídeo | pixels
loop | Define se é para reproduzir novamente toda vez que ele acabar | loop
muted | Define se é para desabiliatar o audio quando iniciar a reprodução | muted
poster | Define a capa do vídeo antes de ser carregado para reproduzir ele | URL do arquivo
preload | Define se os dados do autor do vídeo são para ser carregados | auto<br>metadata<br>none
src | Define o local do arquivo de vídeo | URL
width | Define a largua da janela do objeto | pixels

--------------------

#####\<wbr>

Representa uma posição no texto onde o navegador pode, opcionalmente, quebrar uma linha.
<br>
Exemplo:
```
....

<p>To learn AJAX, you must be familiar with the XML<wbr>Http<wbr>Request Object.</p>

....
```

--------------------