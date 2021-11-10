using System;
using System.Collections.Generic;
using ConsoleApp.Recipes;
using ConsoleApp.Contexts;
using Microsoft.EntityFrameworkCore;

namespace ConsoleApp {
    class Program {
        static void Main( string[] args ) {


            UsandoEntity();
            //RecuperarProdutos();


        }

        static void UsandoEntity() {
            Produto p = new Produto() {
                Nome = "Harry Potter e a Ordem da Fênix" ,
                Categoria = "Livros" ,
                Preco = 19.89
            };

            using( var Contexto = new LojaContext() ) {
                Contexto.Add( p );
                Contexto.SaveChanges();
            }
        }

        static void RecuperarProdutos() {
            Produto p = new Produto() {
                Nome = "Harry Potter e a Ordem da Fênix" ,
                Categoria = "Livros" ,
                Preco = 19.89
            };
            using( var repo = new LojaContext() ) {
                Console.WriteLine( repo.Produtos.Find(  ).Preco );
            }
        }
    }
}
