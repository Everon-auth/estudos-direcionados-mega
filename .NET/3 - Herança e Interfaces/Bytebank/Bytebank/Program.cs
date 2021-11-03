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

            UsarSistema();

            Console.ReadLine();

        }
        public static void UsarSistema() {

            SistemaInterno sistemainterno = new SistemaInterno();

            Diretor _init_diretor = new Diretor( "255.255.255-25" );
            Diretor roberta = _init_diretor;
            roberta.Nome = "Roberta";
            roberta.Senha = "123";
            roberta.AumentarSalario();

            sistemainterno.Logar( roberta , "123" );

            Console.WriteLine();

            GerenteDeConta camila = new GerenteDeConta( "326.985.628-89" );
            camila.Nome = "Camila";
            sistemainterno.Logar( camila , "abc" );


        }

        //public static void CalcularBonificacao() {
        //    GerenciadorBonificacao gerenciadorbonificacao = new GerenciadorBonificacao();

        //    Funcionario pedro = new Diretor( "000.000.005-26" );
        //}
    }

}
