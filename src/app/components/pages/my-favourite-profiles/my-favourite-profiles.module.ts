import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFavouriteProfilesComponent } from './my-favourite-profiles.component';
import { RouterModule, Routes } from '@angular/router';

const myFavProfile : Routes = [{ path: '', component: MyFavouriteProfilesComponent }];

@NgModule({
  declarations: [
    MyFavouriteProfilesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(myFavProfile),
  ]
})
export class MyFavouriteProfilesModule { }
