import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuickSearchComponent } from './quick-search.component';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const quicksearch: Routes = [{ path: '', component: QuickSearchComponent }];

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(quicksearch),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class QuickSearchModule { }
