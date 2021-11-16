using Microsoft.EntityFrameworkCore;
using MVC;

public class ApplicationContext : DbContext {

    public DbSet<Cadastro> Cadastros { get; set; }
    public DbSet<itemPedido> ItemPedidos { get; set; }
    public DbSet<Pedido> Pedidos { get; set; }
    public DbSet<Produto> produtos { get; set; }


    protected override void OnConfiguring( DbContextOptionsBuilder optionsBuilder ) {
        if( !optionsBuilder.IsConfigured ) {
            optionsBuilder.UseSqlServer( "Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=CasaDoCodigo;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False" );
        }
    }
}