import { Component, OnInit } from '@angular/core';

import { RoutelistService } from '../services/route-list.services';

@Component({
  selector: 'approutelist',
  templateUrl: './routelist.component.html',
 providers:[RoutelistService]
  })

  export class RoutelistComponent 
  {
    id: number;
     public route;
     public sessionId:string="5017e";
     
     constructor(public routeService:RoutelistService)
     {
       routeService.getAllRoutes().subscribe((response)=>
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
                
              },this.sessionId).subscribe((response) => {
            console.log("response array", response);
       });
     
  }
  
updateRoute(routeId:any,source:any,destination:any,distance:any,time:any) {


  this.route = {

    source:source.value,
    destination:destination.value,
    distance:distance.value,
    time:time.value,
  
  }

  id:routeId.value;



    this.routeService.updateRouteDetails(this.id, this.route).subscribe(
      (response)=>{console.log("Route updated"+response.toString())}
      );
    
  
 
   
  }
  deleteRoute(vehicleid:number) {


    this.routeService.deleteRouteDetails(this.id,this.sessionId).
    subscribe(
      (response)=>{console.log("Route deleted")}
      );

 
  }

 
}


