import { NgModule } from '@angular/core';
import { flushMicrotasks } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { TemplateComponent } from './template/template.component';
import { ReservationHotelComponent } from './reservation-hotel/reservation-hotel.component';

const routes: Routes = [
 {path:'',redirectTo:"/template",pathMatch:"full"} ,
 {path:'template',component:TemplateComponent} ,
 {path:'reservation',component:ReservationHotelComponent} ,

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
