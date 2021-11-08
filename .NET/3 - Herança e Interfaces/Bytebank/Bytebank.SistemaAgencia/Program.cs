using System;
using Bytebank.SistemaAgencia.Tratamentos;
using _ByteBank.Transacao;
namespace Bytebank.SistemaAgencia {
    class Program {
        static void Main( string[] args ) {

            ListaDeContas Lista = new ListaDeContas();

            ContaCorrente contaEverton = new ContaCorrente( 545 , 5254845 );

            Lista.adicionar( contaEverton );
            Lista.adicionar( new ContaCorrente( 841 , 255642645 ) );
            Lista.adicionar( new ContaCorrente( 841 , 255642645 ) );
            Lista.adicionar( new ContaCorrente( 841 , 255642645 ) );
            Lista.adicionar( new ContaCorrente( 841 , 255642645 ) );
            Lista.adicionar( new ContaCorrente( 841 , 255642645 ) );
            Lista.adicionar( new ContaCorrente( 841 , 255642645 ) );
            Lista.adicionar( new ContaCorrente( 841 , 255642645 ) );
            Lista.adicionar( new ContaCorrente( 841 , 255642645 ) );
            Lista.adicionar( new ContaCorrente( 841 , 255642645 ) );
            Lista.adicionar( new ContaCorrente( 841 , 255642645 ) );
            Lista.adicionar( new ContaCorrente( 841 , 255642645 ) );
            Lista.adicionar( new ContaCorrente( 841 , 255642645 ) );
            Lista.adicionar( new ContaCorrente( 841 , 255642645 ) );
            Lista.adicionar( new ContaCorrente( 841 , 255642645 ) );
            Lista.adicionar( new ContaCorrente( 841 , 255642645 ) );
            Lista.adicionar( new ContaCorrente( 841 , 255642645 ) );
            Lista.adicionar( new ContaCorrente( 841 , 255642645 ) );
            Lista.adicionar( new ContaCorrente( 841 , 255642645 ) );
            Lista.adicionar( new ContaCorrente( 841 , 255642645 ) );
            Lista.adicionar( new ContaCorrente( 841 , 255642645 ) );
            Lista.adicionar( new ContaCorrente( 841 , 255642645 ) );
            Lista.adicionar( new ContaCorrente( 841 , 255642645 ) );
            Lista.adicionar( new ContaCorrente( 841 , 255642645 ) );
            Lista.adicionar( new ContaCorrente( 841 , 255642645 ) );
            Lista.adicionar( new ContaCorrente( 841 , 255642645 ) );

            Lista.ExibirLista();
            Lista.Remover(contaEverton);
            Console.WriteLine( "Após Remover" );
            Lista.ExibirLista();
            Console.ReadLine();
        }



















        static void loopInfinito() {
            for( int i = 0 ; i >= -1 ; i++ ) {
                Console.WriteLine( i );
            }
            Console.ReadLine();
        }

        static void urlTestes() {
            string url = "https://github.com/everton-auth?tab=repositories";
            ExtractURLArgs extrator = new ExtractURLArgs( url );
            Console.WriteLine( extrator.GetValorDoArgumento( "tab" ) );
            Console.ReadLine();
        }
    }
}

