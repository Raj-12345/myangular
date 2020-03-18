import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashComponent } from './dash.component';
import { ProductsComponent } from './products/products.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { UsersComponent } from './users/users.component';
import { AddusersComponent } from './addusers/addusers.component';



const routes: Routes = [
  {
    path: '', component: DashComponent

  },
  {
    path:'products' ,component:ProductsComponent
  },
  {
    path:'addproducts' ,component:AddproductsComponent
  },
  {
    path:'addproducts/:id' ,component:AddproductsComponent
  },
  {
    path:'myprofile' ,component:MyprofileComponent
  },
  {
    path:'users' ,component:UsersComponent
  },
  {
    path:'addusers' ,component:AddusersComponent
  },
  {
    path:'addusers/:id' ,component:AddusersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashRoutingModule { }
