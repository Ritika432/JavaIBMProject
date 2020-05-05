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
export class AdminDelete implements OnInit {



  
  constructor(public adminService: AdminService) 
  
  {
   
  }

 

  ngOnInit(): void {
   
  }

 
}
