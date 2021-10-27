using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _7_Condições
{
    class Program
    {
        static void Main(string[] args)
        {
            /*
            int idadeJoao = 16;

            if(idadeJoao >= 18){
                Console.WriteLine("João tem 18 anos ou mais!");
            }
            else{
                Console.WriteLine("João é menor de 18 anos");
            }
            Console.ReadLine();
            */

            int contadorMes = 1;
            double valorInvestido = 1000;

            while(contadorMes <= 12)
            {
                valorInvestido = valorInvestido + valorInvestido * 0.0036;
                Console.WriteLine(valorInvestido);

                contadorMes++;
            }

            Console.ReadLine();
        }
    }
}
