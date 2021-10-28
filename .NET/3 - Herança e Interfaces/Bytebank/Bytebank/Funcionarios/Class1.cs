using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bytebank {
    class GerenciadorBonificacao {

            private double _totalBonificacao { get; set; }
        public void Registrar( Peao Funcionario ) {
            _totalBonificacao += Funcionario.Bonificacao();
        }
        public double GetTotalBonificacao() {
            return _totalBonificacao;
        }
    }
}
