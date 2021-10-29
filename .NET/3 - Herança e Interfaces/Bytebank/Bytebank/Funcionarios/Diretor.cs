using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bytebank.Funcionarios {
    class Diretor : FuncionarioAutenticavel {


        public Diretor( string cpf ) : base( 500 , cpf ) {
            Console.WriteLine( "Criando Diretor" );
        }

        public override void AumentarSalario() {
            Salario *= 1.15;
        }
        public override double GetBonificacao() {
            return Salario *= 1.10;
        }

    }
}
