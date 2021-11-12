using web.Recipes;

public class Catalogo : ICatalogo {
    public List<Livro> GetLivros() {
        var Livros = new List<Livro>();
        Livros.Add( new Livro( 001 , "A menina e o Porquinho" , 19.99m ) );
        Livros.Add( new Livro( 002 , "Javascriop Design Patterns" , 399.99m ) );
        Livros.Add( new Livro( 003 , "Github para leigos" , 37.90m ) );

        return Livros;
    }
}
