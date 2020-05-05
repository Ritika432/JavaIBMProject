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
    vehicle: Vehicle ;

    constructor(public adminService: AdminService) 
  
  {
   
    
  }
  ngOnInit() {
    
  }

  updateVehicle() {
    this.adminService.updateVehicleDetails(this.id, this.vehicle)
      .subscribe(data => console.log(data), error => console.log(error));
    this.vehicle = new Vehicle();
 
    alert("Vehicle Data Updated Successfully");
  }

  onSubmit() {
    this.updateVehicle();    
  }
 
}
