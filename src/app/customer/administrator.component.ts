import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../Services/customer.service';
import {Customer} from './customer.model';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css'],
  providers:[CustomerService]
})
export class AdministratorComponent implements OnInit {

  public newAdmin:Object;

  constructor(private customerService:CustomerService) 
  { 
      
  }

  ngOnInit(): void 
  {
    
  }
  setAdmin(firstname:any,lastname:any,emailId:any,password:any)
  {
    
     this.newAdmin=
     {
       firstName:firstname.value,
       lastName:lastname.value,
       emailId:emailId.value,
       password:password.value,
       userType:"A"
     }
     //console.log("Customer added"+this.newCustomer.toString())
     
    this.customerService.addCustomer(this.newAdmin).subscribe(
      (response)=>{console.log("Administrator added"+response.toString())}
      );
  }

}
