import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoged: boolean = true;
  constructor() { };

  isAuth() {
    return this.isLoged;
  }
}
