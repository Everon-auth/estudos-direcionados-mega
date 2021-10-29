using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bytebank.Funcionarios {
    abstract class Funcionario  {

        public static int TotalDeFuncionarios { get; private set; }

        public string Nome { get; set; }
        public string CPF { get; set; }
        public double Salario { get; set; }

        public Funcionario( double salario , string cpf ) {
            Console.WriteLine( "Criando Funcionario..." );
            CPF = cpf;
            Salario = salario;
            TotalDeFuncionarios++;
        }

        public virtual void AumentarSalario() {
            Console.WriteLine( "Atenção, não esquecer de sobescrevereste método" );
        }
        public virtual double GetBonificacao() {
            Console.WriteLine( "Atenção, não esquecer de sobescrevereste método" );
            return 0;
        }
    }

}
