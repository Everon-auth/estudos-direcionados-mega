import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../services/crud.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {

  id:any
  constructor(
    private router: Router,
    private service: CrudService,
    private route: ActivatedRoute,

  ) { }
  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }

  yes(){
    this.route.params.subscribe(value => this.id =value)
    console.log(this.id)
    this.service.deleteData(this.id.id).subscribe()

    this.redirect()
  }
  redirect(){
    this.router.navigate(['films'])
  }
}
