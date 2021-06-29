function Database(scope, session, model){
  console.log(`--- DATABASE INIT :: ${scope} ---`);
  const _scope = scope;
  const _model = model;
  let _storage = new Array();
  const _local = session ? window.sessionStorage : window.localStorage;
  let _initStorage = () => {
    if( !_local.getItem(_scope) )
      _local.setItem(_scope, JSON.stringify([]));
    
    _storage = JSON.parse(_local.getItem(_scope)) || [];
  }
  let _persistData = () => {
    _local.setItem(_scope, JSON.stringify(_storage));
  }
  let _validateData = (item) => {
    const modelKeys = Object.keys(_model);
    modelKeys.forEach(key => {
      if(_model[key].required){
        let value = (item[key] || "") + "";
        
        if(value.trim() == '')
          throw Error(_model[key].messageError)
      }
    });
  }
  // INICIALIZAÇÃO IMPLICITA
  _initStorage()
  return {
    // INICIALIZAÇÃO EXPLICITA
    loadDatabase : () => {
      //_initStorage();
    },
    getData : () => {
      return _storage
    },
    saveData: (data, excluir = false) => {
      if(excluir){
        _storage = _storage.filter(item => item.ID != data.ID);
      }else{     
        if(_model)
          _validateData(data);

        let objeto = _storage.find(item => item.ID == data.ID);
        if( objeto == null ){
          _storage.push(data)
        }else{
          let keys = Object.keys(objeto);
          keys.forEach(key => {
            objeto[key] = data[key]
          });
        }
      }
      _persistData()
    },
    getDataByID : (ID) => {
      let data = _storage.find(item => item.ID == ID);
      if(!data)
        throw Error("Não existe nada com este ID");

      return data;
    }
  }
}