import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponentComponent } from './navbar-component/navbar-component.component';
import { DashboardModuleComponent } from './dashboard-module/dashboard-module.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponentComponent,
    DashboardModuleComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
