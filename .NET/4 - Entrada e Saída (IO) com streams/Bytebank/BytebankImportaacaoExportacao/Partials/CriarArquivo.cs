using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using _ByteBank.Transacao;
using _ByteBank;

namespace BytebankImportacaoExportacao {
    partial class Program {
        static void CriarArquivo() {
            var caminho = "ContasExportadas.csv";

            using( var fluxo = new FileStream( caminho , FileMode.OpenOrCreate ) ) {
                var conta = "456.78945.4785.50,Gustavo Santaola";
                var encoding = Encoding.UTF8;
                var bytes = encoding.GetBytes( conta );
                fluxo.Write( bytes , 0 , bytes.Length );
            }
        }

        static void CriarArquivoStreamer() {
            var caminho = "ContasExportadas.csv";
            using( var fluxo = new FileStream( caminho , FileMode.OpenOrCreate ) ) {
                using( var escritor = new StreamWriter( fluxo , Encoding.UTF8 ) ) {
                    var conta = "456.78945.4785.50,João da Silva Sauro Moura de Lurdes";
                    escritor.Write( conta , Encoding.UTF8 );
                }
            }
        }

        static void Teste() {
            var caminho = "teste.txt";
            using( var fluxo = new FileStream( caminho , FileMode.OpenOrCreate ) ) {
                using( var escritor = new StreamWriter( fluxo , Encoding.UTF8 ) ) {
                    for( int i = 0 ; i < 1000000 ; i++ ) {
                        escritor.WriteLine( $"Linha {i}" );
                        escritor.Flush();
                        Console.WriteLine( $"Linha {i} foi escrita" );
                        Console.ReadLine();
                    }
                }
            }
        }
    }
}