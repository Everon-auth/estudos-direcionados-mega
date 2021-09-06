import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators'

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(
        private http: HttpClient,
    ) { }

    getdata(url: string) {
        const unique = () => {
            return this.http.get(url).pipe(take(1))
        }
        const tosubs = () => {
            return this.http.get(url)
        }
        return {
            unique,
            tosubs
        }
    }
}
