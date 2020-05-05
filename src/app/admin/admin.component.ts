import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  providers:  [ AdminService ],
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  vehiclelist : Observable <Object>;
  vehicleid : number;
  
  constructor(public adminService: AdminService) 
  
  {
   
  }

  ngOnInit(): void {
    this.getData();
  }

 
  getData() {
    
    this.vehiclelist=this.adminService.getVehicle(this.vehicleid);

  }

}
