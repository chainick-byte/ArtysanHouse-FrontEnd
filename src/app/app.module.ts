import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
//import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FormBienvenidaComponent } from './components/shared/form-bienvenida/form-bienvenida.component';
import { FormUserComponent } from './components/shared/form-user/form-user.component';

import {HomeService} from './service/home.service';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FormBienvenidaComponent,
    FormUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
   // AppRoutingModule
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
