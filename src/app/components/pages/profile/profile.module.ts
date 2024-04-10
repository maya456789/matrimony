import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { RouterModule, Routes } from '@angular/router';

const profile: Routes = [{ path: '', component: ProfileComponent }];

@NgModule({
  declarations: [
  ProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(profile),
  ]
})
export class ProfileModule { }
