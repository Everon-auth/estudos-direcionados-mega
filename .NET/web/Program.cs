// Configura��o do builder do aplicativo

using web.Interfaces;

var builder = WebApplication.CreateBuilder( new WebApplicationOptions {
    ApplicationName = typeof( WebApplication ).Assembly.GetName().Name ,
    ContentRootPath = Directory.GetCurrentDirectory() ,
    EnvironmentName = Environments.Staging
} );

// Inicia os services principais do construtor
var ServiceMain = new MainServices();
ServiceMain.SetServices( builder );

var app = builder.Build();
app.UseStaticFiles();


//Variaveis das classes primárias do ASP.net core
IServiceProvider services = app.Services;

void ConfigureService() {
    IServiceCollection services = new ServiceCollection();
    services.AddTransient<ICatalogo , Catalogo>();
    services.AddTransient<IRelatorio , Relatorio>();
}
ConfigureService();

ICatalogo catalogo = services.GetService<ICatalogo>();
IRelatorio relatorio = services.GetService<IRelatorio>();

app.MapGet( "/" , async ( context ) => {
    await relatorio.Imprimir( context );
} );
app.Run();