using System;
using _ByteBank.Transacao;

namespace Bytebank.SistemaAgencia {
    class ListaDeContas {

        private ContaCorrente[] _itens;
        private int _proximaPosicao;

        public ListaDeContas( int capacidadeInicial = 5 ) {
            _itens = new ContaCorrente[ capacidadeInicial ];
            _proximaPosicao = 0;
        }


        public void adicionar( ContaCorrente item ) {
            VerificarCapacidade( _proximaPosicao + 1 );

            _itens[ _proximaPosicao ] = item;
            _proximaPosicao++;
        }

        private void VerificarCapacidade( int tamanhoNecessario ) {

            if( _itens.Length > tamanhoNecessario ) return;

            int novoTamanho = _itens.Length * 2;
            if( novoTamanho < tamanhoNecessario )
                novoTamanho = tamanhoNecessario;
            ContaCorrente[] novoArray = new ContaCorrente[ tamanhoNecessario ];

            for( int i = 0 ; i < _itens.Length ; i++ ) {
                novoArray[ i ] = _itens[ i ];
            }
            _itens = novoArray;

        }
        public void Remover( ContaCorrente contaDeveRemover ) {
            int indiceitem = -1;
            for( int i = 0 ; i < _proximaPosicao ; i++ ) {
                ContaCorrente itematual = _itens[ i ];
                if( itematual.Equals( contaDeveRemover ) ) {
                    indiceitem = i;
                    break;
                }
            }

            for( int i = indiceitem ; i < _proximaPosicao - 1 ; i++ ) {
                _itens[ i ] = _itens[ i + 1 ];
            }
            _proximaPosicao--;
            _itens[ _proximaPosicao ] = null;
        }

        public void ExibirLista() {
            for( int i = 0 ; i < _proximaPosicao ; i++ ) {
                Console.WriteLine( $"Indice {i}: Conta {_itens[ i ].Agencia} {_itens[ i ].Numero}" );
            }
        }

        private ContaCorrente GetItemNoIndice(int indice ) {
            if(indice < 0 || indice >= _proximaPosicao ) {
                throw new ArgumentOutOfRangeException( nameof( indice ) );
            }
            return _itens[ indice ];
        }
        public ContaCorrente this[int indice] {
            get {
                return GetItemNoIndice( indice );
            }
        }
    }
}
