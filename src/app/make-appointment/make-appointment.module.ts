import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MakeAppointmentPageRoutingModule } from './make-appointment-routing.module';

import { MakeAppointmentPage } from './make-appointment.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MakeAppointmentPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [MakeAppointmentPage]
})
export class MakeAppointmentPageModule {}
