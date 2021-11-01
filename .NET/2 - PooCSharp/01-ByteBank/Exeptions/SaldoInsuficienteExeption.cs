using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _01_ByteBank.Exeptions {
    class SaldoInsuficienteExeption : Exception {

        private double _Saldo { get;  set; }
        private double _ValorSaque { get;  set; }

        public SaldoInsuficienteExeption( string mensagem ) : base( mensagem ) { }
        public SaldoInsuficienteExeption() { }
        public SaldoInsuficienteExeption( double saldo , double valorSaque ) : 
            this( "Tentativa de saque do valor de " + valorSaque + " em uma conta com saldo de " + saldo + "." ) {
            _Saldo = saldo;
            _ValorSaque = valorSaque;
        }
    }
}
