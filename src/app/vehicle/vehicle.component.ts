import { Component, OnInit } from '@angular/core';

import { VehicleService } from '../services/vehicle.service';



@Component({
  selector: 'appvehicle',
  // template:`<div>
  // <h1>
  // {{ vehicles | json }}
  // </h1>
  // </div>`,
  templateUrl: "./vehicle.component.html",
  styleUrls: ["./vehicle.component.css"],
  providers: [VehicleService]
})
export class VehicleComponent {
  public vehicles = [];
  constructor(private vehicleService: VehicleService) {
    this.vehicleService.getVehicle().subscribe((response) => {
      console.log("response array", response)
      let key;
      for(key in response){
        this.vehicles.push(response[key]);
      }

      console.log("vehicle",this.vehicles)

    }



    );
  }
  
}

      // this.temp.push(response);
      // for (let index = 0; index < this.temp.length*2; index++) {
      //   let x= this.temp[index];
      //   this.vehicles.push(x[index]);
      // }