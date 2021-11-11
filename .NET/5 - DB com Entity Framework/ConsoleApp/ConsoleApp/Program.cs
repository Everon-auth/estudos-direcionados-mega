using System;
using System.Collections.Generic;
using ConsoleApp.Recipes;
using ConsoleApp.Contexts;

namespace ConsoleApp {
    class Program {
        static void Main( string[] args ) {
            Produto produto = new Produto();
            using( var Contexto = new LojaContext() ) {
                var db_archive = Contexto.Produtos;
                foreach( var item in db_archive ) {
                    Console.WriteLine( item.Nome );
                }
            }
            Console.ReadLine();
        }
    }
}
