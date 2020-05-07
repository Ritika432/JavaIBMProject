import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service'
import { Observable } from 'rxjs';
import {Result}from './result.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers:  [ LoginService ],
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  login: Object;
  sessionId:string;



  
  constructor(public  loginService:  LoginService) 
  
  {
    
  }
  ngOnInit(): void 
  {
  }


 checkLogin(emailId:any,password:any)
 {  
    this.login={
      emailId:emailId.value,
      password:password.value
    }
    this.loginService.loginUser(this.login);
    if(this.loginService.sessionId != null)
     alert("User Logged In");
    else
    alert("Invalid Email-Id or Password");
 }

  
 
}