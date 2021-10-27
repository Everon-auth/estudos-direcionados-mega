using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _4_ConversaoDeNumeros
{
    class Program
    {
        static void Main(string[] args)
        {
            double salario = 1200.50;

            int salarioEmInteiro = (int)salario;

            Console.WriteLine("salário em Interio: R$" + salarioEmInteiro);



            Console.ReadLine();
        }
    }
}
