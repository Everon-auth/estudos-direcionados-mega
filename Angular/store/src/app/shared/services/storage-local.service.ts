import { Injectable } from '@angular/core';

@Injectable()

export class StorageLocalService {
  storage:any
  key:any
  constructor() { }

  config(local:boolean, setKey:string){
    local? this.storage = sessionStorage : this.storage = localStorage
    this.key = setKey
  }
  stringing(data:any){
    return JSON.stringify(data)
  }
  sendUniqueData(data:any){
    this.storage.setItem(this.key,data)
  }
  sendMoreADate(data:any){
    let dados = JSON.parse(this.callJSON() || '[]')
    dados.push(data)
    this.storage.setItem(this.key,this.stringing(dados))
  }
  callJSON(){
    return this.storage.getItem(this.key)
  }
}
