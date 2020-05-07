
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service'
import { Observable } from 'rxjs';
import {Result}from './result.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-options',
  templateUrl: './registration.options.html',
  providers:  [ LoginService ],
  styleUrls: ['./registration.options.css']
})

export class RegistrationOptionComponent implements OnInit {
  login: Object;
  sessionId:string;



  
  constructor(public  loginService:  LoginService,public router :Router) 
  
  {
    
  }
  ngOnInit(): void 
  {
  }
  goToAdminRegistration(){
    this.router.navigate[(
      'login'
    )]
  }

}