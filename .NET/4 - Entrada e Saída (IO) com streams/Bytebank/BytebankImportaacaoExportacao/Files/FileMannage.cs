using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace BytebankImportacaoExportacao.Files {
    class FileMannage {
        private string endereco { get; set; }

        private FileStream FluxoArquivo;

        public FileMannage( string end ) {
            endereco = end;
            FluxoArquivo = new FileStream( endereco , FileMode.OpenOrCreate );
        }

        public StreamReader read() {
            return new StreamReader( FluxoArquivo );
        }

        public void write( string value ) {
            new StreamWriter(FluxoArquivo).WriteLine(value);

        }
    }
}
