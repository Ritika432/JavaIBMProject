import { Component } from '@angular/core';
import { AdminService } from '../services/admin.service';
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
providers: [ AdminService ]
})
export class DriverComponent {
public driver;
model = new Driver();
public getRegistrationservice;
constructor(private getService: AdminService)
{
this.getRegistrationservice=getService;
}
 onSubmit(name:any,street:any,location:any,city:any,state:any,pincode:any,mobile:any,license:any)
{
this.getRegistrationservice.Driver({
"name":name.value,
"street":street.value,
"location":location.value,
"city":city.value,
"state":state.value,
"pincode":pincode.value,
"mobileNo":mobile.value,
"licenseNumber":license.value
}
).subscribe((response)=> {
this.driver=response;
console.log("New Driver added : ",response);
});
}
}