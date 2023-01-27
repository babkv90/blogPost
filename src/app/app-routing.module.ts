import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { DashboardModuleModule } from './dashboard-module/dashboard-module.module';

const routes: Routes = [
   {path : '', loadChildren : ()=>DashboardModuleModule},
   {path : 'admin', loadChildren : ()=>AdminModule}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
