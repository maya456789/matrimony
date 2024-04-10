import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

const search: Routes = [{ path: '', component: SearchComponent }];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(search),
    NgMultiSelectDropDownModule.forRoot(),
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SearchModule { }
