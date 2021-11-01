using System;
using _01_ByteBank.Exeptions;

namespace _ByteBank.Transacao {

    public class ContaCorrente {
        public static int TotalContasCriadas { get; private set; }
        public static double TaxaOperacao { get; private set; }
        public static int ContadorSaquesNaoPermitidos { get; private set; }
        public static int ContadorTransferenciasNaoPermitidas { get; private set; }

        public Cliente Titular { get; set; }
        public double Saldo { get; set; }
        public int Numero { get; }
        public int Resultado { get; set; }
        public int Agencia { get; set; }

        // Construtor da conta corrente
        public ContaCorrente( int numeroAgencia , int numeroConta ) {

            if( numeroAgencia <= 0 ) {
                throw new ArgumentException( "o numero da agencia não pode ser zero ou menor que zero." , nameof( numeroAgencia ) );
            }


            Agencia = numeroAgencia;
            Numero = numeroConta;
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
                ContadorSaquesNaoPermitidos++;
                throw new SaqueNaoPermitidoException();

            }
        }

        public void Depositar( double valor ) {
            Saldo += valor;
            Console.WriteLine( "Você recebeu um depósito de: R$" + valor );
        }

        public void transferir( double valor , ContaCorrente contaDestino ) {
            if( Saldo < valor ) {
                ContadorTransferenciasNaoPermitidas++;
                throw new SaldoInsuficienteExeption( "Você não tem saldo suficiente para fazer essa transação." );
            } else {
                Saldo -= valor;
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