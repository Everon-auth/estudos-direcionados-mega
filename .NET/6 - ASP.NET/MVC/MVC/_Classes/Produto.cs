namespace MVC {
    public class Produto : BaseModel{
        public int Codigo { get; set; }
        public string Nome { get; set; }
        public decimal Preco { get; set; }
    }
}
