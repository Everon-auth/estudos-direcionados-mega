using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using _ByteBank.Transacao;
using _01_ByteBank.Simulacao;

namespace _ByteBank {
    class Program {
        static void Main( string[] args ) {

            //InciarContas();

            CarregarContas();


            Console.ReadLine();
        }

        static void CarregarContas() {

            //using( LeitorDeArquivo leitor = new LeitorDeArquivo( "Teste.txt" ) ) {
            //    leitor.LerProximaLinha();










            //LeitorDeArquivo leitor = null;

            //try {
            //    leitor = new LeitorDeArquivo( "contas.txt" );
            //    leitor.LerProximaLinha();
            //    leitor.LerProximaLinha();
            //    leitor.LerProximaLinha();
            //    leitor.LerProximaLinha();
            //    leitor.LerProximaLinha();
            //    leitor.LerProximaLinha();
            //    leitor.LerProximaLinha();
            //    leitor.LerProximaLinha();
            //    leitor.Fechar();

            //} catch( IOException ) {
            //    Console.WriteLine( "Excessão do tipo IOException capturada e tratada" );
            //} finally {
            //    if( leitor != null ) {
            //        leitor.Fechar();
            //    }
            //}

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
