import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { RouterModule, Routes } from '@angular/router';

const homepage: Routes = [{ path: '', component: HomepageComponent }];

@NgModule({
  declarations: [
  
    ],
  imports: [
    CommonModule,
    RouterModule.forChild(homepage),
  ]
})
export class HomepageModule { }
