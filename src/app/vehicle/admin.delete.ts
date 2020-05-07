import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service'
import { Observable } from 'rxjs';
import { Vehicle } from './admin.model';


@Component({
  selector: 'app-admin-delete',
  templateUrl: './admin.delete.html',
  providers:  [ AdminService ],
  styleUrls: ['./admin.delete.css']
})
export class AdminDelete  {


  vehiclelist : Observable <Object>;
  vehicleid : number;

  public vehicles = [];
  
  vehicle : Vehicle = new Vehicle();

  
  constructor(public adminService: AdminService) 
  
  {
   
  }

   
  getData() {
    
    this.adminService.getVehicle(this.vehicleid).subscribe((response) => {
      console.log("response array", response)
      let key;
      for(key in response){
        this.vehicles.push(response[key]);
      }

      console.log("vehicle",this.vehicles)

    }



    );
    
  
}



  deleteVehicle() {


    this.adminService.deleteVehicleDetails(this.vehicleid).
    subscribe(
      (response)=>{console.log("Vehicle deleted",response)}
      );

 
  }

}




  
