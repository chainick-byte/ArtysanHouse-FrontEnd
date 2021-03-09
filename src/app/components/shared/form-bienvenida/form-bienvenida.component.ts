import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Home } from 'src/app/modelos/home';
import {HomeService} from 'src/app/service/home.service';

@Component({
  selector: 'app-form-bienvenida',
  templateUrl: './form-bienvenida.component.html',

})
export class FormBienvenidaComponent implements OnInit {

  public home:Home=new Home();
 
  constructor(private homeService:HomeService) { }

  ngOnInit(): void {
  }
  actualizar(form:NgForm){

    console.log("funciona");
    console.log(this.home);

    this.homeService.actualizarBienVenida(this.home).subscribe(resp=>{
      console.log(resp);
    })

  }
}
