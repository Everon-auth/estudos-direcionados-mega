(() => {
  console.log("--- INIT ---");
  try{
    //let tvDB = new Database("CACHORRINHO");
    // let filmeModel = {
    //   ID : {
    //     required : true,
    //     messageError : "Identificador não presente, informe o administrador!"
    //   },
    //   nome : {
    //     required : true,
    //     messageError : "Preencha o nome do filme" 
    //   }
    // }
    // let filmesDB = new Database("filmes", filmeModel);
    // filmesDB.loadDatabase();
    // let filme = filmesDB.getDataByID(1);
    let userModel = {
      ID : {
        required : true,
        messageError : "Identificador não presente, informe o administrador!"
      },
      username : {
        required : true,
        messageError : "Informe o nome de  usuário!"
      },
      password : {
        required : true,
        messageError : "Informe a senha!"
      }
    }
    let userDB = new Database("usuarios", false, userModel);
    userDB.loadDatabase();
    userDB.saveData({
      ID : 1678,
      username : "anderson.koester",
      password : "minhasenhasegura"
    })
  }catch(err){
    window.alert(err.message)
  }
})();