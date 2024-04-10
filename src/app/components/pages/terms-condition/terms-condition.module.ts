import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TermsConditionComponent } from './terms-condition.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const terms: Routes = [{ path: '', component: TermsConditionComponent }];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(terms),
    ReactiveFormsModule,
    FormsModule
  ]
})
export class TermsConditionModule { }
