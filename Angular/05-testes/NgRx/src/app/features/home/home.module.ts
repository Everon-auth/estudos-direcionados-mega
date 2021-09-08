import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { HomeRoutingModule } from './home.routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule
  ],
})
export class HomeModule { }
