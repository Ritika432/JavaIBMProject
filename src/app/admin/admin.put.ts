import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service'
import { Observable } from 'rxjs';
import { Vehicle } from './admin.model';



@Component({
  selector: 'app-admin-put',
  templateUrl: './admin.post.html',
  providers:  [ AdminService ],
  styleUrls: ['./admin.post.css']
})
export class AdminPut implements OnInit {

    id: number;
    public Vehicle:Object;

    constructor(public adminService: AdminService) 
  
  {
   
    
  }
  ngOnInit() {
    
  }

updateVehicle(vehicleid:any,name:any,type:any,registrationNumber:any,seatingCapacity:any,farePerKm:any) {


  this.Vehicle = {

    name:name.value,
    type:type.value,
    registrationNumber:registrationNumber.value,
    scap:seatingCapacity.value,
    fare:farePerKm.value
  
  }

  id:vehicleid.value;



    this.adminService.updateVehicleDetails(this.id, this.Vehicle).subscribe(
      (response)=>{console.log("Vehicle added"+response.toString())}
      );
    
  
 
    alert("Vehicle Data Updated Successfully");
  }

 
}
