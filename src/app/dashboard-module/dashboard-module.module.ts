import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardModuleComponent } from './dashboard-module.component';
import { NavbarComponentComponent } from '../navbar-component/navbar-component.component';
import { DashboardModuleRoutingModule } from './dashboard-module-routing.module';




@NgModule({
  declarations: [
    DashboardModuleComponent,
    NavbarComponentComponent
  ],
  imports: [
    CommonModule,
    DashboardModuleRoutingModule
  ]
})
export class DashboardModuleModule { }
