using System;
using web.Recipes;

var builder = WebApplication.CreateBuilder( args );

// Add services to the container.
builder.Services.AddRazorPages();

var app = builder.Build();

// Configure the HTTP request pipeline.
if( !app.Environment.IsDevelopment() ) {
    app.UseExceptionHandler( "/Error" );
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapRazorPages();

app.Run( async (context) => {
    var Livros = new List<Livro>();
    Livros.Add( new Livro( 001 , "A menina e o Porquinho" , 19.99m ) );
    Livros.Add( new Livro( 002 , "Javascriop Design Patterns" , 399.99m ) );
    Livros.Add( new Livro( 003 , "Github para leigos" , 37.90m ) );
    foreach(var livro in Livros ) {
        await context.Response.WriteAsync( $"Pau a Maquina" );
    }
} );

