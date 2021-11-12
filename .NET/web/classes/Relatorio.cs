using System;
using web.Interfaces;
using web.Recipes;

public class Relatorio : IRelatorio{
    private ICatalogo catalogo;

    public Relatorio( ICatalogo _catalogo ) {
        catalogo = _catalogo;
    }

    async public Task Imprimir( HttpContext context ) {
        await context.Response.WriteAsync( catalogo.GetLivros() );
        /*       foreach( var livro in catalogo ) {
                  Console.WriteLine( $"Livro: {livro}" );
                  await context.Response.WriteAsync( $" {livro}\n" );
              } */
    }

}
