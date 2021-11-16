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
 * Pode existir mais de um construtor para as classes, modificando sua construção.
 * Uma classe é derivada do tipo object indiretamente.
 * Concatenação moderna de strings -> o $ e as {} são essenciais.
 * string = $"Número {Numero}, Agência {Agencia}, Saldo {Saldo}"; 
 * Crtl + . -> atalho para renomear o nome do método em todos os lugares onde está sendo usado.
 * System. IO -> Biblioteca importante do CSharp, usada para Inputs e Outputs. 
 * \n Significa uma quebra de linha.

comando | Objetivo
:----: | :----:
Console. WriteLine("string") | printa um valor em uma linha
Console. ReadLine() | Espera um caractere ou um enter.
(tipo_variavel) | converte o número em inteiro 
@"texto" | quebra as linhas conforme os textos; 
\n | quebra de linha em texto

tipos de variáveis/definição | objetivo
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
var | variavel sem atribuição de tipo diretamente, pelo seu valor inserido após a declaração, ela define o tipo.
partial | Define que a classe continua neste arquivo.
decimal | Define o valor como decimal. (Necessita de uma letra no final do número -> 19.99m)

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

## Override method

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
_URL = _URL. ToUpper(); 

~~~~

## ToLower

Deixa todas as letras ada string em caixa baixa

~~~~CSharp
string _URL = "https://github.com/everton-auth?tab=repositories"; 
_URL = _URL. ToLower(); 
~~~~

## StartsWith

Verifica se a string começa com tais caracteres e retorna um booleano.

~~~~CSharp
string _URL = "https://github.com/everton-auth?tab=repositories"; 
_URL = _URL. StartsWith("https://github.com/")
~~~~

## EndsWith

Verifica se a string termina com tais caracteres e retorna um booleano.

~~~~CSharp
string _URL = "https://github.com/everton-auth?tab=repositories"; 
_URL = _URL. EndsWith("tab=repositories")
~~~~

## Contains

Verifica a string contenha o texto inserido no texto

~~~~CSharp
string _URL = "https://github.com/everton-auth?tab=repositories"; 
_URL = _URL. Contains("everton-auth")
~~~~

## Biblioteca RegularExpressions (Regex)

Biblioteca responsável por procurar padões dentro de uma string

~~~~CSharp
string _URL = "https://github.com/everton-auth?tab=repositories"; 
_URL = _URL. Contains("everton-auth")
~~~~

## isMatch

veirifica se existe o padrão em algum lugar da string e retorna um booleano; 

~~~~CSharp
using System. Text. RegularExpressions; 

    string padrao = "[0-9]{4}-?[0-9]{4}";

    string texto_teste = "Meu nome é Guilherme, me ligue em 4002-8922";
    Console.WriteLine(Regex.isMatch(texto_teste, padrao));

~~~~

## Match

veirifica se existe o padrão em algum lugar da string e retorna o valor; 

~~~~CSharp
using System. Text. RegularExpressions; 

    string padrao = "[0-9]{4,5}-?[0-9]{4}";

    string texto_teste = "Meu nome é Guilherme, me ligue em 4002-8922";
    Console.WriteLine(Regex.Match(texto_teste, padrao));

~~~~

## DateTime

É a classe responsável por controlar a data e a hora, suas transformações e capturar a data e hora.

~~~~CSharp

DateTime dataFimPagamento = new DateTime( 2018 , 6 , 30 ); 
DateTime dataCorrente = DateTime. Now; 

~~~~

## ToString

Converte um valor em string

~~~~CSharp

    int numero = 22; 
    numero. ToString(); 

~~~~

## Equals

compara algo para ver se são iguais e retorna um booleano.

~~~~CSharp

    string s1 = "ProGeek 2.0";
    string s2 = "ProGeek 2.0";
    Console.WriteLine(s1.Equals(s2));

~~~~

## Criando Arrays

para criar um Array, deve se atribuir os colchetes com o tipo da variavel e iniciar a variavel como um array do tipo da variavel e o seu tamanho máximo.

~~~~CSharp

    int[] idade = new int[ 20 ]; 

~~~~

## Formas de inicializar um array

~~~~CSharp
// Primeira forma
ContaCorrente[] contas = new ContaCorrente[]{

    new ContaCorrente(874, 5464524),
    new ContaCorrente(874, 5465464),
    new ContaCorrente(874, 5646454),
    new ContaCorrente(874, 3546854),

}
// Segunda forma
ContaCorrente[] contas = new ContaCorrente[24]; 

~~~~

## Definindo valor padrão para um método ou classe

~~~~CSharp

public ListaDeContas(int capacidadeincial = 5) {

    _itens = new ContaCorrente[ capacidadeincial ];

}
~~~~ 

## passando apenas um argumento para a classe ou método

~~~~CSharp

Lista. MeuMetodo(numero:10); 

// o método meuMetodo que tem a sobrecarga numero, ele tem outro parametro mas quando chamamos dessa forma acima, ele apenas seta o número necessitado pelo método.
~~~~

## break

Quebra o fluxo de execussão onde foi instanciado.

~~~~CSharp
if(itemAtual. Equals(item)){

    indiceItem = i;
    break;

}
~~~~

## Get diferente 

Define a usabilidade da classe como a usabilidade de um array, podendo ser usado o mesmo método de acesso da classe de Arrays

~~~~CSharp

    public ContaCorrente this[int indice] {
        get {
            return GetItemNoIndice( indice ); 
        }

    }

~~~~

## params

Define o método com vários argumentos do mesmo tipo

~~~~CSharp

    public void AdicionarVarios( params object[] itens ) {
        foreach( object conta in itens ) {
            adicionar( conta ); 
        }

    }

~~~~

## Tipo de classe genérica

~~~~CSharp

class Lista<Tipo>{ // por Convenção usa-se o T no lugar do Tipo  

    private ContaCorrente _itens;
    private int _proximaPosicao;

    public Lista( int capacidadeInicial = 5 ) {
        _itens = new Tipo[ capacidadeInicial ]; // usa o tipo definido na instancia da classe
        _proximaPosicao = 0; 

    }

} 

class Program {

    static void Main( string[] args ) {
        Lista<int> ListaGen = new Lista<int>; 
        Console.ReadLine(); 

    }

}

~~~~

## Sort

usado para reordenar os itens de uma lista

> Existem Interfeces para comprar objetos, são aplicadas para criar uma logica personalizada de reordenação da tabela. (IComparable, IComparer)

~~~~CSharp

List<int> idades = new List<int>(); 

idades. Add(15); 
idades. Add(5415); 
idades. Add(541); 
idades. Add(54656); 
idades. Add(5657); 
idades. Add(54165); 
idades. Add(653); 

idades. Sort(); 

foreach(int item in idades){

    Console.Writeline(item);

}
~~~~

## CompareTo

Compara os valores das duas memórias/variaveis definidas

~~~~CSharp

string a = "olá"; 
string b = "olha"; 

a. CompareTo(b); 

~~~~

## OrderBy

Usado para reordenar listas, retornando o valor reordenado.

~~~~CSharp
IOrderedEnumerable<ContaCorrente> contasOrdenadas =
contas. OrderBy(conta => conta. Numero); 
~~~~

## Expressão Lambda

A expressão lambda diminui o tamanho da expressão da função, elas se comportam como atalhos para definir a expressão.

~~~~CSharp
// conta => conta. Numero
contas. OrderBy(conta => conta. Numero)
~~~~

## 

~~~~CSharp

~~~~

## Entity Framework

Framework que substitui o uso do ADO. NET, dominuindo o tamanho de código.

Crud com Entity:
~~~~CSharp
using System; 
using System. Collections. Generic; 
using System. Linq; 
using System. Text; 
using System. Threading. Tasks; 
using Microsoft. EntityFrameworkCore; 

using ConsoleApp. Recipes; 

namespace ConsoleApp. Recipes {

    class Produto {
        public int Id { get; internal set; }
        public string Nome { get; internal set; }
        public string Categoria { get; internal set; }
        public double Preco { get; internal set; }

    }

}

namespace ConsoleApp. Contexts {

    class LojaContext : DbContext {
        public DbSet<Produto> Produtos { get; set; }

        protected override void OnConfiguring( DbContextOptionsBuilder optionsBuilder ) {
            if( !optionsBuilder. IsConfigured ) {
                optionsBuilder. UseSqlServer( "Server=(localdb)\\mssqllocaldb; Database=LojaDB; Trusted_Connection=true; " ); 
            }
        }

    }

}

namespace ConsoleApp. Interfaces {

    interface IProdutoDAO<T> {
        void Adicionar( T p ); 
        void Remover( T p ); 
        void Atualizar( T p ); 
        Produto Recuperar( T p ); 

    }

}

namespace ConsoleApp. Contexts {

    class ProdutoDAOEntity : IProdutoDAO<Produto> {
        public void Adicionar( Produto p ) {
            using( var Contexto = new LojaContext() ) {
                Contexto.Add( p );
                Contexto.SaveChanges();
            }
        }

        public void AdicionarConsole() {
            Produto p = new Produto();
            Console.WriteLine( "Digite o nome do produto" );
            p.Nome = Console.ReadLine();
            Console.WriteLine( "Digite a categoria do produto" );
            p.Categoria = Console.ReadLine();
            Console.WriteLine( "Digite o preço do produto" );
            p.Preco = float.Parse( Console.ReadLine() );
            try {

                using( var Contexto = new LojaContext() ) {
                    Contexto.Add( p );
                    Contexto.SaveChanges();
                }
            } catch( Exception e ) {
                Console.WriteLine( $"Erro: {e.Message}" );
            }
        }

        public void Atualizar( Produto p ) {
            try {

                using( var Contexto = new LojaContext() ) {
                    Contexto.Produtos.Update( Contexto.Produtos.Find( p.Id ) );
                    Contexto.SaveChanges();
                }
            } catch( Exception e ) {
                Console.WriteLine( $"Erro: {e.Message}" );
            }
        }

        public Produto Recuperar( Produto p ) {
            try {
                using( var Contexto = new LojaContext() ) {
                    Produto db_archive = Contexto.Produtos.Find( p.Id );
                    return db_archive;
                }
            } catch( Exception e ) {
                Console.WriteLine( $"Erro: {e.Message}" );
                return null;
            }
        }

        public void Remover( Produto p ) {
            try {
                using( var Context = new LojaContext() ) {
                    Context. Produtos. Remove( p ); 
                    Context. SaveChanges(); 
                    Console. WriteLine( "Produto removido com sucesso!" ); 
                }
            } catch( Exception e ) {
                Console. WriteLine( $"Erro: {e. Message}" ); 
            }
        }

    }

}
~~~~

## Classes úteis

## ModelBuilder

Classe gerenciadora de classes.

### Classe List

Classe genérica de criar e gerenciar listas no DotNet Framework

### UTF8Encoding

classe responsável por métodos de conversão de bytes em outros formatos.

### FileStream

Classe responsável por manipulação de arquivos.

### StreamReader

Classe responsável por ler arquivos sem se preocupar com as bytes necessárias do buffer.

### StreamWrite

Classe responsável por escrever em arquivos sem se preocupar com as bytes necessárias do buffer.

> Flush dessa classe libera o buffer e escreve imediatamente no arquivo

### Classe File

Classe auxiliar para trabalhar com arquivos.

# Desafio

## Comunicação Angular e C# (. NET Core) via socket

to do list.
 

## DotNetCore -> Criando aplicação

pelo prompt de comando, navegar até uma pasta vazia determinada para o projeto, e dar o comando -> dotnet new (Tipo de aplicação.)

> C:/Users/everton.auth/Workstation/estudos-direcionados-mega/. NET/web>dotnet new web

(Trocar as "/" -> "\\\")

## DotnetCore -> Rodando a aplicação

pelo cmd, acessar a pasta raiz onde foi criado o projeto e executar o comando -> dotnet run
