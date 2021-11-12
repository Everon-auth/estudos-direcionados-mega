namespace web.Recipes {
    public class Livro {
        public Livro( int id , string nome , decimal preco ) {
            Id = id;
            Nome = nome;
            Preco = preco;
        }

        public int Id { get; set; }
        public string Nome { get; set; }
        public decimal Preco { get; set; }
    }
}
