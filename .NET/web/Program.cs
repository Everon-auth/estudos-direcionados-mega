// Configura��o do builder do aplicativo

var builder = WebApplication.CreateBuilder(new WebApplicationOptions
{
    ApplicationName = typeof(WebApplication).Assembly.GetName().Name,
    ContentRootPath = Directory.GetCurrentDirectory(),
    EnvironmentName = Environments.Staging
});

var app = builder.Build();

app.UseStaticFiles();

ICatalogo catalogo = new Catalogo();
Relatorio relatorio = new Relatorio(catalogo);

app.MapGet("/", async (context) =>
{
  await relatorio.Imprimir(context);
});
app.Run();
