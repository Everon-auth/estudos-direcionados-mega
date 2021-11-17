using MVC;
using System.Text.Json;

class ProdutoRepository : IProdutoRepository {

    private readonly ApplicationContext contexto;

    public ProdutoRepository( ApplicationContext contexto ) {
        this.contexto = contexto;
    }
    public void SaveProdutos( WebApplication app ) {

        using( var scope = app.Services.CreateScope() ) {
            var services = scope.ServiceProvider;
            var arquivo = File.ReadAllText( "livros.json" );
            var logger = services.GetRequiredService<ILogger<Program>>();
            var livros = JsonSerializer.Deserialize<List<Livro>>( arquivo );

            foreach( var livro in livros ) {
                contexto.Set<Produto>().Add( new Produto( livro.Codigo , livro.Nome , livro.Preco ) );
            }
            contexto.SaveChanges();
        }
    }

    public IList<Produto> GetProdutos() {
        return contexto.Set<Produto>().ToList();
    }

}

