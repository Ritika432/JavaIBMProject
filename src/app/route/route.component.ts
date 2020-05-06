import { Component, OnInit } from '@angular/core';

import { RouteService } from '../services/route.services';
//import {Pipe,PipeTransform} from '@angular/core';

<<<<<<< HEAD
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
=======

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
>>>>>>> c41ee7457d86ee4d191a345a8d4ccaa1a8e8f6c4
