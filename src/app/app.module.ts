import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule , ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { BookingComponent } from './booking/booking.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { RegistrationComponent } from './registration/registration.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import {CustomerComponent} from './customer/customer.component';

import { NO_ERRORS_SCHEMA } from "@angular/core"
import {AdministratorComponent} from './customer/administrator.component';
import {RouteComponent} from './route/route.component';
import { importExpr } from '@angular/compiler/src/output/output_ast';
import { DriverComponent } from './driver/driver.component';


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
    RouteComponent,
    
    CustomerComponent,
    RouteComponent,
    DriverComponent,
    /dministratorComponent
*/
RouteComponent
  ],
  imports: [
    BrowserModule,
    /*FormsModule,
    ReactiveFormsModule,
    */AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule

    

  ],
  providers: [],
  bootstrap: [AppComponent],
  
  
})
export class AppModule { }
