using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bytebank {
    class Program {
        static void Main( string[] args ) {

            GerenciadorBonificacao Gerenciador = new GerenciadorBonificacao();

            Diretor Everton = new Diretor();
            Everton.Nome = "Everton Auth";
            Everton.CPF = "000.000.000-14";
            Everton.Salario = 12000;
            Everton.ValorBonificacao= 25;

            Peao Joao = new Peao();
            Joao.Nome = "Everton Auth";
            Joao.CPF = "000.000.000-14";
            Joao.Salario = 500;

            Gerenciador.Registrar( Joao );

            Gerenciador.Registrar( Everton );

            Console.WriteLine( "Valor total de Bonificação Paga: " + Gerenciador.GetTotalBonificacao() );
            Console.WriteLine();
            Console.WriteLine();
            Console.WriteLine( "Funcionário:\n Nome: " + Everton.Nome + "\n CPF: "+Everton.CPF+"\n Salário:"+Everton.Salario+"\n Bonificação mensal: "+Everton.Bonificacao() );
            Console.WriteLine();
            Console.WriteLine( "Funcionário:\n Nome: " + Joao.Nome + "\n CPF: "+Joao.CPF+"\n Salário:"+Joao.Salario+"\n Bonificação mensal: "+Joao.Bonificacao() );
            //Console.ReadLine();
        }
    }
}
