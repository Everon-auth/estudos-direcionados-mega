using MVC;

internal interface IProdutoRepository {
    IList<Produto> GetProdutos();
    void SaveProdutos( WebApplication app );
}