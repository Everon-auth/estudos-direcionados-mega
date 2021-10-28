# . NET

 * é Case sensitive; 
 * é necessário o ponto e vírgula no final de cada linha.
 * usa pontos no lugar de vírgulas em números (sistema imperial de casas decimais)
 * as variáveis devem ser sempre tipadas.
 * Funções sempre com letra maiúscula.
 * Tem como usar dois metodos iguais, mas com parametros diferentes.
 * 

comando | Objetivo
:----: | :----:
Console. WriteLine("string") | printa um valor em uma linha
Console. ReadLine() | Espera um caractere ou um enter.
(tipo_variavel) | converte o número em inteiro 
@"texto" | quebra as linhas conforme os textos; 
\n | quebra de linha em texto

tipos de variáveis | objetivo
:----: | :----:
int | Números inteiros (32 bits)
string | textos/frases
double | números quebrados
long | Variáveis de tamanhos grandes (64 bits)
short | variavel de tamanho pequeno (16 bits)
float | Variável de números quebrados com precisão curta (poucas casas decimais) OBS: Necessíta colocar o súfixo F para identificar o float sem problemas com o visual studio
char | Variável de caractere (16 bits)
bool | variavel booleana de true ou false
static | Variavel correspondente a classe

## método GET e SET

Usados para os métodos que envolvem uma propriedade privada para recuperar os seus dados ou definir eles.

 - Construção: 
~~~~CSharp

        public double Saldo
        {
            get
            {
                return _saldo;
            }
            set
            {
                if(value < 0)
                {
                    return;
                }
                _saldo = value;
            }
        }

~~~~

* Construção Simplificada:
~~~~CSharp

        public double Saldo { get; set; }
        public int Agencia { get; set; }

~~~~
