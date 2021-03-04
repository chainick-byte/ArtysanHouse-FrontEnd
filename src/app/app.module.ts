import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
//import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FormBienvenidaComponent } from './components/shared/form-bienvenida/form-bienvenida.component';

import {HomeService} from './service/home.service';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FormBienvenidaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
   // AppRoutingModule
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
