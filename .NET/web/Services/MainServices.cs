
using web.Interfaces;

public class MainServices {

    public void SetServices( WebApplicationBuilder builder ) {

        // A cada chamada do GetService, cria-se uma nova chamada dessa instancia
        //builder.Services.AddTransient<ICatalogo , Catalogo>();
        //builder.Services.AddTransient<IRelatorio , Relatorio>();

        // Sempre obtem uma unica instancia desse serviço
        //builder.Services.AddScoped<ICatalogo , Catalogo>();
        //builder.Services.AddScoped<IRelatorio , Relatorio>();

        // indiferente da requisição, sempre será a mesma instancia de serviço
        var catalogo = new Catalogo();
        builder.Services.AddSingleton<ICatalogo>(catalogo);
        builder.Services.AddSingleton<IRelatorio>(new Relatorio(catalogo));
    }
}

