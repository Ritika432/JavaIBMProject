import { Component, OnInit } from '@angular/core';

import { RouteService } from '../services/route.services';



@Component({
  selector: 'approute',
  template:`<div>
  <h1>
  {{ route | json }}
  </h1>
  </div>`,
   providers:[RouteService]
  })
  export class RouteComponent 
  {
     public route;
     constructor(private routeService:RouteService)
     {
       this.routeService.getRouteDetails().subscribe((response)=>
       {
        this.route=response;
        console.log('Received route details:',response);
         }
       
       );
     }
  }
