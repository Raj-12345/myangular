import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashRoutingModule } from './dash-routing.module';
import { DashComponent } from './dash.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SectionComponent } from './section/section.component';
import { ProductsComponent } from './products/products.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import   {ReactiveFormsModule} from '@angular/forms';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { UsersComponent } from './users/users.component';
import { AddusersComponent } from './addusers/addusers.component';



@NgModule({
  declarations: [DashComponent, HeaderComponent, FooterComponent, SectionComponent, ProductsComponent, AddproductsComponent, MyprofileComponent, UsersComponent, AddusersComponent],
  imports: [
    CommonModule,
    DashRoutingModule,
    ReactiveFormsModule
  ]
})
export class DashModule { }
