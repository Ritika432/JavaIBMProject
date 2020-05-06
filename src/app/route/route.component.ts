import { Component, OnInit } from '@angular/core';

import { RouteService } from '../services/route.services';
//import {Pipe,PipeTransform} from '@angular/core';

@Component({
  selector: 'approute',
  templateUrl: './route.component.html'
// providers:[RouteService]
  })

  export class RouteComponent 
  {
     public route;
     private routeService;
     constructor(routeService:RouteService)
     {
       this.routeService.getRouteDetails().subscribe((response)=>
       {
        this.route=response;
        console.log('Received route details:',response);
         }
       
       );
     }
     onSubmit(source:any,destination:any,distance:any,time:any)
     {
            this.routeService.addRouteDetails({
 
                "source":source.value,
                "destination":destination.value,
                 "distance":distance.value,
                 "time":time.value,
                
              }).subscribe((response) => {
            console.log("response array", response);
       });
     
  }
}