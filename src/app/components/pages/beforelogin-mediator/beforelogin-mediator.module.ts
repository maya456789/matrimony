import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeforeloginMediatorComponent } from './beforelogin-mediator.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const beforemediator: Routes = [{ path: '', component: BeforeloginMediatorComponent }];

@NgModule({
  declarations: [

    BeforeloginMediatorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(beforemediator),
    FormsModule,
    ReactiveFormsModule, 
  ]
})
export class BeforeloginMediatorModule { }
