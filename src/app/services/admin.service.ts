  
import { Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class AdminService{

  public httpHeaders:HttpHeaders;
  public sessionId:   string="";

  public baseurl = 'http://localhost:8080/app/vehicle';

  constructor(private _httpClient: HttpClient){
    this.httpHeaders=new HttpHeaders()
    .set('allow-origin-access-control','*')
    .set('Content-type','application/json');
  }


getVehicle(vehicleid:number) : Observable<Object> {

return this._httpClient.get( `${this.baseurl}/${vehicleid}` , {headers: this.httpHeaders});
}


addVehicleDetails(vehicleObj:Object): Observable<Object> {
    return this._httpClient.post(`${this.baseurl}`,JSON.stringify(vehicleObj),{headers:this.httpHeaders.set('authtoken',this.sessionId)});
  }

  updateVehicleDetails(vehicleid:number , vehicleObj:Object): Observable<Object> {
    return this._httpClient.put(`${this.baseurl}/${vehicleid}`,JSON.stringify(vehicleObj),{headers:this.httpHeaders.set('authtoken',this.sessionId)});
  }


deleteVehicleDetails(vehicleid:number): Observable<Object> {
    return this._httpClient.put( `${this.baseurl}/${vehicleid}` ,{headers:this.httpHeaders.set('authtoken',this.sessionId)});
  } 


}