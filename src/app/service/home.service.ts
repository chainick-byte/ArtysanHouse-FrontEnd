import { Injectable } from '@angular/core';
import { Home } from '../modelos/home';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';





@Injectable({
  providedIn: 'root'
})
export class HomeService {
  
  private useUrl: string;
  private userUrlGuradar: string;
  private useUrlActualizar: string;
  private httpHeaders=new HttpHeaders({'Content-type': 'aplication/json'});
  constructor(private http: HttpClient) {
    this.useUrl = 'http://localhost:8080/api/bienvenido';
    this.userUrlGuradar = 'http://localhost:8080/api/guardobienvenido';
    this.useUrlActualizar = 'http://localhost:8080/api/bienvenido/1';
  }

  public getHome(): Observable<Home[]> {
    console.log(this.http.get<Home[]>(this.useUrl))
    return this.http.get<Home[]>(this.useUrl).pipe(
      map(response => response as Home[])
    );
  }
  
  
  actualizarBienVenida(home: Home) {
    console.log(home);
    return this.http.put(`${this.useUrlActualizar}`,home);



  }
  
  

}

