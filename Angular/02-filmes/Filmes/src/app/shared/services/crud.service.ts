import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { take, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  API_URL = 'http://localhost:3000/films/'

  constructor(
    private http: HttpClient,
  ) { }
  returnList(){
    return this.http.get(this.API_URL)
  }
  addData(data: any){
    return this.http.post(this.API_URL,data).pipe(take(1))
  }
  deleteData(data:string){
    return this.http.delete(`${this.API_URL}${data}`).pipe(take(2));
  }
}


/*     let data = {
      name: 'A menina e o porquinho',
      url: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTKEA012hh9aw1RMI7VSpvSWVITnhiOgKQt4qoiVvDcrp04CIvt',
      date: '06/02/2001',
      descript: 'Fern é uma das poucas pessoas a perceber que o porquinho Wilbur é um animal muito especial. Com seu carinho e atenção, ela ajuda a torná-lo um porco vistoso e radiante. Quando se muda para um novo celeiro, Wilbur faz amizade com a aranha Charlotte. Os laços de amizade dos dois fazem com que os demais animais vivam como se fizessem parte de uma família. Porém quando surge a notícia de que Wilbur em breve será morto, Charlotte busca um meio de convencer o fazendeiro de que ele merece viver.',
    }
    this.http.addData(data) */
