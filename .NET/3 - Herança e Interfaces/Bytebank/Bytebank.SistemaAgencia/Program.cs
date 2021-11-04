using System;

namespace Bytebank.SistemaAgencia {
    class Program {
        static void Main( string[] args ) {
            string url = "https://github.com/everton-auth?tab=repositories";
            ExtractURLArgs extrator = new ExtractURLArgs( url );
            Console.WriteLine( extrator.GetValorDoArgumento( "tab" ) );

            Console.ReadLine();
        }
    }

}


//DateTime dataFimPagamento = new DateTime( 2018 , 6 , 30 );
//DateTime dataCorrente = DateTime.Now;

//TimeSpan diferenca = dataFimPagamento - dataCorrente;

//string mensagem = "Vencimento em " + TimeSpanHumanizeExtensions.Humanize( diferenca );

//Console.WriteLine( mensagem );