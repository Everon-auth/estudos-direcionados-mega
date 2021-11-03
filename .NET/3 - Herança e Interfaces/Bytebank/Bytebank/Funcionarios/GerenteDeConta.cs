using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bytebank.Funcionarios {
    class GerenteDeConta : FuncionarioAutenticavel {

        public GerenteDeConta( string cpf ) : base( 1200 , cpf ) {
            Console.WriteLine( "Gerente de Conta" );
        }

        public override void AumentarSalario() {
            Salario *= 1.05;
        }
        internal protected override double GetBonificacao() {
            return Salario *= 0.25;
        }
    }
}
