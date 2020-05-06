import { Component, OnInit,Input } from '@angular/core';
import {LogoutService} from '../Services/logout.services';
import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
  providers:[LogoutService]
})
export class LogoutComponent implements OnInit 
{
  sessionId :string;
  
   constructor(public logoutService :LogoutService) 
  { 
     
  }

  ngOnInit(): void 
  {
    this.logoutService.deleteUser(this.sessionId).subscribe((response)=>{
      alert(response);
    });
  }

}
