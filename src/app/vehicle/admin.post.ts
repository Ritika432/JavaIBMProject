import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service'
import { Observable } from 'rxjs';
import { Vehicle } from './admin.model';


@Component({
  selector: 'app-admin-post',
  templateUrl: './admin.post.html',
  providers:  [ AdminService ],
  styleUrls: ['./admin.post.css']
})
export class AdminPost implements OnInit {

public Vehicle:Object;

  
  constructor(public adminService: AdminService) 
  
  {
   
  }

  ngOnInit(): void {
   
  }


 addVehicle(name:any,type:any,registrationNumber:any,seatingCapacity:any,farePerKm:any) {


  this.Vehicle = {

  "name":name.value,
  "type":type.value,
  "registrationNumber":registrationNumber.value,
  "seatingCapacity":seatingCapacity.value,
  "farePerKm":farePerKm.value

}

this.adminService.addVehicleDetails(this.Vehicle).subscribe(
  (response)=>{console.log("Vehicle added"+response.toString())}
  );





 }

 
 
}
