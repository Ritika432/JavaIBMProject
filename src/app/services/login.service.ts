import { Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class LoginService{

    public httpHeaders:HttpHeaders;

    constructor(private _httpClient: HttpClient){
        this.httpHeaders=new HttpHeaders()
        .set('allow-origin-access-control','*')
        .set('Content-type','application/json');
      }

      getUser(userObj) : Observable<Object> {

        return this._httpClient.post( 'http://localhost:8080/app/admin/user/login' ,JSON.stringify(userObj) , {headers: this.httpHeaders})  ;
        }


}
