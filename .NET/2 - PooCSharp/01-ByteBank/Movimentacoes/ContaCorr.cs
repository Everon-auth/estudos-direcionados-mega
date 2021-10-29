using System;

namespace _ByteBank.Transacao {

    public class ContaCorrente {
        public static int TotalContasCriadas { get; private set; }
        public static double TaxaOperacao { get; private set; }

        public Cliente Titular { get; set; }
        public double Saldo { get; set; }
        public int Agencia { get; set; }
        public int Numero { get; set; }
        public int Resultado { get; set; }

        // Construtor da conta corrente
        public ContaCorrente( int agencia , int numero ) {
            Agencia = agencia;
            Numero = numero;
            Titular = new Cliente();
            TotalContasCriadas++;
            TaxaOperacao = 20 / ( TotalContasCriadas / Math.PI );

            Console.WriteLine( "Valor atual da Taxa: " + TaxaOperacao );
        }

        private bool _PossoSacar( double valor ) {
            if( Saldo >= valor ) return true;
            else return false;
        }

        public void Sacar( double valor ) {
            if( _PossoSacar( valor ) ) {
                Console.WriteLine( "Sacando R$" + valor + " ..." );
                Saldo -= valor;
                Console.WriteLine( "Valor Restante: R$" + Saldo );
            } else {
                Console.WriteLine( "Você não pode sacar este valor pois sua conta não tem esse valor" );

            }
        }

        public void Depositar( double valor ) {
            Saldo += valor;
            Console.WriteLine( "Você recebeu um depósito de: R$" + valor );
        }

        public void transferir( double valor , ContaCorrente contaDestino ) {
            if( Saldo < valor )
                Console.WriteLine( "Não foi possível fazer a transferencia por falta de saldo em sua conta." );
            else {
                //Saldo -= valor;
                contaDestino.Depositar( valor );
                Console.WriteLine( "Transferencia concluída com sucesso!" );
                Console.WriteLine( "Saldo aual: R$" + Saldo );

            }
        }

        public void dividir( int num1 , int num2 ) {
            try {
                Resultado = num1 / num2;
                Console.WriteLine( "Resultado: " + Resultado );

            } catch( Exception e ) {
                Console.WriteLine( "Erro: " + e.Message );
            }
        }
    }
}