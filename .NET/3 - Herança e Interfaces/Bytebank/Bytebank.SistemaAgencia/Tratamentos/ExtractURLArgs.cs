using System;

namespace Bytebank.SistemaAgencia.Tratamentos {
    /// <summary>
    /// Classe com métodos para separar um ou mais valores ou argumentos da url
    /// </summary>

    public class ExtractURLArgs {
        public string _URL { get; }
        /// <summary>
        /// Construtor que verifica se a url passada é valida ou não e depois seta a url se for válida
        /// </summary>
        /// <param name="url"> URL que será usada para extrair as informações</param>
        public ExtractURLArgs( string url ) {
            if( string.IsNullOrEmpty( url ) ) {
                throw new ArgumentException( "A URL não pode ser vazio ou nulo" , nameof( url ) );
            }
            _URL = url.ToLower();
        }
        /// <summary>
        ///  Método para extrair e retornar o valor do argumento buscado
        /// </summary>
        /// <param name="Argumento">Argumento a ser buscado o valor na URL</param>
        /// <returns></returns>
        public string GetValorDoArgumento( string Argumento ) {
            Argumento += "=";
            Argumento = Argumento.ToLower();
            int indice = _URL.IndexOf( Argumento );
            if( indice < 0 ) {
                throw new ArgumentException( "O argumento passado para a busca não existe" );
            } else {
                string valor = _URL.Substring( indice + Argumento.Length );
                if( valor.IndexOf( '&' ) >= 0 ) {
                    valor = valor.Remove( valor.IndexOf( '&' ) );
                }
                return valor;
            }
        }
    }
}
