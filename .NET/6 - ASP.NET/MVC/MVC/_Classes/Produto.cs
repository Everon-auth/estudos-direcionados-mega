namespace MVC {
    public class Produto : BaseModel {


        public Produto( string code , string name , decimal price ) {
            Codigo = code;
            Nome = name;
            Preco = price;
        }

        public Produto( string code , string name , decimal price , Categoria category ) {
            Codigo = code;
            Nome = name;
            Preco = price;
            Categoria = category;
        }

        public string Codigo { get; set; }
        public string Nome { get; set; }
        public decimal Preco { get; set; }
        public Categoria Categoria { get; set; }
    }
}
