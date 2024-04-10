import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtherOrganizationComponent } from './other-organization.component';
import { RouterModule, Routes } from '@angular/router';

const otherOrganization: Routes = [{ path: '', component: OtherOrganizationComponent }];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(otherOrganization),
  ]
})
export class OtherOrganizationModule { }
