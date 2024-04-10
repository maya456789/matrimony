import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultComponent } from './search-result.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const searchResult: Routes = [{ path: '', component: SearchResultComponent }];

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(searchResult),
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SearchResultModule { }
