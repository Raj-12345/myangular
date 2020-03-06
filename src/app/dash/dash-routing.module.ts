import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashComponent } from './dash.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
  {
    path: '', component: DashComponent

  },
  {
    path:'products' ,component:ProductsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashRoutingModule { }
