import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes , RouterModule } from '@angular/router';
import { MyProfileComponent } from './my-profile.component';

const myProfile : Routes = [{path: '', component: MyProfileComponent}];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(myProfile),
  ]
})
export class MyProfileModule { }
