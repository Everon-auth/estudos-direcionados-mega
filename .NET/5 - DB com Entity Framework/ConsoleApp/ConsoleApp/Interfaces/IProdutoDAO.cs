using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ConsoleApp.Recipes;
namespace ConsoleApp.Interfaces {
    interface IProdutoDAO<T> {
        void Adicionar( T p );
        void Remover( T p );
        void Atualizar( T p );
        Produto Recuperar( T p );
    }
}
