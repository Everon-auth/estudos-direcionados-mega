import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, switchMap, take, tap } from 'rxjs/operators'
@Component({
  selector: 'app-lib-search',
  templateUrl: './lib-search.component.html',
  styleUrls: ['./lib-search.component.scss']
})
export class LibSearchComponent implements OnInit {

  queryField = new FormControl
  readonly SEARCH_URL = 'https://api.cdnjs.com/libraries';
  results$: Observable<any>;
  total: number = 0;
  readonly FIELDS: any[] = ['name', 'description', 'version', 'homepage'];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    let params = new HttpParams();
    this.FIELDS.forEach((field, i) => {
      i == 0 ? params = params.set('fields', field) : params = params.append('fields', field)
    });

    this.results$ =this.queryField.valueChanges
      .pipe(
        tap(value =>{
          params = params.set('search', value);
        }),
        map(value => value.trim()),
        filter(value => value.length > 1),
        debounceTime(300),
        distinctUntilChanged(),
        tap(console.log),
        switchMap( _ => this.http.get<any>(this.SEARCH_URL, { params })),
        tap((res: any) => this.total = res.total),
        map((res: any) => res.results)
      )
  }

  onSearch() {
/*     let value = this.queryField.value
    if (value && (value = value.trim()) !== '') {
      this.results$ = this.http.get<any>(this.SEARCH_URL, { params })
        .pipe(
          tap((res: any) => this.total = res.total),
          map((res: any) => res.results)
        )
    } */
  }
}
