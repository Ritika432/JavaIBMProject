import { Component } from '@angular/core';
import { AdminService } from '../services/admin.service';
import {DriverService} from '../services/driver.services'
export class Driver {
public driverId: String;
public name: string;
public street: string;
public location: string;
public city: string;
public state: string;
public pincode: string;
public mobileNumber: Number;
public licenseNumber: string;
}
@Component({
selector: 'register-driver',
templateUrl: './driver.component.html',
//styleUrls: ['./app.component.css']
providers: [ AdminService,DriverService ]
})
export class DriverComponent {
public driver;
model = new Driver();
public getRegistrationservice;
constructor(private getService: AdminService,driverService:DriverService)
{
this.getRegistrationservice=getService;

}
 onSubmit(name:any,street:any,location:any,city:any,state:any,pincode:any,mobilenumber:any,licenseNumber:any)
{
    console.log(licenseNumber)
this.getRegistrationservice.Driver({
"name":name.value,
"street":street.value,
"location":location.value,
"city":city.value,
"state":state.value,
"pincode":pincode.value,
"mobileNo":mobilenumber.value,
"licenseNumber":licenseNumber.value
}
).subscribe((response)=> {
this.driver=response;
console.log("New Driver added : ",response);
});
}
}