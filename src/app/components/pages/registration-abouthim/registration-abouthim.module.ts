import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationAbouthimComponent } from './registration-abouthim.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const abouthim: Routes = [{ path: '', component: RegistrationAbouthimComponent }];



@NgModule({
  declarations: [
    RegistrationAbouthimComponent
   ],
   imports: [
     CommonModule,
     RouterModule.forChild(abouthim),
   FormsModule,
   ReactiveFormsModule,  
   ]
 
})
export class RegistrationAbouthimModule { }
