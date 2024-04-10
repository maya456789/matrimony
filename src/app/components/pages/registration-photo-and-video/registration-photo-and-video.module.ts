import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationPhotoAndVideoComponent } from './registration-photo-and-video.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const photo: Routes = [{ path: '', component: RegistrationPhotoAndVideoComponent }];

@NgModule({
  declarations: [
    RegistrationPhotoAndVideoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(photo),
    FormsModule,
    ReactiveFormsModule,   
  ]
})
export class RegistrationPhotoAndVideoModule { }
