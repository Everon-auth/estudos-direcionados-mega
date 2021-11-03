using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bytebank.Sistemas {
    class AuthHelper {

        public bool CompararSenha( string senhaverdadeira , string senhatestada ) {
            return senhaverdadeira == senhatestada;
        }

    }
}
