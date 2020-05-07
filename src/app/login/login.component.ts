import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers:  [ LoginService ],
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  login: Object;
  sessionId:string;



  
  constructor(public  loginService:  LoginService,public router:Router) 
  {
    var promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Async Work Complete");
        resolve();
      }, 1000);
    });
  }
  ngOnInit(): void 
  {
  }


  loginOk(emailId:any,password:any)
  {  
     this.login={
       emailId:emailId.value,
       password:password.value
     }
     
     
     this.loginService.loginUser(this.login);
     if(this.loginService.sessionId != null){
     console.log("sessionId: ",this.loginService.sessionId)
     sessionStorage.setItem("sessionId",this.sessionId);
    
     this.router.navigate(['/dash'])
    }
     else{
      
     }  
  }
 
  signUP(){
    this.router.navigate(['registrationOption'])
  }
  goToChangePassword(){
    this.router.navigate(['checkPass'])
  }
 
}