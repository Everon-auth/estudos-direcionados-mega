namespace MVC {
    public class itemPedido : BaseModel {
        public int PedidoId { get; set; }
        public double PrecoUnitario { get; set; }
        public int ProdutoId { get; set; }
        public int Quantidade { get; set; }
    }
}
