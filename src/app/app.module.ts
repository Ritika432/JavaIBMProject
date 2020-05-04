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
import {RouteComponent} from './route/route.component';






@NgModule({
  declarations: [
    AppComponent,
    VehicleComponent,
    CreditCardComponent,
    BookingComponent,
    RouteComponent,
  //  LoginComponent,
   // RegistrationComponent,
   // VehicleListComponent,
   // RouteListComponent,

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
  bootstrap: [AppComponent]
})
export class AppModule { }
