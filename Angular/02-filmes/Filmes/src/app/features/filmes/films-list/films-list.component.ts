import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.scss']
})
export class FilmsListComponent implements OnInit {

  @Input() data: any;

  rotaAtiva:any
  constructor(
    private route:Router) { }

  ngOnInit(): void {
  }

  showModal(id: number) {
    this.changeRoute('exclude', id)
  }
  onView(id: number) {
    this.changeRoute('view', id)
  }
  onEdit(id: number) {
    this.changeRoute('edit', id)
  }
  changeRoute(type: string, id: number) {
    this.rotaAtiva = this.route.url
    this.route.navigate([`${this.rotaAtiva}/${type}`, id])
  }

}
