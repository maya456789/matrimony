import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageMediatorComponent } from './homepage-mediator.component';
import { RouterModule, Routes } from '@angular/router';

const homepagemediator: Routes = [{ path: '', component: HomepageMediatorComponent }];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(homepagemediator),
  ]
})
export class HomepageMediatorModule { }
