using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bytebank.Funcionarios {
    class Diretor : FuncionarioAutenticavel {

            /// <summary>
            /// Cria um novo funcionário com a função de diretor.
            /// </summary>
            /// <param name="cpf"> Define o CPF da pessoa cadastrada. </param>
        public Diretor( string cpf ) : base( 500 , cpf ) {

            Console.WriteLine( "Criando Diretor" );
        }

        /// <summary>
        /// Aumenta o salário do funcionário em questão em 15%;
        /// </summary>
        public override void AumentarSalario() {
            Salario *= 1.15;
        }
        internal protected override double GetBonificacao() {
            return Salario *= 1.10;
        }

    }
}
