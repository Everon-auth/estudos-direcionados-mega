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
            var linhas = File.ReadAllText( "teste.txt" );
            Console.WriteLine( linhas );
            Console.ReadLine();
        }
    }
}