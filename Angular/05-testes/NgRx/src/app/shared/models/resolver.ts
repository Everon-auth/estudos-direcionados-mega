import { Injectable, EventEmitter } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class teste implements Resolve<teste> {
    resolve(route: ActivatedRouteSnapshot): Observable<teste> | Promise<teste> {
        let a: any = ['a', 'b']
        let data = new Observable(subs => { console.log(a) })
        data.subscribe(subs => console.log(subs))
        a.push('c')
        a.push('d')
        a.push('e')
        return a;
    }
}