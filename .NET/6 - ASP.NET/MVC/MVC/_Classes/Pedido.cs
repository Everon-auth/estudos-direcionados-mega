namespace MVC {
    public class Pedido : BaseModel {
        public int CadastroId { get; set; }
        public Cadastro Cadastro { get; set; }
        public IList<itemPedido> Items { get; set; }
    }
}
