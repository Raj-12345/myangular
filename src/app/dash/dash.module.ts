import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashRoutingModule } from './dash-routing.module';
import { DashComponent } from './dash.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SectionComponent } from './section/section.component';
import { ProductsComponent } from './products/products.component';


@NgModule({
  declarations: [DashComponent, HeaderComponent, FooterComponent, SectionComponent, ProductsComponent],
  imports: [
    CommonModule,
    DashRoutingModule
  ]
})
export class DashModule { }
