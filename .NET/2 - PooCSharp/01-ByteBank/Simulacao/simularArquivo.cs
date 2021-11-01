using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.IO;
using System.Threading.Tasks;

namespace _01_ByteBank.Simulacao {
    class LeitorDeArquivo : IDisposable{

        public string Arquivo { get; }

        public LeitorDeArquivo( string arquivo ) {
            Arquivo = arquivo;

            throw new FileNotFoundException();

            Console.WriteLine( "Abrindo arquivo: " + arquivo );
        }
        public string LerProximaLinha() {
            Console.WriteLine( "Lendo linha..." );
            return "Linha do Arquivo";

            throw new IOException();
        }
        public void Dispose() {
            Console.WriteLine( "Fechando arquivo" );

        }
    }
}
