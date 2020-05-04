  
import { Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class AdminService{

  public httpHeaders:HttpHeaders;

  constructor(private _httpClient: HttpClient){
    this.httpHeaders=new HttpHeaders()
    .set('allow-origin-access-control','*')
    .set('Content-type','application/json');
  }


getVehicle() : Observable<Object> {

return this._httpClient.get( 'http://localhost:8080/app/vehicle/{vehicleid}' , {headers: this.httpHeaders});
}


addVehicleDetails(vehicleObj,sessionId): Observable<Object> {
    return this._httpClient.post('http://localhost:8080/app/vehicle',JSON.stringify(vehicleObj),{headers:this.httpHeaders.set('authtoken',sessionId)});
  }

  updateVehicleDetails(vehicleObj,sessionId): Observable<Object> {
    return this._httpClient.put('http://localhost:8080/app/vehicle/{vehicleid} ',JSON.stringify(vehicleObj),{headers:this.httpHeaders.set('authtoken',sessionId)});
  }


deleteVehicleDetails(sessionId): Observable<Object> {
    return this._httpClient.put('http://localhost:8080/app/vehicle/{vehicleid}' ,{headers:this.httpHeaders.set('authtoken',sessionId)});
  } 


}