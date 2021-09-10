import { Component, OnDestroy, OnInit } from '@angular/core';
import { FilterComponent } from '../../../features/main-components/filter/filter.component';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ShoppingCartComponent } from '../../cart-components/container/shopping-cart.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  itens!: number;
  categorias: any = ['Eletrônicos'];
  filtro!: string[]
  sub!: Subscription
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    console.log()
  }
  openDialog() {
    const dialogRef = this.dialog.open(FilterComponent, {
      height: '800px',
      width: '1200px',
    });

    this.sub = dialogRef.afterClosed().subscribe(result => {
      console.log(result)
    })
  }
  openCart() {
    const dialogRef = this.dialog.open(ShoppingCartComponent, {
      height: '800px',
      width: '1200px',
      panelClass: 'custom-dialog-container',
    })
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
