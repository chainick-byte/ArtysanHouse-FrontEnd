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
  constructor(private http: HttpClient) {
    this.useUrl = 'http://localhost:8080/api/bienvenido';
  }

  public getHome(): Observable<Home[]> {
    console.log(this.http.get<Home[]>(this.useUrl))
    return this.http.get<Home[]>(this.useUrl).pipe(
      map(response => response as Home[])
    );
  }
}

