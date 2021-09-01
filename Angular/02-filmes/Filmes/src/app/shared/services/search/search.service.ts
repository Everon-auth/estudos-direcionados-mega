import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  data = ['abacate', 'mamão', 'laranja', 'pera'];
  constructor() { }

  filter() {
    let word = 'a'
    this.data = this.data.filter((data: any) => data == word);
    return this.data;
  }
}
