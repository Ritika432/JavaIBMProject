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
import { RouteListComponent } from './route-list/route-list.component';
import {CustomerComponent} from './customer/customer.component';
import {AdministratorComponent} from './customer/administrator.component';
import {RouteComponent} from './route/route.component';
//import { DriverComponent } from './driver/driver.component';
import {ChangePasswordComponent} from './changePassword/changepassword.component';



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
    RouteListComponent,
    CustomerComponent,
    RouteComponent,
    AdministratorComponent,
    ChangePasswordComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
   
    HttpClientModule,
    BrowserAnimationsModule

  ],
  providers: [
    HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
