import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardModuleModule } from './dashboard-module/dashboard-module.module';
import { CodeEditorComponent } from './code-editor/code-editor.component';

import * as hljs from 'highlight.js';


@NgModule({
  declarations: [
    AppComponent,
    CodeEditorComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
