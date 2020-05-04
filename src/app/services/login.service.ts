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

      getUser() : Observable<Object> {

        return this._httpClient.get( 'http://localhost:8080/app/admin/user/login' , {headers: this.httpHeaders});
        }


}
