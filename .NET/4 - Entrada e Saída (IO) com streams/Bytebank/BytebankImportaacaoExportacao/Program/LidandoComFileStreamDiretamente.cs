using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace BytebankImportacaoExportacao {
    partial class Program {
        static void LidandoComFilestream() {

            var enderecoContas = "C:/Compartilhamento/.NET/3 - Listas e o futuro do C#/9 - C# Entrada e saída (IO) com streams/O) com streams/contas.txt";

            using( var fluxoDoArquivo = new FileStream( enderecoContas , FileMode.OpenOrCreate ) ) {
                var buffer = new byte[ 1024 ]; // 1kb
                var numeroDeByteslidos = -1;
                while( numeroDeByteslidos == -1 ) {
                    numeroDeByteslidos = fluxoDoArquivo.Read( buffer , 0 , 1024 );
                    escreverBuffer( buffer );
                }
                fluxoDoArquivo.Close();
            }

        }
        static void escreverBuffer( byte[] buff ) {
            var utf8 = new UTF8Encoding();
            Console.Write( utf8.GetString( buff ) );

        }
    }
}
