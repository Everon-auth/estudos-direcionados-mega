using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _5_CaracteresTextos
{
    class Program
    {
        static void Main(string[] args)
        {
            char primeiraLetra = 'a';
            Console.WriteLine(primeiraLetra);

            primeiraLetra = (char)65;
            Console.WriteLine(primeiraLetra);

            primeiraLetra = (char)(primeiraLetra + 1);

            Console.WriteLine(primeiraLetra);

            string titulo = "Alura Cursos de tecnologia "+ 2021;
            Console.WriteLine(titulo);


            string cursosProgramacao = " - .NET \n - Java \n - Javascript";
            Console.WriteLine(cursosProgramacao);



            string cursosProgramacao2 = @" - .NET
- Java  
- Javascript";
            Console.WriteLine(cursosProgramacao2);



            Console.WriteLine("Execução terminada. Tecle enter para sair...");
            Console.ReadLine();
        }
    }
}
