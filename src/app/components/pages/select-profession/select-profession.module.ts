import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import{SelectProfessionComponent} from './select-profession.component'

const profession: Routes = [{ path: '', component: SelectProfessionComponent }];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(profession)
  ]
})
export class SelectProfessionModule { }
