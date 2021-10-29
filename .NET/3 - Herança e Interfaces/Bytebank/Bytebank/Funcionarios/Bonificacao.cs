using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bytebank.Funcionarios {
    class GerenciadorBonificacao {

            private double _totalBonificacao { get; set; }
        public void Registrar( Funcionario Funcionario ) {
            _totalBonificacao += Funcionario.GetBonificacao();
        }
        public double GetTotalBonificacao() {
            return _totalBonificacao;
        }
    }
}
