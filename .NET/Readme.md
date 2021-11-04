# . NET

 * é Case sensitive; 
 * é necessário o ponto e vírgula no final de cada linha.
 * usa pontos no lugar de vírgulas em números (sistema imperial de casas decimais)
 * as variáveis devem ser sempre tipadas.
 * Funções sempre com letra maiúscula.
 * Tem como usar dois metodos iguais, mas com parametros diferentes.
 * Herança múltipla não existe em CSharp 
 * o StackTrace me mostra qual pilha do código que eu devo seguir para encontrar o erro proposital ou não proposital. 
 * Tem como usar um erro personalizado para chamar outro erro e informar o caminho do erro.

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
                if(value <param 0)
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

## Overryde method

é usado para sobredefinir um **MÉTODO HERDADO** de uma classe, caso ele possa ser **SOBREDEFINIDA** e oque define ela poder ser substituida é o fato do método de herança seja **VIRTUAL**.

~~~~CSharp
class TestOverride
{

    public class Employee
    {
        public string Name { get; }

        // Basepay is defined as protected, so that it may be
        // accessed only by this class and derived classes.
        protected decimal _basepay;

        // Constructor to set the name and basepay values.
        public Employee(string name, decimal basepay)
        {
            Name = name;
            _basepay = basepay;
        }

        // Declared virtual so it can be overridden.
        public virtual decimal CalculatePay()
        {
            return _basepay;
        }

    }

    // Derive a new class from Employee.
    public class SalesEmployee : Employee
    {
        // New field that will affect the base pay.
        private decimal _salesbonus;

        // The constructor calls the base-class version, and
        // initializes the salesbonus field.
        public SalesEmployee(string name, decimal basepay, decimal salesbonus)
            : base(name, basepay)
        {
            _salesbonus = salesbonus;
        }

        // Override the CalculatePay method
        // to take bonus into account.
        public override decimal CalculatePay()
        {
            return _basepay + _salesbonus;
        }

    }

    static void Main()
    {
        // Create some new employees.
        var employee1 = new SalesEmployee("Alice", 1000, 500);
        var employee2 = new Employee("Bob", 1200);

        Console.WriteLine($"Employee1 {employee1.Name} earned: {employee1.CalculatePay()}");
        Console.WriteLine($"Employee2 {employee2.Name} earned: {employee2.CalculatePay()}");

    }

}
/*

    Output:
    Employee1 Alice earned: 1500
    Employee2 Bob earned: 1200

*/
~~~~

## readonly 

Cria uma variável inutável, ou seja, não tem como alterar o seu valor, apênas ler.

> OBS: Um tipo visível externamente que contém um campo somente leitura visível externamente que é um tipo de referência mutável pode ser uma vulnerabilidade de segurança e pode disparar o aviso CA2104: "Não declarar tipos de referência mutáveis somente leitura".

~~~~CSharp
public class SamplePoint
{

    public int x;
    // Initialize a readonly field
    public readonly int y = 25;
    public readonly int z;

    public SamplePoint()
    {
        // Initialize a readonly instance field
        z = 24;

    }

    public SamplePoint(int p1, int p2, int p3)
    {
        x = p1;
        y = p2;
        z = p3;

    }

    public static void Main()
    {
        SamplePoint p1 = new SamplePoint(11, 21, 32);   // OK
        Console.WriteLine($"p1: x={p1.x}, y={p1.y}, z={p1.z}");
        SamplePoint p2 = new SamplePoint();
        p2.x = 55;   // OK
        Console.WriteLine($"p2: x={p2.x}, y={p2.y}, z={p2.z}");

    }

    /*
     Output:
        p1: x=11, y=21, z=32
        p2: x=55, y=25, z=24
    */

}
~~~~

## abstract

Cria uma classe abstrata que não é diretamente instanciada.
Métodos abstratos só podem ser instanciados em classes abstratas.

~~~~CSharp
abstract class Shape
{

    public abstract int GetArea();

}

class Square : Shape
{

    private int _side;

    public Square(int n) => _side = n;

    // GetArea method is required to avoid a compile-time error.
    public override int GetArea() => _side * _side;

    static void Main()
    {
        var sq = new Square(12);
        Console.WriteLine($"Area of the square = {sq.GetArea()}");

    }

}
// Output: Area of the square = 144
~~~~

## public class

Um(a) classe/variavel/método pública pode ser acessada por qualquer escopo da aplicação, desde que a classe seja iniciada.

~~~~CSharp
abstract class Funcionario {

        public static int TotalDeFuncionarios { get; private set; }

        public string Nome { get; set; }
        public string CPF { get; set; }
        public double Salario { get; set; }
        public string Senha { get; set; }

        public Funcionario( double salario , string cpf ) {
            Console.WriteLine( "Criando Funcionario..." );

            CPF = cpf;
            Salario = salario;
            TotalDeFuncionarios++;
        }

        public virtual void AumentarSalario() {
            Console.WriteLine( "Atenção, não esquecer de sobescrevereste método" );
        }
        public virtual double GetBonificacao() {
            Console.WriteLine( "Atenção, não esquecer de sobescrevereste método" );
            return 0;
        }

        public bool Autenticar( string senha ) {
            return this.Senha == senha;
        }

    }

~~~~

## protected

um(a) classe/variavel/método protegido que pode ser acessado por qualquer classe que esteja extendendo a classe onde se situa o protected.

~~~~CSharp

~~~~

## private

um(a) classe/variavel/método privada apênas ao escopo onde foi criada, não é possível acessar ela em outro escopo sem criar uma classe que controle isso.

~~~~CSharp

 ~~~~

 ## Finally

é um bloco de código de código que sempre vai ser executado, não importa oque aconteça.

~~~~CSharp

    LeitorDeArquivo leitor = new LeitorDeArquivo( "contas.txt" ); 

        try {
    leitor. LerProximaLinha(); 
    leitor. LerProximaLinha(); 
    leitor. LerProximaLinha(); 
    leitor. LerProximaLinha(); 
    leitor. LerProximaLinha(); 
    leitor. LerProximaLinha(); 
    leitor. LerProximaLinha(); 
    leitor. LerProximaLinha(); 
    } catch( IOException ) {

        Console.WriteLine( "Excessão do tipo IOException capturada e tratada" );

    } finally {

        leitor.Fechar();

    }

 ~~~~

## internal

é uma propriedade que seta a classe como usar apênas dentro do projeto onde foi criado.

~~~~CSharp

namespace Bytebank. Sistemas {

    internal class AuthHelper {

        public bool CompararSenha( string senhaverdadeira , string senhatestada ) {
            return senhaverdadeira == senhatestada;
        }

    }

}

~~~~

## Documentando biblioteca para melhor entendimento do que faz tal função.

Cria um comentário que demonstra oque a função, classe... faz, escrito pelo desenvolvedor.

~~~~CSharp
// Resume a classes
/// <summary>
/// Comenta aqui.
/// </summary>
// Define a documentação de exessões possiveis
/// <exception cref="ArgumentException"> Excessão lançada quando um valor negativo é usado indevidamente. </exception>
// usado pra definir para que a variavel definida é usada.
/// <param name="numero"> Representa o valor da propriedade <see cref="Agencia"></param>
///
~~~~

## gerenciador de pacotes nugget

É o gerenciador de pacotes do visual studio 2019.
para encontrar ele vá em ferramentas -> Gerenciador de pacotes do NuGet

## ctor 

Snippet de criar o construtor do CSharp

## prop

Snippet de criar o get e set de algum argumento

## isNullOrEmpty

veririca se a string é nula ou vazia e retorna um booleano

~~~~CSharp

string url = null; 
Console. WriteLine( string.isNullOrEmpty(url)); 

~~~~

## indexOf 

informa o indice do termo procurado numa string

~~~~CSharp
string _URL = "https://github.com/everton-auth?tab=repositories"; 
string Argumento = "tab";
int indice = _URL. IndexOf( Argumento ); 
~~~~


## ToUpper

Deixa todas as letras da string em caixa alta

~~~~CSharp
string _URL = "https://github.com/everton-auth?tab=repositories";
_URL = _URL.ToUpper();

~~~~

## ToLower
Deixa todas as letras ada string em caixa baixa

~~~~CSharp
string _URL = "https://github.com/everton-auth?tab=repositories";
_URL = _URL.ToLower();
~~~~


## StartsWith

Verifica se a string começa com tais caracteres e retorna um booleano.

~~~~CSharp
string _URL = "https://github.com/everton-auth?tab=repositories";
_URL = _URL.StartsWith("https://github.com/")
~~~~


## EndsWith

Verifica se a string termina com tais caracteres e retorna um booleano.

~~~~CSharp
string _URL = "https://github.com/everton-auth?tab=repositories";
_URL = _URL.EndsWith("tab=repositories")
~~~~

## Contains

Verifica a string contenha o texto inserido no texto

~~~~CSharp
string _URL = "https://github.com/everton-auth?tab=repositories";
_URL = _URL.Contains("everton-auth")
~~~~


## Biblioteca RegularExpressions (Regex)

Biblioteca responsável por procurar padões dentro de uma string

~~~~CSharp
string _URL = "https://github.com/everton-auth?tab=repositories";
_URL = _URL.Contains("everton-auth")
~~~~

## isMatch

veirifica se existe o padrão em algum lugar da string e retorna um booleano;

~~~~CSharp
using System.Text.RegularExpressions;

    string padrao = "[0-9]{4}-?[0-9]{4}";

    string texto_teste = "Meu nome é Guilherme, me ligue em 4002-8922";
    Console.WriteLine(Regex.isMatch(texto_teste, padrao));
~~~~

## Match

veirifica se existe o padrão em algum lugar da string e retorna o valor;

~~~~CSharp
using System.Text.RegularExpressions;

    string padrao = "[0-9]{4,5}-?[0-9]{4}";

    string texto_teste = "Meu nome é Guilherme, me ligue em 4002-8922";
    Console.WriteLine(Regex.Match(texto_teste, padrao));
~~~~

# Desafio

## Comunicação Angular e C# (. NET Core) via socket

to do list.
 


##

~~~~CSharp

~~~~


video 12 -> classes e objetos.