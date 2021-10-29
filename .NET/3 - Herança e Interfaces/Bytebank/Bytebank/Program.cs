using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Bytebank.Sistemas;
using Bytebank.Funcionarios;

namespace Bytebank {
    class Program {
        static void Main( string[] args ) {

            usarSistema();


            Console.ReadLine();
        }
        public static void usarSistema() {

            SistemaInterno sistemainterno = new SistemaInterno();

            Diretor roberta = new Diretor( "255.255.255-25" );
            roberta.Nome = "Roberta";
            roberta.Senha = "123";

            sistemainterno.Logar( roberta , "123" );

            Console.WriteLine();

            GerenteDeConta camila = new GerenteDeConta( "326.985.628-89" );
            camila.Nome = "Camila";
            sistemainterno.Logar( camila , "abc" );


        }

        public static void CalcularBonificacao() {
            GerenciadorBonificacao gerenciadorbonificacao = new GerenciadorBonificacao();

            Funcionario pedro = new Diretor( "000.000.005-26" );
        }
    }

}
