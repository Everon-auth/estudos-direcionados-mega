using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using _ByteBank.Transacao;

namespace _ByteBank {
    class Program {
        static void Main( string[] args ) {

            InciarContas();




            Console.ReadLine();
        }



        static void InciarContas() {

            ContaCorrente contaGabriela = new ContaCorrente( 187 , 35415514 );
            ContaCorrente contaGab = new ContaCorrente( 187 , 35415515 );

            contaGabriela.Titular.Nome = "Gabriela";
            contaGabriela.Titular.CPF = "000.000.000-20";
            contaGabriela.Titular.Profissao = "TI - Tristeza e Insegurança";
            contaGabriela.Agencia = -1;
            contaGabriela.Saldo = 100;
            contaGabriela.transferir( 250 , contaGab );



            contaGabriela.dividir( 42 , 2 );
            contaGabriela.dividir( 1 , 0 );

            contaGab.Titular.Nome = "Gabriel";
            contaGab.Titular.CPF = "000.000.000-21";
            contaGab.Titular.Profissao = "IT - A Coisa";
            contaGab.Agencia = 187;
            contaGab.Saldo = 150;

        }
    }
}
