import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service'
import { Observable } from 'rxjs';
import { VehicleComponent } from '../vehicle/vehicle.component';
import { Vehicle } from './admin.model';


@Component({
  selector: 'app-admin-delete',
  templateUrl: './admin.post.html',
  providers:  [ AdminService ],
  styleUrls: ['./admin.post.css']
})
export class AdminDelete  {



 vehicle : Vehicle = new Vehicle();

  
  constructor(public adminService: AdminService) 
  
  {
   
  }
  deleteVehicle(vehicleid:number) {


    this.adminService.deleteVehicleDetails(vehicleid)
    .subscribe(data => { alert ("Vehicle deleted successfully");
  });

 
  }

}




  
