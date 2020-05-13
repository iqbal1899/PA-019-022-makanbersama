import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditAppointmentPageRoutingModule } from './edit-appointment-routing.module';

import { EditAppointmentPage } from './edit-appointment.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditAppointmentPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EditAppointmentPage]
})
export class EditAppointmentPageModule {}
