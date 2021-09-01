import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageLocalService {
  storage:any
  key:any
  constructor() { }

  config(local:boolean, setKey:string){
    local? this.storage = sessionStorage : this.storage = localStorage
    this.key = setKey
  }
  sendUniqueData(data:any){
    data = JSON.stringify(data)
    this.storage.setItem(this.key,data)
  }
  sendMoreADate(data:any){
    let dados = JSON.parse(this.callJSON() || '[]')
    dados.push(data)
    dados = JSON.stringify(dados)
    this.storage.setItem(this.key,dados)
  }
  callJSON(){
    return this.storage.getItem(this.key)
  }
}
