import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, of } from 'rxjs';
import { Hero } from './heroes/hero';
import { MessageService } from './message.service';
import { catchError, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(
    private msg: MessageService,
    private http: HttpClient,
  ) { }

  // get All Heroes
  getHeroes(): Observable<Hero[]> {
    const funct = this.http.get<Hero[]>(this.heroesUrl);
    return this.trateData(funct, 'Geted all Heroes');
  }
  //get HeroData by id
  getHeroById(id: number) {
    const url: string = `${this.heroesUrl}/${id}`
    const funct = this.http.get<Hero[]>(url);
    return this.trateData(funct, `Geted Hero by Id = ${id}`)
  }

  // Update a hero
  savehero(data: any): Observable<Hero> {
    const funct = this.http.put<Hero>(this.heroesUrl, data, this.httpOptions)
    return this.trateData(funct, `Updated the Hero ${data}`);
  }


  // Add new hero
  newHero(data: Hero): Observable<Hero> {
    const funct = this.http.post<Hero>(this.heroesUrl, data, this.httpOptions);
    return this.trateData(funct, 'New hero Was Added');
  }

  // delete Hero from DB
  delHero(id: number) {
    const url = `${this.heroesUrl}/${id}`
    const funct = this.http.delete(url);
    return this.trateData(funct, 'deleted hero')
  }

  // Search hero from DB
  searchHeroes(term: string): Observable<Hero> {
    const url = `${this.heroesUrl}/?name=${term}`;
    const funct = this.http.get<Hero[]>(url)
      .pipe(
        tap(
          x => x.length ?
            this.log(`no heroes matching "${term}"`) : EMPTY
        )
      );
    return this.trateData(funct, `found Heroes matching ${term}`)
  }



  // send a log & intercept Errors
  private trateData(funct: Observable<any>, msg: string) {
    return funct.pipe(
      tap(_ => this.log(msg)),
      catchError(this.handleError<Hero[] | Hero>('getHeroes', []))
    );
  }

  // Create a log
  private log(msg: string) {
    this.msg.add(`HeroService: ${msg}`)
  }

  // Intercepts Errors
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed ${error.message}`)
      return of(result as T)
    }
  }
}
