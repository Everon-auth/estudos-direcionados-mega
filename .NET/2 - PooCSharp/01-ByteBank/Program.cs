using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _ByteBank {
    class Program {
        static void Main( string[] args ) {
            ContaCorrente contaGabriela = new ContaCorrente(187,35415514);
            ContaCorrente contaGab = new ContaCorrente(187, 35415515 );

            contaGabriela.Titular.CPF = "000.000.000-20";
            contaGabriela.Titular.Profissao = "TI - Tristeza e Insegurança";
            //contaGabriela.Agencia = 187;
            //contaGabriela.Numero = 35415514;
            contaGabriela.Saldo = 12000;

            contaGab.Titular.Nome = "Gabriel";
            contaGab.Titular.CPF = "000.000.000-21";
            contaGab.Titular.Profissao = "IT - A Coisa";
            //contaGab.Agencia = 187;
            //contaGab.Numero = 35415515;
            contaGab.Saldo = 150;   


            Console.WriteLine( "Saldo atual: R$" + contaGabriela.Saldo );
            contaGabriela.Sacar( 10000 );
            contaGabriela.Depositar( 250 );
            contaGabriela.transferir( 300 , contaGab );

            Console.WriteLine( "Dados do Cliente: \n Nome: " + contaGabriela.Titular.Nome + "\n CPF: " + contaGabriela.Titular.CPF + "\n Profissão: " + contaGabriela.Titular.Profissao );
            Console.WriteLine("");
            Console.WriteLine("Total de contas criadas: "+ ContaCorrente.TotalContasCriadas);
            Console.ReadLine();
        }
    }
}
