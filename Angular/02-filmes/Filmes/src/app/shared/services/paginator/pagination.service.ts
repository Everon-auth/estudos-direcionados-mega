import { Injectable } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  constructor() { }
  public array: any;
  public displayedColumns = ['', '', '', '', ''];
  public dataSource: any;

  pagination(data: any, pageSize: number,currentPage:number) {
    this.array = data
    const end = (currentPage + 1) * pageSize;
    const start = currentPage * pageSize;
    const part = this.array.slice(start, end);
    return part
  }
}
