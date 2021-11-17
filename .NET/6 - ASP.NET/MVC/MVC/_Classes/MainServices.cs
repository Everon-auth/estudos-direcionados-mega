using Microsoft.EntityFrameworkCore;
public class MainServices {

    public void ConfigureServices( IServiceCollection services ) {
        DbContextOptions options;

        services.AddDbContext<ApplicationContext>( options =>
             options.UseSqlServer( "Server=(localdb)\\mssqllocaldb; Database=CasaDoCodigo; Trusted_Connection=true;" ) );

        services.AddControllersWithViews();
    }
}