using MVC;
using Microsoft.EntityFrameworkCore;
public class MainServices {

    public void ConfigureServices( WebApplicationBuilder builder) {
        builder.Services.AddTransient<ApplicationBuilder>();
    }
}