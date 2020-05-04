import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../Services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  providers:[CustomerService]
})
export class CustomerComponent implements OnInit {

  constructor(private customerService:CustomerService) 
  { 

  }

  ngOnInit(): void 
  {

  }

}
