import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{MySuggestionComponent} from './my-suggestion.component'
const mysuggestion: Routes = [{ path: '', component: MySuggestionComponent }];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(mysuggestion),
    ReactiveFormsModule,
    FormsModule
  ]
})
export class MySuggestionModule { }
