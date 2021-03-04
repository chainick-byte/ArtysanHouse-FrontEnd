import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/service/home.service';
import { Home } from '../../modelos/home';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',

})
export class HomeComponent implements OnInit {

  home:Home[]=[];
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.getHome().subscribe(data=>{this.home=data;
    });
  }

}
