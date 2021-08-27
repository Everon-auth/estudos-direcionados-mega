import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MainShoppingComponent } from './main-shopping/main-shopping.component';
import { PaymentComponent } from './payment/payment.component';
import { ShoppingCartComponent } from './container/shopping-cart.component';
import { NewAdressComponent } from './new-adress/new-adress.component';



@NgModule({
  declarations: [
    NavigationComponent,
    MainShoppingComponent,
    PaymentComponent,
    ShoppingCartComponent,
    NewAdressComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class CartComponentsModule { }
