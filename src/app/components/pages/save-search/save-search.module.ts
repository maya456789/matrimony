import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaveSearchComponent } from './save-search.component';

import { RouterModule, Routes } from '@angular/router';

const savemysearch: Routes = [{ path: '', component: SaveSearchComponent }];

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(savemysearch),
  ]
})
export class SaveSearchModule { }
