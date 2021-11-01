using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01_ByteBank.Exeptions {
    class SaqueNaoPermitidoException : Exception {

        public SaqueNaoPermitidoException( string mensagem ) : base( mensagem ) { }
        public SaqueNaoPermitidoException() { }
    }
}
