using Microsoft.AspNetCore.Mvc.RazorPages;
using web.Recipes;

namespace Web.Pages {
    public class IndexModel : PageModel {

         static public List<Livro> Livros { get; set; }

        private readonly ILogger<IndexModel> _logger;

        public IndexModel( ILogger<IndexModel> logger ) {
            _logger = logger;
        }

        public async void OnGet() {
            var Livros = new List<Livro>();
            Livros.Add( new Livro( 001 , "A menina e o Porquinho" , 19.99m ) );
            Livros.Add( new Livro( 002 , "Javascriop Design Patterns" , 399.99m ) );
            Livros.Add( new Livro( 003 , "Github para leigos" , 37.90m ) );


        }
    }
}