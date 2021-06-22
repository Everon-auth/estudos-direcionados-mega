# javascript

## Oque é Javascript?

Javascript é uma linguagem de programação voltada para a interatividade do usuário com a aplicação, agindo diretamente do navegador, ou seja, no front-end. Com essa linguágem pode-se criar várias coisas para o navegador, desde animações, remover reloadings de tela, até jogos que rodam no navegador.
Javascript é uma linguágem versátil e amigável, não é dificil de se aprender por ela ser compacta e muito versátil, dando um alcance de possibilidades muito grande para o desenvolvedor que pode optar por utilizar outras funcionalidades extras da ferramenta como:
* Interfaces de programação de aplicativos no navegador (APIs) - APIs integradas em navegadores da Web, fornecendo funcionalidade como criar dinamicamente HTML e definir estilos CSS, coletar e manipular um fluxo de vídeo da webcam do usuário ou gerando gráficos 3D e amostras de áudio.
* APIs de terceiros  — Permitem que os desenvolvedores incorporem funcionalidades em seus sites de outros provedores de conteúdo, como o Twitter ou o Facebook.
* Estruturas e bibliotecas de terceiros — você pode aplicá-las ao seu HTML para permitir que você crie rapidamente sites e aplicativos.

> **Nota**:
Não é obrigatório o uso de ponto e vírgula no javascript, utilize se quiser por boas práticas de outras linguágens.

## Formas de declarar o javascript para o seu web service:

1. No HTML:

Deve-se inserir a tag de script para orientar o navegador que existe um script para essa página e então colocar todo o script da linguágem javascript dentro desta tag.

Exemplo 1:

```
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title> Aprendendo javascript</title>
        <meta charset="utf-8">
        <link rel="stylesheet" href="style.css">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>

        
        <script>
        /* Código em javascript */
        
        
        </script>
    </body>
</html>
```

Exemplo 2:

```
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title> Aprendendo javascript</title>
        <meta charset="utf-8">
        <link rel="stylesheet" href="style.css">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <script>
        /* Código em javascript */
        
        
        </script>

    </head>
    <body>
    </body>
</html>
```

>Faz diferença se eu declarar no body ou no head o meu javascript?
Faz e não faz, não é 100% das vezes que acontece mas pode ocorrer de que quando a página for carregada com o script no head, o script agir antes do HTML, já que o interpretador irá ler em sequência, então é recomendado que seja posto no body do documento para não ocorrer isto.

<hr>

## Variáveis do javascript

As variáveis do javascript não são dificeis de declarar também, a sintaxe delas é composta da segunte forma:
<br>
 ***Tipo Nome = Valor***
<br>
Onde
* Tipo: o tipo de valor a ser armazenado


Tipos | Função
:------: | :------:
var | Usado para criar uma variável global ou no escopo inteiro de uma função.
let | Usado para criar uma variável limitada ao seu escopo.
const | Usado para definir uma variável de valor fixo.

>Oque são variáveis?
São espaços na memória do computador onde você pode armazenar dados.

* Nome: o nome da variável para podermos chama-la durante o código, geralmente tem relação á sua função no script.

* valor: O valor de uma variável não precisa ser necessariamente obrigatório ser definido junto com a variável, pode ser manipulado durante o script e alterado inúmeras vezes, dependendo sua função.

>Os valores aceitos para as variáveis são:<br>
 *STRING: 'bob';<br>
 *NUMBER: 10;<br>
 *BOOLEAN: true;<br>
 *ARRAY: \[1,'Bob','Steve',10];<br>
 *OBJECT: document.querySelector('h1');
 <br>
 
 ## Inserindo comentários

Os comentários são declarados de duas formas dentro do javascript.

 >Oque são comentários?
 Os comentários são, essencialmente, pequenos trechos de texto que podem ser adicionados entre os códigos e são ignorados pelo navegador. 

 1. Em uma linha só:

 Usa-se **//** para iniciar um comentário em uma linha só, rudo oque for inserido após as duas barras, o interpretador irá ignorar, até o final da linha.

 2. Em mais de uma linha:

 Usa-se **/\*** para iniciar os comentários até ele se encontrar com a tag inversa, ou seja, **\*/** que indica para o interpretador que aqui se encerra o comentário.

 ## Operadores do Javascript

 Operadores são simbolos matemáticos, usados para resolver desde problemas matemáticos até criar funções mais avançadas em conjunto com o resto da linguágem e são divididos em várias classes de operadores.

 1. Operadores aritméticos:

 Operador| Simbolo(s) | Uso | Exemplo
 :-----: | :--------: | :-: | :-----:
 Adição|+| Usado para somar| 6+9; <br> "olá" + "mundo!";
 Subtração|-|Usado para subtrair| 9-3;
 multiplicação|*| Usado para multiplicar| 8 * 2;
 divisão|/| Usado para dividir| 9/3;
valor|=| Atribui um valor| i = 10;

 2. Operadores de comparação:

  Operador| Simbolo(s) | Uso | Exemplo
 :-----: | :--------: | :-: | :-----:
Maior que|\>| Usado para comparar se o número é maior que outro ou não| i>10
Menor que|<| Usado para comparar se o número é menor que outro ou não| i<10
Menor ou igual que|<=| Usado para comparar se o número é menor ou igual ao outro. | i<=10
Maior ou igual que|\>=|Usado para comparar se o número é maior ou igual ao outro| i>=10
Igualdade|==| usado para comparar se um valor é igual ao outro| i == 10;
Diferente|!=| usado para comparar se um valor é diferente de outro| i !=10;
Idêntico|\===| Usado para comparar se um valor é idêntico ao outro| i===10;
Não Idêntico|!==| Usado para comparar se o valor não é identico ao outro| i!==10;

3. Operadores lógicos:

Operadores lógicos são normalmente usados com boolean (logical) valores, e quando eles são, eles retornam um valor Boolean.

 Operador| Simbolo(s) | Uso | Exemplo
 :-----: | :--------: | :-: | :-----:
 E | &&| Operador lógico usado para comparar mais de um item ao mesmo tempo, dando um retorno em booleano, se as duas comparações forem verdadeiras, ele retorna como true, caso aja alguma falsa, ele retorna como false| i == 10 && j > 100;
 OU | \|\| | Operador lógico usado para comparar mais de um item ao mesmo tempo, dando um retorno em booleano, se ao menus uma das duas condições forem verdadeiras, ele retorna como true.| i == 10 \|\| j<10;
 Não | ! | Usasdo para contrariar tudo, quando todos os valores forem falsos, ele dará verdadeiro.| i!=10;

 4. Operadores de incremento e decremento:

Operadores sufixo/prefixo para incremento e sufixo/prefixo para decremento.

 Operador| Simbolo(s) | Uso | Exemplo
 :-----: | :--------: | :-: | :-----:
 Incremento|A++ ou ++A| Usado para incrementar mais um a variável.|i++;
 Decremento |A-- ou --A| Usado para decrementar mais um a variável.|i--;

##Condicionais:

São estruturas de códigos que apênas executam seu conteúdo quando sua condição estiver condizente com o requerido.

 Operador| Simbolo(s) | Uso | Exemplo
 :-----: | :--------: | :-: | :-----:
SE| if| usado para comparar algo| if(i==10);
se não| else| usado quando o se não estiver com a condição condizente| if(i==10){/* Cósido */}else{ /* Código */}
elseif