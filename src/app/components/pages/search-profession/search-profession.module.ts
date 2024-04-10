import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchProfessionComponent } from './search-profession.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const searchprofession: Routes = [{ path: '', component: SearchProfessionComponent }];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(searchprofession),
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SearchProfessionModule { }
