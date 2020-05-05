import { Component, OnInit } from '@angular/core';

import { RouteService } from '../services/route.services';
//import {Pipe,PipeTransform} from '@angular/core';


@Component({
  selector: 'approute',
  //template:`<div>
  //<h1>
  //{{ route | json }}
  //</h1>
  //</div>`,
  templateUrl: "./route.component.html",
  styleUrls: ["./route.component.css"],
  providers: [RouteService]
})
export class RouteComponent  {
  public routes = [];
  constructor(private routeService:RouteService) {
    
    this.routeService.getRouteDetails().subscribe((response) => {
      console.log("response array", response)
      let key;
      for(key in response){
        this.routes.push(response[key]);
      }

      console.log("vehicle",this.routes)

    }



    );
  }
  
}

      // this.temp.push(response);
      // for (let index = 0; index < this.temp.length*2; index++) {
      //   let x= this.temp[index];
      //   this.vehicles.push(x[index]);
      // }