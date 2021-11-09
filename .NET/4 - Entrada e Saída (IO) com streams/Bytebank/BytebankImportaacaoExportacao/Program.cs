using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

using _ByteBank.Transacao;
using _ByteBank;
using BytebankImportacaoExportacao.Files;


namespace BytebankImportacaoExportacao {
    partial class Program {
        static void Main( string[] args ) {
            //var enderecoContas = "C:/Compartilhamento/.NET/3 - Listas e o futuro do C#/9 - C# Entrada e saída (IO) com streams/O) com streams/contas.txt";

            //using( var fluxoDeArquivo = new FileStream( enderecoContas , FileMode.OpenOrCreate ) ) {
            //    fluxoDeArquivo.Close();
            //    using( var escritor = new StreamWriter( enderecoContas ) ) {
            //        escritor.WriteLine( "254;2545;8452.86;Everton Auth" );
            //    }
            //    fluxoDeArquivo.Close();
            //    using( var leitor = new StreamReader( enderecoContas ) ) {
            //        while( !leitor.EndOfStream ) {
            //            var documento = leitor.ReadLine();
            //            var conta = ConverterStringParaContaCorrente( documento );
            //            Console.WriteLine( $" {conta.Titular.Nome}: Conta: {conta.Numero}" );
            //        }
            //        fluxoDeArquivo.Close();
            //    }}
            var documento = new FileMannage( "contatos.txt" );
            documento.write( "254;2545;8452.86;Everton Auth" );
            Console.WriteLine( documento.read().ReadToEnd() );
           // var a =ConverterStringParaContaCorrente( documento.read().ReadLine() );
           // Console.WriteLine( a.Numero );

            Console.ReadLine();
        }

        static ContaCorrente ConverterStringParaContaCorrente( string linha ) {
            string[] campos = linha.Split( ';' );
            var agencia = int.Parse( campos[ 0 ] );
            var numero = int.Parse( campos[ 1 ] );
            var saldo = double.Parse( campos[ 2 ].Replace( '.' , ',' ) );
            var nometitular = campos[ 3 ];

            var resultado = new ContaCorrente( agencia , numero );
            resultado.Saldo = saldo;
            resultado.Titular.Nome = nometitular;
            return resultado;
        }
    }
}
