using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using MVC;
public class ApplicationContext : DbContext {

    public DbSet<Cadastro> Cadastros { get; set; }
    public DbSet<itemPedido> ItemPedidos { get; set; }
    public DbSet<Pedido> Pedidos { get; set; }
    public DbSet<Produto> produtos { get; set; }
    public DbSet<Categoria> Categoria { get; set; }


    public ApplicationContext( DbContextOptions options ) : base( options: options ) {
    }

    protected override void OnModelCreating( ModelBuilder modelBuilder ) {
        base.OnModelCreating( modelBuilder );

        modelBuilder.Entity<Categoria>().HasKey( t => t.Id );
        modelBuilder.Entity<Produto>().HasKey( t => t.id );
        modelBuilder.Entity<Cadastro>().HasKey( t => t.id );
        modelBuilder.Entity<itemPedido>().HasKey( t => t.id );
        modelBuilder.Entity<Pedido>().HasKey( t => t.id );
        modelBuilder.Entity<Pedido>().HasMany( t => t.Items );
        modelBuilder.Entity<Pedido>().HasKey( t => t.id );
    }
}
public class BloggingContextFactory : IDesignTimeDbContextFactory<ApplicationContext> {
    public ApplicationContext CreateDbContext( string[] args ) {
        var optionsBuilder = new DbContextOptionsBuilder<ApplicationContext>();

        optionsBuilder.UseSqlServer( "Server=(localdb)\\mssqllocaldb; Database=CasaDoCodigo; Trusted_Connection=true;" );

        return new ApplicationContext( optionsBuilder.Options );
    }
}