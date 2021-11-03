using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bytebank.Sistemas;

namespace Bytebank.Funcionarios {
    class FuncionarioAutenticavel : Funcionario, IAutenticavel {

        private AuthHelper _auth = new AuthHelper();

        public string Senha { get; set; }

        public FuncionarioAutenticavel( double salario , string cpf )
            : base( salario , cpf ) { }

        public bool Autenticar( string senha ) {
            return _auth.CompararSenha( Senha , senha );
        }

        protected internal override double GetBonificacao() {
            throw new NotImplementedException();
        }
    }


}
