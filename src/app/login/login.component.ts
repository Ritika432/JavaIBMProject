import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service'
import { Observable } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers:  [ LoginService ],
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

 login : LoginComponent = new LoginComponent();


  
  constructor(public  loginService:  LoginService) 
  
  {
   
  }

 addUser(): void {


  this.loginService.getUser(this.login)
  .subscribe(data => { alert ("Login successfully");
});



 }

  ngOnInit(): void {
   
  }

 
}