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
    this.loginService.loginUser(this.login).subscribe(
      (res:Result)=>{
        if (res.result==="success")
          {
            this.sessionId=res.sessionId;
            alert("logged in successfully")
          }
        else
        {
          alert("Invalid Email OR Password")
        }
      }
    );
    
 }

  
 
}