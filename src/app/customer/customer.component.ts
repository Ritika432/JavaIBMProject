import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../Services/customer.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[CustomerService]
})
export class UserComponent implements OnInit {

  constructor(private customerService:CustomerService) 
  { 

  }

  ngOnInit(): void 
  {

  }

}
