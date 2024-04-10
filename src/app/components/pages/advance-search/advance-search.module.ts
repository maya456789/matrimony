import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvanceSearchComponent } from './advance-search.component';

import { RouterModule, Routes } from '@angular/router';

const advancesearch: Routes = [{ path: '', component: AdvanceSearchComponent }];

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(advancesearch),
  ]
})
export class AdvanceSearchModule { }
