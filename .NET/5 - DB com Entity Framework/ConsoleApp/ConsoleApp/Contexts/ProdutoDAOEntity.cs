using System;
using System.Collections.Generic;
using ConsoleApp.Interfaces;
using ConsoleApp.Recipes;


namespace ConsoleApp.Contexts {
    class ProdutoDAOEntity : IProdutoDAO<Produto> {
        public void Adicionar( Produto p ) {
            using( var Contexto = new LojaContext() ) {
                Contexto.Add( p );
                Contexto.SaveChanges();
            }
        }
        public void AdicionarConsole() {
            Produto p = new Produto();
            Console.WriteLine( "Digite o nome do produto" );
            p.Nome = Console.ReadLine();
            Console.WriteLine( "Digite a categoria do produto" );
            p.Categoria = Console.ReadLine();
            Console.WriteLine( "Digite o preço do produto" );
            p.Preco = float.Parse( Console.ReadLine() );
            try {

                using( var Contexto = new LojaContext() ) {
                    Contexto.Add( p );
                    Contexto.SaveChanges();
                }
            } catch( Exception e ) {
                Console.WriteLine( $"Erro: {e.Message}" );
            }
        }
        public void Atualizar( Produto p ) {
            try {

                using( var Contexto = new LojaContext() ) {
                    Contexto.Produtos.Update( Contexto.Produtos.Find( p.Id ) );
                    Contexto.SaveChanges();
                }
            } catch( Exception e ) {
                Console.WriteLine( $"Erro: {e.Message}" );
            }
        }
        public Produto Recuperar( Produto p ) {
            try {
                using( var Contexto = new LojaContext() ) {
                    Produto db_archive = Contexto.Produtos.Find( p.Id );
                    return db_archive;
                }
            } catch( Exception e ) {
                Console.WriteLine( $"Erro: {e.Message}" );
                return null;
            }
        }
        public void Remover( Produto p ) {
            try {
                using( var Context = new LojaContext() ) {
                    Context.Produtos.Remove( p );
                    Context.SaveChanges();
                    Console.WriteLine( "Produto removido com sucesso!" );
                }
            } catch( Exception e ) {
                Console.WriteLine( $"Erro: {e.Message}" );
            }
        }
    }
}
