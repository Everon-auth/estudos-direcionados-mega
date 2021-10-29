using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bytebank.Sistemas {
    class SistemaInterno {

        public bool Logar( IAutenticavel funcionario , string senha ) {

            bool _UserAuth = funcionario.Autenticar( senha );

            if( _UserAuth ) {
                Console.WriteLine( "Bem Vindo ao sistema!" );
                return true;
            } else {
                Console.WriteLine( "Senha incorreta!" );
                return false;
            }
        }
    }
}
