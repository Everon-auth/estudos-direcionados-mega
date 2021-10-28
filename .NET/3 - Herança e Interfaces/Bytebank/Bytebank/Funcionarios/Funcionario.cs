using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bytebank {
    class Peao {
        public string Nome { get; set; }
        public string CPF { get; set; }
        public double Salario { get; set; }
        public double ValorBonificacao { get; set; } = 10;

        public double Bonificacao() {
            return Salario * ( ValorBonificacao / 100 );
        }
    }
    class Diretor : Peao { }



}
