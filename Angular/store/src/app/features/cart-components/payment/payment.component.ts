import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ComprasService } from 'src/app/shared/services/compras.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  end!:Observable<any>
  constructor(
    private service: ComprasService,

  ) { }

  ngOnInit(): void {
    this.end = this.service.getSavedEnd()
  }

}
