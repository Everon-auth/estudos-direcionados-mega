using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace BytebankImportacaoExportacao {
    partial class Program {
        static void UsarStreamDeEntrada() {
            using( var fluxo = Console.OpenStandardInput() ) {
                using( var fs = new FileStream( "Entrada.txt" , FileMode.Create ) ) {
                    var buffer = new byte[ 1024 ];
                    while( true ) {
                        var entrada = fluxo.Read( buffer , 0 , buffer.Length );
                        fs.Write( buffer , 0 , entrada );
                        fs.Flush();
                        Console.WriteLine( $"Bytes lidos da console {entrada}" );
                    }
                }
            }
        }
    }
}