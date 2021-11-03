using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bytebank.Sistemas;

namespace Bytebank {

    // implementada a interface que exige que tenha um étodo Autenticar nesssa classe.

    class ParceiroComercial : IAutenticavel {

        private AuthHelper _auth = new AuthHelper();

        public string Senha { get; set; }
        // Implementa o método da interface.
        public bool Autenticar( string senha ) {
            return _auth.CompararSenha( Senha , senha );
        }
    }
}
