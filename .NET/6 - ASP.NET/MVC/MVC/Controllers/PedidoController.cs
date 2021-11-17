using Microsoft.AspNetCore.Mvc;

namespace MVC.Controllers {
    public class PedidoController : Controller {


        private IProdutoRepository _produtoRepository;

        public PedidoController( IProdutoRepository produtoRepository ) {
            this._produtoRepository = produtoRepository;
        }

        public ActionResult Cadastro() {
            return View();
        }

        public ActionResult Carrossel() {
            return View( _produtoRepository.GetProdutos() );
        }

        public ActionResult Resumo() {
            return View();
        }

        public ActionResult Carrinho() {
            return View();
        }

    }
}
