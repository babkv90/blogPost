import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardModuleComponent } from './dashboard-module.component';
import { NavbarComponentComponent } from '../navbar-component/navbar-component.component';
import { DashboardModuleRoutingModule } from './dashboard-module-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SidebarAccordianComponent } from '../sidebar-accordian/sidebar-accordian.component';




@NgModule({
  declarations: [
    DashboardModuleComponent,
    NavbarComponentComponent,
    SidebarAccordianComponent
  ],
  imports: [
    CommonModule,
    DashboardModuleRoutingModule,
    ReactiveFormsModule
  ]
})
export class DashboardModuleModule { }
