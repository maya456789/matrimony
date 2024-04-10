import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationAstroComponent } from './registration-astro.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const astro: Routes = [{ path: '', component: RegistrationAstroComponent }];

@NgModule({
  declarations: [
    RegistrationAstroComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(astro),
    FormsModule,
    ReactiveFormsModule,   
  ]
})
export class RegistrationAstroModule { }
