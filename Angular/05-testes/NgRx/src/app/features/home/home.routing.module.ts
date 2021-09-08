import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardService } from 'src/app/shared/guards/auth.guard.service';
import { HomeComponent } from './home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthguardService]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
