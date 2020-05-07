import { Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class RoutelistService{

  public httpHeaders:HttpHeaders;

  constructor(private _httpClient: HttpClient){
    this.httpHeaders=new HttpHeaders()
    .set('allow-origin-access-control','*')
    .set('Content-type','application/json');
  }
  getAllRoutes(): Observable<Object> {
    return this._httpClient.get('http://localhost:4001/app/route',{headers:this.httpHeaders});
  }
  deleteRouteDetails(id,sessionId): Observable<Object> {
    return this._httpClient.delete('http://localhost:4001/app/route/{routeId} ',{headers:this.httpHeaders.set('authToken',sessionId)});
  }
  addRouteDetails(routeObj,sessionId:string): Observable<Object> {
    return this._httpClient.post('http://localhost:4001/app/route',JSON.stringify(routeObj),{headers:this.httpHeaders.set('authtoken',sessionId)});
  }
  updateRouteDetails(routeObj,sessionId): Observable<Object> {
    return this._httpClient.put('http://localhost:4001/app/route/{routeId} ',JSON.stringify(routeObj),{headers:this.httpHeaders.set('authtoken',sessionId)});
  }
}