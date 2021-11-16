using System;
using web.Interfaces;
using web.Recipes;

public class Relatorio : IRelatorio {
    private ICatalogo catalogo;

    public Relatorio( ICatalogo _catalogo ) {
        catalogo = _catalogo;
    }

    async public Task Imprimir( HttpContext context ) {
        foreach( var livro in catalogo.GetLivros() ) {
            await context.Response.WriteAsync( $"ID: {livro.Id};    Nome: {livro.Nome};     Preco: {livro.Preco}\n" );
        }
    }

}
