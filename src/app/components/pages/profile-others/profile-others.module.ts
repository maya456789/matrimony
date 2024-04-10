import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileOthersComponent } from './profile-others.component';
import { Routes, RouterModule, Router } from '@angular/router';

const profileOthers : Routes = [{path: '', component: ProfileOthersComponent}]

@NgModule({
  declarations: [
    ProfileOthersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(profileOthers),
  ]
})
export class ProfileOthersModule { }
