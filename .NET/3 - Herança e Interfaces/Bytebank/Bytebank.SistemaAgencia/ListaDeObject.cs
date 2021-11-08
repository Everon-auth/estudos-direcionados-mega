using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using _ByteBank.Transacao;

namespace Bytebank.SistemaAgencia {
    class ListaDeObject {
        private object[] _itens;
        private int _proximaPosicao;

        public ListaDeObject( int capacidadeInicial = 5 ) {
            _itens = new object[ capacidadeInicial ];
            _proximaPosicao = 0;
        }

        public int Tamanho {
            get { return _proximaPosicao; }
        }

        public void adicionar( object item ) {
            VerificarCapacidade( _proximaPosicao + 1 );

            _itens[ _proximaPosicao ] = item;
            _proximaPosicao++;
        }

        private void VerificarCapacidade( int tamanhoNecessario ) {

            if( _itens.Length > tamanhoNecessario ) return;

            int novoTamanho = _itens.Length * 2;
            if( novoTamanho < tamanhoNecessario )
                novoTamanho = tamanhoNecessario;
            object[] novoArray = new object[ tamanhoNecessario ];

            for( int i = 0 ; i < _itens.Length ; i++ ) {
                novoArray[ i ] = _itens[ i ];
            }
            _itens = novoArray;

        }
        public void Remover( object contaDeveRemover ) {
            int indiceitem = -1;
            for( int i = 0 ; i < _proximaPosicao ; i++ ) {
                object itematual = _itens[ i ];
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

        private object GetItemNoIndice( int indice ) {
            if( indice < 0 || indice >= _proximaPosicao ) {
                throw new ArgumentOutOfRangeException( nameof( indice ) );
            }
            return _itens[ indice ];
        }
        public object this[ int indice ] {
            get {
                return GetItemNoIndice( indice );
            }
        }

        public void AdicionarVarios( params object[] itens ) {
            foreach( object conta in itens ) {
                adicionar( conta );
            }
        }
    }
}
