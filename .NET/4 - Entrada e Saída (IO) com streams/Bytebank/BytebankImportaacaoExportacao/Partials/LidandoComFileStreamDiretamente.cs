using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using _ByteBank;
using _ByteBank.Transacao;
using BytebankImportacaoExportacao.Files;

namespace BytebankImportacaoExportacao {
    partial class Program {
        static void LidandoComFilestream() {

            var enderecoContas = "C:/Compartilhamento/.NET/3 - Listas e o futuro do C#/9 - C# Entrada e saída (IO) com streams/O) com streams/contas.txt";

            using( var fluxoDoArquivo = new FileStream( enderecoContas , FileMode.OpenOrCreate ) ) {
                var buffer = new byte[ 1024 ]; // 1kb
                var numeroDeByteslidos = -1;
                while( numeroDeByteslidos == -1 ) {
                    numeroDeByteslidos = fluxoDoArquivo.Read( buffer , 0 , 1024 );
                    EscreverBuffer( buffer );
                }
                fluxoDoArquivo.Close();
            }

        }
        static void EscreverBuffer( byte[] buff ) {
            var utf8 = new UTF8Encoding();
            Console.Write( utf8.GetString( buff ) );

        }
        static ContaCorrente ConverterStringParaContaCorrente( string linha ) {
            string[] campos = linha.Split( ';' );
            var agencia = int.Parse( campos[ 0 ] );
            var numero = int.Parse( campos[ 1 ] );
            var saldo = double.Parse( campos[ 2 ].Replace( '.' , ',' ) );
            var nometitular = campos[ 3 ];

            var resultado = new ContaCorrente( agencia , numero ) {
                Saldo = saldo,
                Titular = new Cliente() {
                    Nome = nometitular
                }
            };
            return resultado;
        }

        static void V1() {
            var enderecoContas = "C:/Compartilhamento/.NET/3 - Listas e o futuro do C#/9 - C# Entrada e saída (IO) com streams/O) com streams/contas.txt";
            using( var fluxoDeArquivo = new FileStream( enderecoContas , FileMode.OpenOrCreate ) ) {
                using( var leitor = new StreamReader( enderecoContas ) ) {
                    while( !leitor.EndOfStream ) {
                        var document = leitor.ReadLine();
                        var conta = ConverterStringParaContaCorrente( document );
                        Console.WriteLine( $" {conta.Titular.Nome}: Conta: {conta.Numero}" );
                    }
                    fluxoDeArquivo.Close();
                }
            }
            Console.ReadLine();
        }
    }
}
