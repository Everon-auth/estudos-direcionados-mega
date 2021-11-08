using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bytebank.SistemaAgencia {
    class Lista<T> {
        private T[] _itens;
        private int _proximaPosicao;

        public Lista( int capacidadeInicial = 5 ) {
            _itens = new T[ capacidadeInicial ];
            _proximaPosicao = 0;
        }

        public int Tamanho {
            get { return _proximaPosicao; }
        }

        public void adicionar( T item ) {
            VerificarCapacidade( _proximaPosicao + 1 );

            _itens[ _proximaPosicao ] = item;
            _proximaPosicao++;
        }

        private void VerificarCapacidade( int tamanhoNecessario ) {

            if( _itens.Length > tamanhoNecessario ) return;

            int novoTamanho = _itens.Length * 2;
            if( novoTamanho < tamanhoNecessario )
                novoTamanho = tamanhoNecessario;
            T[] novoArray = new T[ tamanhoNecessario ];

            for( int i = 0 ; i < _itens.Length ; i++ ) {
                novoArray[ i ] = _itens[ i ];
            }
            _itens = novoArray;

        }
        public void Remover( T contaDeveRemover ) {
            int indiceitem = -1;
            for( int i = 0 ; i < _proximaPosicao ; i++ ) {
                T itematual = _itens[ i ];
                if( itematual.Equals( contaDeveRemover ) ) {
                    indiceitem = i;
                    break;
                }
            }

            for( int i = indiceitem ; i < _proximaPosicao - 1 ; i++ ) {
                _itens[ i ] = _itens[ i + 1 ];
            }
            _proximaPosicao--;
           // _itens[ _proximaPosicao ] = null;
        }

        private T GetItemNoIndice( int indice ) {
            if( indice < 0 || indice >= _proximaPosicao ) {
                throw new ArgumentOutOfRangeException( nameof( indice ) );
            }
            return _itens[ indice ];
        }
        public T this[ int indice ] {
            get {
                return GetItemNoIndice( indice );
            }
        }

        public void AdicionarVarios( params T[] itens ) {
            foreach( T conta in itens ) {
                adicionar( conta );
            }
        }
    }
}
