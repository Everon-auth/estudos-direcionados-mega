using System;
using _ByteBank.Transacao;

namespace Bytebank.SistemaAgencia {
    class ListaDeContas {

        private ContaCorrente[] _itens;
        private int _proximaPosicao = 0;
        public void adicionar( ContaCorrente item ) {
            VerificarCapacidade( _proximaPosicao + 1 );
            Console.WriteLine( $"Adicionado item na posição {_proximaPosicao}" );

            _itens[ _proximaPosicao ] = item;
            _proximaPosicao++;
        }

        private void VerificarCapacidade( int tamanhoNecessario ) {
            if( _itens.Length >= tamanhoNecessario ) return;

            int novoTamanho = _itens.Length * 2;
            Console.WriteLine( $"Tamanho novo: {novoTamanho}" );
            Console.WriteLine( $"Tamanho necessário: {tamanhoNecessario}" );
            if( novoTamanho < tamanhoNecessario )
                novoTamanho = tamanhoNecessario;
            Console.WriteLine( "Aumentado a capacidade da lista" );
            ContaCorrente[] novoArray = new ContaCorrente[ tamanhoNecessario ];

            for( int i = 0 ; i < _itens.Length ; i++ ) {
                novoArray[ i ] = _itens[ i ];
            }
            _itens = novoArray;

        }


        public void Remover(ContaCorrente contaDeveRemover) {

            int indiceItem = -1;
            //for(int i = 0 < _proximaPosicao ; i++) {
            //    ContaCorrente itemAtual = _itens[ i ];
            //    if( itemAtual.Equals( item ) ) {
            //        indiceItem = i;
            //        break;
            //    }

            //}

            09-> deslocando itens de um array;

        }


    }
}
