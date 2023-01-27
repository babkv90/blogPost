import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { DashboardModuleModule } from './dashboard-module/dashboard-module.module';
import { DashboardModule } from './dashboard/dashboard.module';

const routes: Routes = [
   {path : '', loadChildren : ()=>DashboardModuleModule},
   {path : 'admin', loadChildren : ()=>AdminModule}, 
  //  {path : '', loadChildren : ()=>DashboardModule}, 
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
