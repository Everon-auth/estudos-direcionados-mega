import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { ComprasService } from 'src/app/shared/services/compras.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  end!:Observable<any>

  @Output() newAddress = new EventEmitter;
  constructor(
    private service: ComprasService,

  ) { }

  ngOnInit(): void {
    this.end = this.service.getSavedEnd()
  }
  emitNewAddress(){
    this.newAddress.emit({valor: true})
  }
}
