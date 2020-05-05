import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service'
import { Observable } from 'rxjs';
import { VehicleComponent } from '../vehicle/vehicle.component';
import { Vehicle } from './admin.model';


@Component({
  selector: 'app-admin-post',
  templateUrl: './admin.post.html',
  providers:  [ AdminService ],
  styleUrls: ['./admin.post.css']
})
export class AdminPost implements OnInit {

 vehicle : Vehicle = new Vehicle();


  
  constructor(public adminService: AdminService) 
  
  {
   
  }

 addVehicle(): void {


  this.adminService.addVehicleDetails(this.vehicle)
  .subscribe(data => { alert ("Vehicle added successfully");
});



 }

  ngOnInit(): void {
   
  }

 
}
