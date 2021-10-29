using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bytebank.Sistemas;

namespace Bytebank {

    // implementada a interface que exige que tenha um étodo Autenticar nesssa classe.

    class ParceiroComercial : IAutenticavel {

        public string Senha { get; set; }
        // Implementa o método da interface.
        public bool Autenticar( string senha ) {
            return Senha == senha;
        }
    }
}
