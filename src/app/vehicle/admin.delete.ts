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
  
  vehicle : Vehicle = new Vehicle();

  
  constructor(public adminService: AdminService) 
  
  {
   
  }

   
  getData(vehicleid:number) {
    
    this.vehiclelist=this.adminService.getVehicle(this.vehicleid);

  }



  deleteVehicle(vehicleid:number) {


    this.adminService.deleteVehicleDetails(this.vehicleid).
    subscribe(
      (response)=>{console.log("Vehicle deleted")}
      );

 
  }

}




  
