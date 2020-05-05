import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { BookingComponent } from './booking/booking.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import {CustomerComponent} from './customer/customer.component';
import {RouteComponent} from './route/route.component';

import { NO_ERRORS_SCHEMA } from "@angular/core"


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    VehicleComponent, CreditCardComponent,
    BookingComponent,
    VehicleComponent,
    LoginComponent,
    RegistrationComponent,
    VehicleListComponent,
    CustomerComponent,
    RouteComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
    

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
