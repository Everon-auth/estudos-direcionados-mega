import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateFormatService {

  constructor() { }

  dateNow() {
    const data = new Date()
    const dia = data.getDate();
    const mes = data.getMonth();
    const ano = data.getFullYear();
    const hora = data.getHours();
    const min = data.getMinutes();
    const seg = data.getSeconds();
    const dialog = `Dia = ${dia}/${mes + 1}/${ano}`;
    const horalog = `Hora = ${hora}:${min},${seg}`
    return {
      dialog,
      horalog
    }
  }
}
