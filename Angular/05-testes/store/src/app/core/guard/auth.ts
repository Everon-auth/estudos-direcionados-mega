import { Injectable } from '@angular/core'; 
 
@Injectable({ 
    providedIn: 'root' 
}) 
export class Auth { 
    constructor() { 
    } 
 
    getUserDetails() { 
        return localStorage.getItem('userAccount')
    } 
     
    setDataInLocalStorage(variableName:any, data:any) { 
        localStorage.setItem(variableName, data); 
    } 
 
    getToken() { 
        return localStorage.getItem('token'); 
    } 
 
    clearStorage() { 
        localStorage.clear(); 
    } 
}