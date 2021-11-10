using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace BytebankImportacaoExportacao.Files {
    class FileMannage {
        private string Endereco { get; set; }

        private FileStream FluxoArquivo;
        private StreamWriter Escritor;
        private StreamReader Leitor;

        public FileMannage( string end ) {
            Endereco = end;
        }

        public string Read() {
            string documento = "";
            using( FluxoArquivo = new FileStream( Endereco , FileMode.OpenOrCreate ) ) {
            close( FluxoArquivo );
            close( Escritor );
                using( Leitor = new StreamReader( Endereco ) ) {
                    while( !Leitor.EndOfStream ) {
                        var linha = Leitor.ReadLine();
                        documento += linha;
                    }
                }

            }
            return documento;
        }


        public void Write( string value ) {
            using( FluxoArquivo = new FileStream( Endereco , FileMode.OpenOrCreate ) ) {
                Console.WriteLine( "Escrito mais uma linha" );
                using( Escritor = new StreamWriter( FluxoArquivo , Encoding.UTF8 ) ) {
                    Escritor.WriteLine( value );
                    Escritor.Flush();
                }
            }
        }
        public void close( FileStream fs ) { if( fs != null ) fs.Close(); }
        public void close( StreamWriter escritor ) { if( escritor != null ) escritor.Close(); }
        public void close( StreamReader leitor ) { if( leitor != null ) leitor.Close(); }
    }
}
