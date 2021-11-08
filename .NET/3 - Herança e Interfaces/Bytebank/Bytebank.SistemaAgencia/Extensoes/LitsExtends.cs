using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bytebank.SistemaAgencia.Extensoes {
    class ListExtends<T> : List<T> { // classe extendida

        public void AdicionarVarios( params T[] itens ) {
            foreach( T conta in itens ) {
                Add( conta );
            }
        }
    }

    public static class ListExtend { // método utilizável
        public static void AdicionarVarios<T>( this List<T> ListadeInteiros , params T[] itens ) {
            foreach( T item in itens ) {
                ListadeInteiros.Add( item );
            }
        }
    }
}
